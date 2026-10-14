# Pinterest Business Support Escalation — 2026-10-14

## Account / asset

- Brand: Quiet Field Living
- Pinterest board: Japandi Home Decor
- Site: https://quietfieldliving.github.io/japandi-home-decor/
- Controlled test Pin ID: `1152077148495640621`
- Controlled test Pin URL: https://www.pinterest.com/pin/1152077148495640621
- Destination: https://quietfieldliving.github.io/japandi-home-decor/japandi-bed-frames/

## Incident summary

Pinterest Organic distribution was normal through 2026-09-24, then collapsed abruptly beginning 2026-09-25.

Recent account impressions recorded before the collapse:

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
- 2026-10-08: 26
- 2026-10-09: 146
- 2026-10-10: 41
- 2026-10-11: 56

Outbound clicks collapsed at the same time.

## Remediation already completed

1. Recovery/mass publishing stopped.
2. A 72-hour quiet period was completed with no routine publishing.
3. A malformed Dining Tables destination URL was corrected on 2026-10-09.
4. Account was inspected in Pinterest Business UI on 2026-10-09: no visible suspension, restriction, policy warning, or enforcement banner was present.
5. Profile and board were confirmed public and the board was not secret or archived.
6. Representative destination pages are publicly reachable.
7. No replacement account was created and historical Pins were not mass-deleted.

## Controlled test

After the quiet period, one genuinely fresh Bed Frames Pin was published only once.

- Published: 2026-10-12 19:10:33 JST
- Pin ID: `1152077148495640621`
- New creative: yes
- New title/description: yes
- Destination checked: yes
- No second test Pin during the 48-hour window

48-hour cumulative result from Metricool Pinterest Pins data:

- impressions: **0**
- outbound clicks: **0**

This is not a low-CTR issue: the fresh Pin received no measurable distribution.

## Request to Pinterest

Please review whether this Pinterest business account, the `Japandi Home Decor` board, or the destination domain/subpath is subject to any distribution, spam-quality, trust, or other limitation that is not visible in the Business UI.

We are not asking for ranking guarantees. We are asking whether there is an account-, board-, or domain-level condition preventing fresh Pins from receiving normal initial distribution, and what corrective action is required if so.

## Notes

- Routine posting remains stopped while this support escalation is open.
- Account-level Metricool daily impressions for 2026-10-12 onward are currently unavailable/null, not confirmed zero. The controlled Pin's own cumulative 48-hour value is confirmed at zero.
- Website Claim is not currently configured. Pinterest's current help states that domain, subdomain, or subpath claims can be supported, so claimability of this GitHub Pages subpath should be re-tested separately.
