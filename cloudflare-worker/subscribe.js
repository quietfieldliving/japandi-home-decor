const SEGMENT_ID = "31ce75b7-f17e-4bfb-a141-ca56553d88d3";
const TOPIC_ID = "0ae89fc3-96dc-458b-835a-e4ffaee22d37";
const EVENT_NAME = "lead.japandi_checklist_requested";

const ALLOWED_ORIGINS = new Set([
  "https://quietfieldliving.github.io",
  "https://quietfieldliving.com",
  "https://www.quietfieldliving.com"
]);

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : "https://quietfieldliving.github.io";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
    "Content-Type": "application/json; charset=utf-8"
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders(origin)
  });
}

async function resend(path, init, apiKey) {
  return fetch(`https://api.resend.com${path}`, {
    ...init,
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/subscribe") {
      return json({ ok: false, error: "Not found" }, 404, origin);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ ok: false, error: "Origin not allowed" }, 403, origin);
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: "Server configuration error" }, 500, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "Invalid request" }, 400, origin);
    }

    // Honeypot: bots often fill hidden company fields. Return success without doing anything.
    if (typeof body.company === "string" && body.company.trim() !== "") {
      return json({ ok: true }, 200, origin);
    }

    const email = String(body.email || "").trim().toLowerCase();
    const marketingOptIn = body.marketing_opt_in === true;

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return json({ ok: false, error: "Enter a valid email address." }, 400, origin);
    }

    const contactBody = {
      email,
      unsubscribed: !marketingOptIn,
      properties: { lead_source: "japandi_checklist" },
      segments: [{ id: SEGMENT_ID }],
      topics: [{
        id: TOPIC_ID,
        subscription: marketingOptIn ? "opt_in" : "opt_out"
      }]
    };

    let contactResponse = await resend("/contacts", {
      method: "POST",
      body: JSON.stringify(contactBody)
    }, env.RESEND_API_KEY);

    // Existing contacts can request the checklist again. Keep the operation idempotent.
    if (contactResponse.status === 409) {
      const contactPath = `/contacts/${encodeURIComponent(email)}`;

      const updateResponse = await resend(contactPath, {
        method: "PATCH",
        body: JSON.stringify({
          unsubscribed: !marketingOptIn,
          properties: { lead_source: "japandi_checklist" }
        })
      }, env.RESEND_API_KEY);

      if (!updateResponse.ok) {
        return json({ ok: false, error: "Could not update subscription." }, 502, origin);
      }

      // Segment membership and topic preference use their dedicated endpoints.
      const segmentResponse = await resend(
        `${contactPath}/segments/${SEGMENT_ID}`,
        { method: "POST", body: "{}" },
        env.RESEND_API_KEY
      );

      if (!segmentResponse.ok && segmentResponse.status !== 409) {
        return json({ ok: false, error: "Could not update subscription." }, 502, origin);
      }

      const topicResponse = await resend(
        `${contactPath}/topics`,
        {
          method: "PATCH",
          body: JSON.stringify([{
            id: TOPIC_ID,
            subscription: marketingOptIn ? "opt_in" : "opt_out"
          }])
        },
        env.RESEND_API_KEY
      );

      if (!topicResponse.ok) {
        return json({ ok: false, error: "Could not update subscription." }, 502, origin);
      }
    } else if (!contactResponse.ok) {
      return json({ ok: false, error: "Could not create subscription." }, 502, origin);
    }

    const eventResponse = await resend("/events/send", {
      method: "POST",
      body: JSON.stringify({
        event: EVENT_NAME,
        email,
        payload: { source: "japandi_checklist" }
      })
    }, env.RESEND_API_KEY);

    if (!eventResponse.ok) {
      return json({ ok: false, error: "Subscription saved, but delivery could not be started." }, 502, origin);
    }

    return json({
      ok: true,
      message: "Check your inbox for the Japandi Room Setup Checklist."
    }, 200, origin);
  }
};
