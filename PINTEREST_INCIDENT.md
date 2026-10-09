# Pinterest Distribution Incident — Quiet Field Living

Status: **OPEN — publishing paused for diagnosis**

Last updated: 2026-10-09 JST

## Executive diagnosis

Quiet Field Living is experiencing a severe Pinterest Organic distribution collapse that began on 2026-09-25 after a normal 9,000–11,000 impression/day range through 2026-09-24.

The strongest current evidence points to an **account-level, board-level, or domain-associated distribution limitation / spam-quality suppression**, rather than ordinary creative underperformance.

This remains a working diagnosis, not proof of a formal Pinterest enforcement action.

## Evidence

### 1. Profile-level distribution collapse

Pinterest Organic daily impressions:

- 2026-09-20: 8,084
- 2026-09-21: 10,363
- 2026-09-22: 11,165
- 2026-09-23: 10,292
- 2026-09-24: 9,378
- 2026-09-25: 4,214
- 2026-09-26: 686
- 2026-09-27: 432
- 2026-09-28: 401
- 2026-09-29: 697
- 2026-09-30: 125
- 2026-10-01: 38
- 2026-10-02: 53
- 2026-10-03: 36
- 2026-10-04: 40
- 2026-10-05: 32
- 2026-10-06: 39
- 2026-10-07: 29

Outbound clicks collapsed at the same time.

### 2. Fresh Pins are receiving zero test distribution

Pinterest pin analytics currently return **0 impressions** for the newly created recovery Pins from 2026-10-03 through 2026-10-09.

Examples include Dining Chairs, Bar Stools, Shoe Cabinets, Bed Frames, Dining Tables, Ceiling Lights and Storage Cabinets.

This is more significant than low CTR. The new Pins are not merely performing poorly after being shown; they are receiving no measurable initial distribution in the available pin-level data.

### 3. Older Pins still receive residual distribution

Older high-volume Pins still receive small residual impressions after the collapse. The historical Bar Stools winner remains the largest residual source, while most other older Pins have fallen to tiny volumes.

This pattern is consistent with an account/distribution problem rather than one isolated bad category.

## Potential contributing signals

These are risk factors to investigate, not proven causes.

1. High publishing concentration: approximately 100 Pins were built across many categories in a short period during late July / early August.
2. Repetitive commercial structure: many Pins point to similar affiliate-oriented category LPs.
3. Similar AI-generated visual style across a large inventory.
4. Another concentrated publishing batch occurred on 2026-09-12.
5. Exact / near-duplicate recovery Pins were accidentally created on 2026-10-03.
6. One Pin had a malformed destination URL ending in `/TaggedTopics`; this has now been corrected.
7. Pinterest Website Claim is currently not configured.

## Checks completed

### Authenticated Pinterest account inspection — 2026-10-09

Confirmed directly in Pinterest Business UI:

- Business account is active.
- No visible account suspension, restriction, policy warning, safety warning or enforcement banner.
- Profile is public.
- Search privacy is off.
- `Japandi Home Decor` exists as a normal public board; it is not secret or archived.
- Website Claim is not configured.
- Multiple highly similar Bar Stools Pins exist and share the same destination.

Important: absence of a visible warning does **not** rule out algorithmic distribution suppression.

### Site / destination safety

- Main site returns HTTP 200.
- Representative Bar Stools, Dining Chairs, Dining Tables, Shoe Cabinets and Storage Cabinets LPs return HTTP 200.
- No Google Web Risk malware/phishing findings were detected in the tested URLs.
- `robots.txt` allows all user agents and points to the sitemap.

### Broken Pin correction — completed 2026-10-09

Pin ID: `1152077148493060489`

- Previous broken destination: `https://quietfieldliving.github.io/japandi-home-decor/japandi-dining-tables/TaggedTopics`
- Corrected destination: `https://quietfieldliving.github.io/japandi-home-decor/japandi-dining-tables/`
- Pinterest UI confirms the corrected Visit Site destination; Pinterest may append its own UTM parameters.
- No title, image, description or board changes were made.

### Website Claim constraint

Pinterest attempts to claim `quietfieldliving.github.io` at the host level, not only `/japandi-home-decor/`.

The connected GitHub account currently exposes only:

- `quietfieldliving/japandi-home-decor`

There is no `quietfieldliving/quietfieldliving.github.io` user-site repository available through the connected GitHub account. Therefore the current project repository alone cannot reliably place Pinterest's verification file at `https://quietfieldliving.github.io/<verification-file>` or a verification tag at the host root.

Do **not** repeatedly attempt verification against the project subdirectory. Website Claim is a secondary remediation item, not proof of the distribution collapse cause.

### Site speed

Mobile PageSpeed checks show the site is usable but not ideal:

- Home performance: 74/100, lab LCP about 13.3s
- Bar Stools performance: 77/100, lab LCP about 4.3s

This should be improved separately, but it does not plausibly explain an abrupt ~99% account-wide distribution collapse by itself.

### Publishing tooling

Metricool image-transfer errors were a separate implementation problem. The stable transfer path is now:

AI image → RGB 1000x1500 JPEG export → platform-issued `file_id` / `source_file_ref` → Metricool `mediaFiles`.

The recurring Publisher and Publisher Health automations are intentionally paused while the Pinterest distribution incident is diagnosed. Do not confuse publishing-tool reliability with Pinterest distribution recovery.

On 2026-10-09, the two already-scheduled Pins were confirmed **PUBLISHED**. No further volume queue should run automatically.

## Active remediation plan

### Phase 1 — stop adding risk signals — ACTIVE

- Keep the remaining 2-Pins/day recovery queue paused.
- Do not create another burst of near-similar commercial Pins.
- Do not create a replacement Pinterest account to evade a possible limitation.
- Keep LPs and Priority Amazon CTA unchanged during the Pinterest incident investigation.
- Do not mass-delete historical Pins.

### Phase 2 — quiet period and duplicate audit

From the last 2026-10-09 publications, maintain a **72-hour quiet period** with no new Pins.

During the quiet period:

1. Monitor account-level impressions and fresh-Pin impressions.
2. Audit exact / near-exact duplicates created during the 2026-10-03 recovery attempt.
3. Do not delete simply because two Pins share a category; only exact or clearly redundant duplicates qualify for cleanup.
4. Keep the corrected broken-link Pin live unless another issue is found.

### Phase 3 — controlled distribution test

If, after the 72-hour quiet period:

- no explicit Pinterest enforcement appears,
- account-level daily impressions remain below 500,
- and fresh Pins still receive essentially no distribution,

publish **one** controlled fresh Pin only.

Test category: **Bed Frames** by default, not Bar Stools. Reason: Bar Stools already has heavy historical and recovery duplication; Bed Frames has strong historical outbound CTR evidence without the same concentration risk.

Controlled test rules:

- 1000x1500 image
- genuinely new composition and furniture scene
- no text embedded in image
- unique title and description
- destination must return HTTP 200
- destination: `/japandi-bed-frames/`
- no second test Pin for at least 48 hours

Interpretation:

- >20 impressions within 24h: Pinterest is still testing new content; continue diagnosis but suppression is not total.
- >100 impressions within 24h and account daily impressions >500: early recovery signal.
- 0–5 impressions after 48h: strong evidence of continuing distribution suppression; escalate to Pinterest support instead of publishing more.

### Phase 4 — support escalation if controlled test remains suppressed

If the controlled test remains at 0–5 impressions after 48 hours:

- open Pinterest Business support / account help flow;
- submit a concise factual incident report where possible;
- state that mass publishing has stopped, the known broken destination was corrected, the public board/account are accessible, the site is safe, and fresh Pins remain undistributed;
- if CAPTCHA, email confirmation, identity verification or another human-only step is required, notify the user only at that point.

### Phase 5 — gradual restart only after evidence

If distribution returns:

- one Pin every 48 hours initially;
- use different categories and clearly different compositions;
- do not return directly to 2 Pins/day;
- increase cadence only after multiple fresh Pins receive normal test distribution.

Recovery thresholds:

- Weak: <1,000 impressions/day
- Partial: 1,000–5,000/day
- Functional: >5,000/day for 3 consecutive days
- Prior-range: >8,000/day for 3 consecutive days

## Monitoring / autopilot rules

The user does not need to manually check the project every day.

Automated monitoring should:

- check Pinterest Organic daily data;
- check fresh-Pin impressions;
- keep mass publishing paused;
- perform low-risk corrective actions when the evidence is unambiguous;
- run the controlled single-Pin test only after the quiet-period criteria are met;
- escalate to Pinterest support if the test remains suppressed;
- notify the user only for a material recovery, a material deterioration, or a step that genuinely requires human authentication / confirmation.

Do not treat a successful Metricool publication as a Pinterest recovery signal. The recovery signal is actual Pinterest distribution.

## Business constraint

Quiet Field Living remains an active monetization asset. Pinterest is one acquisition channel, not the business itself. The separate Search Growth work can continue independently while this incident is being resolved.
