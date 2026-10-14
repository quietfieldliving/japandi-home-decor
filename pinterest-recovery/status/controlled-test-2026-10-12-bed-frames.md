# Pinterest Controlled Test — Bed Frames

- status: FINAL — support escalation
- scheduled_at_jst: 2026-10-12 19:10
- actual_publish_at_jst: 2026-10-12 19:10:33
- evaluated_at_jst: 2026-10-14 after 48 hours
- metricool_brand_id: 7213238
- metricool_id: 393879610
- metricool_uuid: -809132790918853367
- pinterest_pin_id: 1152077148495640621
- public_url: https://www.pinterest.com/pin/1152077148495640621
- board: Japandi Home Decor
- board_id: 1152077217118191768
- title: Light Oak Japandi Bed Frame for a Quiet Morning Bedroom
- destination: https://quietfieldliving.github.io/japandi-home-decor/japandi-bed-frames/
- purpose: post-72-hour quiet-period controlled distribution test

## 48-hour result

Metricool Pinterest Pins cumulative data for Pin ID `1152077148495640621`:

- impressions: **0**
- outbound clicks: **0**

Account-level Pinterest Evolution data:

- 2026-10-09: 146 impressions / 0 outbound clicks / 2 pins
- 2026-10-10: 41 impressions / 2 outbound clicks / 0 pins
- 2026-10-11: 56 impressions / 0 outbound clicks / 0 pins
- 2026-10-12: impressions and outbound clicks not yet returned by Metricool; 1 pin published
- 2026-10-13: impressions and outbound clicks not yet returned by Metricool; 0 pins
- 2026-10-14: impressions and outbound clicks not yet returned by Metricool; 0 pins

Important: missing account-level values are **null / unavailable**, not confirmed zero. This does not change the controlled-test decision because the individual test Pin itself has a confirmed cumulative 0 impressions after 48 hours.

## Fixed decision rule applied

- 0–5 impressions: strong distribution suppression remains; stop additional posting and contact Pinterest Business Support.

**Decision: strong distribution suppression remains. Do not publish another controlled Pin. Escalate to Pinterest Business Support now.**

## Additional checks

- Destination page is publicly reachable and returns usable HTML.
- The known malformed Dining Tables destination was corrected on 2026-10-09.
- No visible suspension/restriction banner was found in the authenticated Pinterest Business UI on 2026-10-09.
- Profile and `Japandi Home Decor` board were confirmed public on 2026-10-09.
- Mass/recovery publishing remains paused.
- One future Metricool item dated 2026-11-01 exists only as `draft: true` and `autoPublish: false`; it must not be treated as an active restart.

## Website Claim note

The previous incident note treated the GitHub Pages subpath as effectively unclaimable. Pinterest's current official help states that a website claim may apply to a domain, subdomain **or subpath**, so this assumption must be re-tested rather than treated as settled. Website Claim remains a secondary remediation item and is not proof of the distribution collapse cause.

## Next action

Submit a factual Pinterest Business Support request containing:

- normal baseline through 2026-09-24 (~9k–11k impressions/day)
- collapse beginning 2026-09-25
- 72-hour quiet period completed
- malformed destination fixed
- public account and board confirmed
- mass publishing stopped
- controlled single fresh Pin published 2026-10-12 19:10 JST
- controlled Pin ID `1152077148495640621`
- 48-hour result: **0 impressions / 0 outbound clicks**
- request Pinterest to review whether the account, board, or domain has an undisclosed distribution / spam-quality limitation

Do not restart routine posting while support escalation is open.
