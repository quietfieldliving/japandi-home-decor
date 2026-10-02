# Quiet Field Living — Growth Experiment Log

## Baseline snapshot: 2026-09-30

Measurement window: **2026-09-01 through 2026-09-30**, timezone **Asia/Tokyo**.

This is a fixed baseline. Do not silently replace it with a moving "last 30 days" window.

### Pinterest Organic

Profile totals:

- Impressions: **206,647**
- Outbound clicks: **537**
- Outbound CTR: **0.26%**
- Saves: **839**
- Engagements: **8,401**

Highest-volume Pins relevant to the current funnel:

- **Japandi Bar Stool Ideas for a Warm Minimalist Kitchen** — 49,773 impressions / 249 outbound clicks / 0.50% CTR
- **Best Japandi Dining Chairs for a Warm Minimalist Home** — 37,878 / 56 / 0.15%
- **Japandi Shoe Storage Ideas for an Organized Entryway** — 16,360 / 26 / 0.16%
- **How to Style a Warm Japandi Entryway** — 11,608 / 25 / 0.22%
- **Why Japandi Dining Chairs Feel So Timeless** — 9,580 / 8 / 0.08%
- **Japandi Storage Cabinet Ideas for a Calm Minimalist Home** — 9,167 / 10 / 0.11%

High-CTR expansion candidates to watch, but **do not expand the active experiment yet**:

- **Best Japandi Bed Frames for a Peaceful Bedroom** — 4,271 impressions / 27 clicks / 0.63%
- **Best Japandi Dining Tables for a Calm Home** — 2,580 / 17 / 0.66%
- **Japandi Ceiling Lights for a Calm Home** — 2,382 / 18 / 0.76%
- **Beautiful Japandi Rugs for Every Room** — 515 / 6 / 1.17%

### GA4

Site totals:

- Page views: **493**
- Sessions: **353**
- Amazon affiliate clicks (`amazon_click`): **195**
- Lead submits (`lead_submit`): **0 returned in reporting data for this fixed window**

The checklist funnel launched near the end of the window. The live `lead-magnet.js` implementation fires `lead_submit` only after the Worker returns success, so do not treat the current zero as proof that the funnel is broken. Recheck after organic submissions accumulate.

Top landing/category pages by page view:

- Bar Stools: **188**
- Shoe Cabinets: **55**
- Dining Chairs: **51**
- Bed Frames: **31**
- Dining Tables: **24**
- Ceiling Lights: **22**
- Home: **15**
- Console Tables: **12**
- Dressers: **11**
- Storage Cabinets: **10**

### Amazon-click baseline by focus page

#### Japandi Bar Stools

- Page views: **188**
- Amazon clicks: **76**
- Amazon clicks / page view: **40.4%**
- Existing lower search-results CTA: **1 click** before the Priority CTA experiment
- Known Pinterest outbound clicks into this category from visible mapped Pins: about **270**

#### Japandi Dining Chairs

- Page views: **51**
- Amazon clicks: **11**
- Amazon clicks / page view: **21.6%**
- Existing lower search-results CTA: **1 click** before the Priority CTA experiment
- Known Pinterest outbound clicks from the visible category Pins: about **64**

#### Japandi Shoe Cabinets

- Page views: **55**
- Amazon clicks: **30**
- Amazon clicks / page view: **54.5%**
- Existing lower search-results CTA: **0 measurable clicks** in the fixed baseline query
- Known Pinterest outbound clicks from mapped Shoe/Entryway Pins: about **72**

### Focus order

Keep the working priority order:

1. **Bar Stools** — largest traffic and Amazon-click volume.
2. **Dining Chairs** — very large Pinterest reach but weak page-to-Amazon movement; biggest conversion-improvement opportunity.
3. **Shoe Cabinets** — smaller traffic than Dining Chairs but much stronger page-to-Amazon movement; useful benchmark for downstream efficiency.

Do not confuse **traffic priority** with **current conversion efficiency**. Shoe Cabinets currently converts page views to Amazon clicks better than Dining Chairs.

## Active experiment: Increase Amazon search-route exposure

Start date: **2026-09-30**

Pages:

- `/japandi-bar-stools/`
- `/japandi-dining-chairs/`
- `/japandi-shoe-cabinets/`

Change:

- Keep all three featured product cards unchanged.
- Keep the existing browse-more CTA after the product cards.
- Add a second browse-more Amazon CTA immediately **before** the three product cards.
- Use the existing dedicated search-result affiliate link for each category.
- Explain that featured products may not be available in every country.
- Preserve affiliate disclosure.

Priority routes:

- Bar Stools: `https://link.amazon/B08JFJLlT`
- Dining Chairs: `https://link.amazon/B09DGP2ll`
- Shoe Cabinets: `https://link.amazon/B01IC10SL`

Measurement update:

- `amazon_click` includes `link_text` and `link_classes` on these three pages.
- The upper browse-more button uses class `priority-amazon-search`.
- This separates the new priority browse route from fixed product links in GA4 reporting.

### Deployment verification: 2026-09-30

Verified on `main` and on the live GitHub Pages site:

- All three Priority CTA blocks are live.
- Each live block has class `more-cta-priority`.
- Each live link has class `priority-amazon-search`.
- All three destination URLs match the intended category-specific Amazon search links.
- GA4 tracking code on all three pages contains `link_text` and `link_classes`.
- No `priority-amazon-search` clicks had appeared in GA4 yet at the first same-day post-deployment check. That is expected and is **not** a result.

### Primary question

Does giving the broader Amazon route more visibility increase useful Amazon traffic without reducing overall affiliate performance?

### Primary metrics

1. Amazon clicks per page view
2. Priority search-route clicks and share of Amazon clicks
3. Amazon ordered items, conversion and earnings by Tracking ID
4. Pinterest outbound clicks into the three pages
5. `lead_submit` as a secondary funnel metric

### Interpretation rules

- Do **not** judge the new search route from only a handful of clicks.
- Let the Priority CTA accumulate roughly **30–50 clicks** before a serious zero-order judgment.
- If a category search route reaches that range with zero orders, review or remove that route.
- If the search route generates orders at a better rate than the fixed-product route, consider expanding the pattern to the high-CTR candidate categories.
- Do not make unrelated layout, product, CTA, or Pinterest changes during this observation window.
- Documentation updates are allowed; conversion-path changes are not.

## Amazon Associates historical context

Manual report baseline previously recorded:

### Amazon US

- Clicks: **165**
- Ordered items: **2**
- Conversion: **1.21%**
- Revenue: **$187.94**
- Earnings: **$8.28**

### Non-US Amazon marketplaces

- Spain: 14 clicks / 0 orders
- France: 15 / 0
- Germany: 46 / 0
- UK: 48 / 0
- Netherlands: 10 / 0
- Italy: 10 / 0
- Poland: 1 / 0
- Sweden: 1 / 0
- Canada: 24 / 0
- Total: **169 clicks / 0 orders**

Working hypothesis: OneLink/Global Earning routing works, but fixed US-selected products often have poor availability, missing pages, long shipping, or weak local substitutes outside the US. The active Priority CTA experiment tests whether sending users to broader Amazon category/search inventory performs better.

## Email lead funnel

The checklist funnel is live across the home page and all 20 category guides.

Current state:

- Checklist signup form: live
- Cloudflare Worker: live
- Resend contact creation: live
- Checklist delivery automation: live
- GA4 success event: `lead_submit`
- Marketing follow-up sequence: intentionally paused until a compliant public mailing address is available
- No paid virtual-office/address service should be added just to activate those three marketing emails at this stage

The paused marketing sequence must not block Amazon/Pinterest experiments.


## Pinterest distribution recovery — activated 2026-10-02

The prior "do not change Pinterest during the Priority CTA observation window" rule is superseded for **Pinterest publishing only** because account-level organic distribution collapsed.

Observed daily Pinterest Organic impressions:

- 2026-09-24: 9,378
- 2026-09-25: 4,214
- 2026-09-26: 686
- 2026-09-27: 432
- 2026-09-28: 401
- 2026-09-29: 697
- 2026-09-30: 125

Action:

- Keep LP layout, product cards and Priority Amazon CTA unchanged.
- Start a 14-day fresh-Pin recovery sprint.
- Publish 2 genuinely new creatives per day.
- Use `PINTEREST_RECOVERY.md` and `pinterest-recovery-queue.csv` as the active publishing plan.
- Do not reuse near-identical old images.
- Review account-level recovery after 7 and 14 days.
