# Pinterest Recovery Sprint — 2026-10

## Current status — PAUSED 2026-10-09

The original 14-day, 2-fresh-Pins-per-day recovery sprint is **paused**. It is no longer the active recovery method.

Reason: Pinterest Organic did not show a recovery signal after the first seven days, and the stronger pin-level diagnostic shows that Pins newly created from 2026-10-03 through 2026-10-09 are returning **0 impressions** in Pinterest pin analytics. Continuing to push more Pins into that state would add volume without testing the actual bottleneck.

The publishing queue and status files are retained as historical evidence. Do not resume the remaining queue automatically until the account/domain distribution investigation is completed.

### Immediate operating rules

1. Do not mass-publish the remaining recovery queue.
2. Keep LP layout, product cards and Priority Amazon CTA unchanged.
3. Diagnose account / board / domain distribution state before resuming new Pins.
4. Fix known broken Pinterest destinations and duplicate/redundant Pins where practical.
5. Verify whether the Quiet Field Living website is claimed in Pinterest Business settings.
6. If distribution is not explicitly restricted after the account checks, restart only with a controlled single-Pin test, not 2 Pins/day.
7. A new test is successful only when the fresh test Pin receives real impressions; merely publishing successfully is not a recovery signal.

See `PINTEREST_INCIDENT.md` for the active incident diagnosis and remediation plan.

## Why this sprint existed

Quiet Field Living's Pinterest Organic distribution collapsed across multiple categories at the same time:

- 2026-09-24: 9,378 impressions
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

This is an account-level distribution incident, not ordinary day-to-day fluctuation.

## Original strategy — historical, no longer active

The original plan was to publish **2 genuinely fresh Pins per day for 14 days**.

Rules were:

1. Every Pin gets a new 1000x1500 (2:3) image.
2. No text baked into the image.
3. Different composition, lighting, furniture shape, room context or crop for every creative.
4. Keep the destination URL on the existing category LP.
5. Do not alter the Priority Amazon CTA experiment while restoring Pinterest traffic.
6. Focus on proven volume categories plus high-CTR expansion categories.
7. Re-evaluate after 7 days and 14 days.
8. If a fresh Pin gets >0.50% outbound CTR with meaningful impressions, produce 2–3 new visual variants around that intent.

Original allocation:

- Bar Stools: 7
- Dining Chairs: 5
- Shoe Cabinets: 4
- Bed Frames: 3
- Dining Tables: 3
- Ceiling Lights: 3
- Rugs: 2
- Storage Cabinets: 1

Total planned: **28 fresh Pins**.

The machine-readable historical queue remains in `pinterest-recovery-queue.csv`.

## Measurement

Continue tracking daily while the incident is open:

- Impressions
- Outbound clicks
- Outbound CTR
- Saves
- Engagements
- Fresh-Pin impressions by Pin ID

Original recovery thresholds remain useful as reference:

- **Weak:** below 1,000 impressions/day
- **Partial recovery:** 1,000–5,000/day
- **Functional recovery:** >5,000/day for 3 consecutive days
- **Prior-range recovery:** >8,000/day for 3 consecutive days

## Revenue objective

Target remains **$1,000+/month by 2026-12-31**.

Pinterest recovery is only the top-of-funnel component. The funnel remains:

Pinterest discovery → category LP → Amazon click → order / commission.

The Priority Amazon CTA experiment remains unchanged while Pinterest distribution is investigated.
