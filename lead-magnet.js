(function () {
  var ENDPOINT = "https://qfl-checklist-signup.ai4221918.workers.dev/subscribe";

  function initForm(form) {
    var email = form.querySelector('input[name="email"]');
    var marketing = form.querySelector('input[name="marketing_opt_in"]');
    var company = form.querySelector('input[name="company"]');
    var button = form.querySelector('button[type="submit"]');
    var status = form.querySelector('[data-qfl-status]');

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      status.textContent = "";
      status.removeAttribute("data-state");

      if (!email.checkValidity()) {
        email.reportValidity();
        return;
      }

      button.disabled = true;
      button.textContent = "Sending...";

      try {
        var response = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.value.trim(),
            marketing_opt_in: Boolean(marketing && marketing.checked),
            company: company ? company.value : ""
          })
        });

        var data = await response.json().catch(function () { return {}; });
        if (!response.ok || !data.ok) {
          throw new Error(data.error || "Something went wrong. Please try again.");
        }

        status.textContent = "Done. Check your inbox for the Japandi Room Setup Checklist.";
        status.setAttribute("data-state", "success");
        form.reset();

        if (typeof gtag === "function") {
          gtag("event", "lead_submit", {
            lead_type: "japandi_checklist",
            page_location: window.location.href,
            page_title: document.title
          });
        }
      } catch (err) {
        status.textContent = err && err.message ? err.message : "Something went wrong. Please try again.";
        status.setAttribute("data-state", "error");
      } finally {
        button.disabled = false;
        button.textContent = "Send me the checklist";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-qfl-checklist]").forEach(initForm);
  });
})();