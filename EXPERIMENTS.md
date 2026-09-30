# Quiet Field Living — Growth Experiment Log

## Baseline: 2026-09-30

Measurement window: last 30 days including 2026-09-30.

### Pinterest Organic

Profile totals:

- Impressions: 207,526
- Outbound clicks: 539
- Outbound CTR: 0.26%
- Saves: 845
- Engagements: 8,418

### GA4

Site totals:

- Page views: 489
- Sessions: 349
- Amazon affiliate clicks: 193

### Priority categories

The current focus is based on the full funnel, not impressions alone.

#### 1. Japandi Bar Stools

Pinterest:
- Main Pin: 49,841 impressions / 250 outbound clicks
- Other visible Bar Stool Pins: 20 outbound clicks
- Visible category outbound clicks: about 270

GA4:
- Page views: 187
- Amazon affiliate clicks: about 76 in the last 30 days
- Existing search-results CTA clicks before this change: 1

Why it is priority #1:
- Largest Pinterest traffic source
- Largest site traffic source
- Largest Amazon-click volume
- Search-results route had too little exposure to judge

#### 2. Japandi Shoe Cabinets

Pinterest:
- Visible category outbound clicks: about 72

GA4:
- Page views: 55
- Amazon affiliate clicks: about 30
- Existing search-results CTA had no measurable clicks in the current baseline query

Why it is priority #2:
- Lower raw traffic than Dining Chairs, but materially stronger movement from landing page to Amazon

#### 3. Japandi Dining Chairs

Pinterest:
- Visible category outbound clicks: about 64

GA4:
- Page views: 51
- Amazon affiliate clicks: about 11
- Existing search-results CTA clicks before this change: 1

Why it is priority #3:
- Very large Pinterest reach
- On-site Amazon click-through is weaker than Bar Stools and Shoe Cabinets, leaving clear room for improvement

## Experiment: Increase Amazon search-route exposure

Start date: 2026-09-30

Pages:
- /japandi-bar-stools/
- /japandi-shoe-cabinets/
- /japandi-dining-chairs/

Change:
- Keep all three featured product cards unchanged.
- Keep the existing browse-more CTA after the product cards.
- Add a second browse-more Amazon CTA immediately before the three product cards.
- Use the existing dedicated search-result affiliate link for each category.
- Explain that featured products may not be available in every country.
- Preserve affiliate disclosure.

Measurement update:
- amazon_click now includes link_text and link_classes on these three pages.
- The new upper browse-more button uses the class priority-amazon-search.
- This enables route/copy measurement in GA4 without changing the affiliate destinations.

Primary question:
Does giving the broader Amazon route more visibility increase useful Amazon traffic without reducing overall affiliate performance?

Primary metrics:
1. Amazon clicks per page view
2. Search-route share of Amazon clicks
3. Amazon ordered items and earnings by Tracking ID
4. Pinterest outbound clicks into the three pages

Interpretation rules:
- Do not judge the new search route from only a handful of clicks.
- If the search route reaches roughly 30–50 clicks with zero orders, treat that route as weak and review it.
- If the search route generates orders at a better rate than the fixed-product route, expand the pattern to other categories.
- Do not make unrelated design changes during the observation window.

## Email lead funnel

The checklist funnel is live across the home page and all 20 category guides.

Current state:
- Checklist signup form: live
- Cloudflare Worker: live
- Resend contact creation: live
- Checklist delivery automation: live
- GA4 success event: lead_submit
- Marketing follow-up sequence: intentionally paused until a compliant public mailing address is available

The paused marketing sequence must not block Amazon/Pinterest experiments.
