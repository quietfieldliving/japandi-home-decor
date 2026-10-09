# Pinterest Distribution Incident — Quiet Field Living

Status: **OPEN — publishing paused for diagnosis**

Last updated: 2026-10-09 JST

## Executive diagnosis

Quiet Field Living is experiencing a severe Pinterest Organic distribution collapse that began on 2026-09-25 after a normal 9,000–11,000 impression/day range through 2026-09-24.

The strongest current evidence points to an **account-level, board-level, or domain-associated distribution limitation / spam-quality suppression**, rather than ordinary creative underperformance.

This is a working diagnosis, not proof of a formal Pinterest enforcement action. The account must be inspected in Pinterest Business settings before a final cause is assigned.

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
5. Exact duplicate recovery Pins were accidentally created on 2026-10-03.
6. One known Pin has a malformed destination URL ending in `/TaggedTopics`, which returns HTTP 404.
7. Pinterest's API currently returns a blank website URL for the account; Pinterest Business UI must be checked to determine whether the website is actually claimed/verified.

## Checks completed

### Site / destination safety

- Main site returns HTTP 200.
- Representative Bar Stools, Dining Chairs, Dining Tables, Shoe Cabinets and Storage Cabinets LPs return HTTP 200.
- No Google Web Risk malware/phishing findings were detected in the tested URLs.
- `robots.txt` allows all user agents and points to the sitemap.
- One malformed Pinterest destination is confirmed broken:
  - Pin ID: `1152077148493060489`
  - Current destination: `https://quietfieldliving.github.io/japandi-home-decor/japandi-dining-tables/TaggedTopics`
  - Result: HTTP 404
  - Intended destination: `https://quietfieldliving.github.io/japandi-home-decor/japandi-dining-tables/`

### Site speed

Mobile PageSpeed checks show the site is usable but not ideal:

- Home performance: 74/100, lab LCP about 13.3s
- Bar Stools performance: 77/100, lab LCP about 4.3s

This should be improved separately, but it does not plausibly explain an abrupt ~99% account-wide distribution collapse by itself.

### Publishing tooling

Metricool image-transfer errors were a separate implementation problem. The stable transfer path is now:

AI image → RGB 1000x1500 JPEG export → platform-issued `file_id` / `source_file_ref` → Metricool `mediaFiles`.

The recurring Publisher and Publisher Health automations are intentionally paused while the Pinterest distribution incident is diagnosed. Do not confuse publishing-tool reliability with Pinterest distribution recovery.

## Active remediation plan

### Phase 1 — stop adding risk signals

- Pause the remaining 2-Pins/day recovery queue.
- Do not create another burst of near-similar commercial Pins.
- Do not create a replacement Pinterest account to evade a possible limitation.
- Keep LPs and Priority Amazon CTA unchanged during the Pinterest incident investigation.

### Phase 2 — authenticated Pinterest account inspection

Inspect Pinterest Business UI for:

1. Account status, enforcement, warnings, policy notices or feature restrictions.
2. Claimed website status for Quiet Field Living.
3. Board visibility / restriction state for `Japandi Home Decor`.
4. Broken Pin ID `1152077148493060489`; correct the destination if editing is available.
5. Exact duplicate recovery Pins created on 2026-10-03; retain one legitimate Pin and remove redundant duplicates only if clearly safe to do so.
6. Whether newly generated Pins show AI labels or any other unusual state.

### Phase 3A — if Pinterest shows an enforcement or distribution restriction

- Correct the identified issues first.
- Appeal through Pinterest's available account/support flow with a concise factual record:
  - distribution collapsed sharply on 2026-09-25;
  - fresh Pins receive 0 impressions;
  - site passes safety checks;
  - Pinterestbot is not blocked by robots.txt;
  - broken URL identified and corrected;
  - mass publishing has been stopped.
- Do not resume volume publishing while the appeal/review is unresolved.

### Phase 3B — if no explicit restriction is shown

- Verify/claim the website if missing.
- Correct the broken Pin URL.
- Clean up exact duplicates only; do not mass-delete the historical library.
- Wait for the corrected state to propagate.
- Publish one controlled test Pin only:
  - genuinely new image and composition;
  - unique title/description;
  - single clean 200 destination URL;
  - no duplicate image/title;
  - one high-confidence category, preferably Bar Stools because it has the strongest historical evidence.
- Success criterion: the test Pin receives measurable impressions. Do not judge by clicks before it receives distribution.

### Phase 4 — scale only after distribution returns

If the controlled test Pin receives normal initial distribution, restart slowly. Do not jump immediately back to 2 Pins/day.

Suggested progression:

- Test 1: one Pin
- If distributed: one additional Pin on a different day/category
- If both distribute: gradual cadence increase
- Only return to volume publishing after repeated evidence that new Pins are being tested by Pinterest normally.

## Monitoring

Continue daily diagnostic monitoring of:

- profile impressions
- outbound clicks
- fresh-Pin impressions by Pin ID
- any recovery in distribution of the controlled test Pin

Do not treat a successful Metricool publication as a Pinterest recovery signal. The recovery signal is actual Pinterest distribution.

## Business constraint

Quiet Field Living remains an active monetization asset. Pinterest is one acquisition channel, not the business itself. The separate Search Growth work can continue independently while this incident is being resolved.
