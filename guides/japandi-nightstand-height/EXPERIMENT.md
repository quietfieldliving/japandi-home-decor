# Nightstand purchase-decision pilot

Authorized scope (2026-10-18 UTC): retain the existing US Japandi site; cancel the proposed wholesale migration to Japan. One new support page, not a new niche or category. No videos or physical testing are claimed.

## Files and protection

New guide directory only, plus one new URL in root sitemap.xml for discovery. No existing LP, homepage, affiliate link, product selection, Priority CTA, shared tracking, Pin, recovery file, publishing queue or marketing email is changed. Root sitemap is the sole existing file changed. No existing-page backlink has been added; sitemap discovery is possible but search crawling/indexing is not guaranteed. This pilot does not depend on reinstating Pinterest.

Public path: `/guides/japandi-nightstand-height/`.
Outbound route: this guide → existing `/japandi-nightstands/` → unchanged Amazon links.

## Product evidence audit

Checked 2026-10-18 UTC by resolving the three existing affiliate short links and reading the corresponding US listing text. No Amazon images, ratings, reviews, prices or stock data copied. HTTP 200 and a resolved ASIN do not establish delivery availability or an active purchasable offer.

| Existing short link (unchanged) | ASIN | Listed model | Listed W × D × H, inches | Pack | Source quality |
|---|---|---|---|---|---|
| https://amzn.to/45LkbJi | B084HCTYZ7 | 33201 | 19 × 17 × 22 | 1 | Matched to Nathan James SKU 33201. Manufacturer text: 18.9 × 16.9 × 22.2; diagram rounds differently. |
| https://amzn.to/4fVpfzn | B0GJK2BYDW | A30101014NW1 | 17.7 × 13.5 × 19.7 | Title, unit count, packs imply 2; Number of Items says 1 | Seller listing only. Manufacturer specifications/manual not found. Quantity unresolved. |
| https://amzn.to/4wOC8me | B0H3323WP2 | FCN048_07 | 23.6 × 15.7 × 21.7 | 1-pack selected | Seller listing only. Manufacturer specifications/manual not found. |

Manufacturer source: https://nathanjames.com/products/mina-end-table-1-cabinet-wood-rattan-finish
Manufacturer-linked instructions: https://nathanjameshome.hflip.co/33201-IS (link checked; manual content not independently extracted).
Retailer research sources: https://www.amazon.com/dp/B084HCTYZ7 ; https://www.amazon.com/dp/B0GJK2BYDW ; https://www.amazon.com/dp/B0H3323WP2 . Direct retailer links are not introduced into the new public page; readers go through the existing collection.

Material findings: Mina manufacturer lists engineered wood, laminate, metal and rattan. TROJM listing identifies engineered-wood frame/top; FurniXpress listing identifies engineered wood. Natural-oak finish is not evidence of solid-oak construction. Mina has an open cubby and a left-swing hinged door, although the old LP calls the front a drawer. Old LP remains unchanged; the new guide explicitly distinguishes this. Do not infer durability, actual material quality or tactile finish from these sources.

Opening envelope/extension: unknown for all three. No automatic product recommendation. TROJM/FurniXpress are not recommended for conditions requiring manufacturer-verified specifications. Mina's larger published dimension envelope can be used for conservative planning, not as a replacement manufacturer specification. Boundary fits require confirmation.

## Demand and baseline limitations

Additional GSC queries attempted 2026-10-18, filtering the exact Nightstands LP, WEB, 2026-10-04–2026-10-15, with (1) country and (2) query + country + device. Both failed with `TRIAL_EXPIRED` (Supermetrics trial ended 2026-10-13). No subscription purchased, no new results inferred, no missing data counted as zero. Existing prior exports do not establish US purchase-condition demand for this guide. This is a capped learning experiment, not a validated SEO opportunity.

GSC interface can supply a free manual export; an agent-readable connector is not required to operate the website. Live GA4 receipt, Search Console URL Inspection and indexing are not yet verified. Do not confuse deployment with indexing or installed event code with verified GA4 receipt.

### Pre-release Search Console baseline (manual export)

The submitted Search Console Excel covers WEB search from 2026-10-04 through 2026-10-15, before this guide was released. It is a baseline for the existing site, not post-release evidence for this guide.

- Existing Nightstands LP: 54 impressions, 2 clicks, 3.70% CTR, average position 8.46.
- Site-wide United States row: 127 impressions, 4 clicks, 3.15% CTR, average position 15.28.
- Named nightstand queries visible in the export total 12 impressions and 1 click: `japandi nightstand`, `best nightstands 2026 in japan`, `japandi bedside table`, `japandi bedside tables`, `japandi nightstands`, and `nightstand japandi`.
- No named height, width, bed-fit, drawer-extension, door-swing or clearance query appears in this export.

The workbook has separate Queries, Pages and Countries tabs; it does not join page + country + query. Therefore the US total cannot be assigned to the Nightstands LP, the named queries cannot all be assigned to that page, and anonymized queries are absent. Missing purchase-condition rows are not counted as zero demand. The guide itself was not live during the export window, so this file contains no impressions, clicks or query evidence for the guide.

## Events and reporting

Same GA4 measurement ID as the existing site: G-JQ7SQ8TM4Z. Loader runs only on the exact production guide path (including explicit index.html). Local, other-host, and `?qfl_preview=1` requests send no analytics. QA uses no real Amazon clicks. Existing LP analytics are unmodified.

- `nightstand_comparison_view`: table entered viewport once per document. Exposure only, not proof of reading/using the table.
- `nightstand_source_check`: a source-detail anchor inside the comparison was clicked. A stronger interaction signal, not a purchase.
- `nightstand_fit_check`: valid calculator submission. Only check type and support-page ID sent, not measurements.
- `support_to_money`: each of the three existing LP links, with page ID, target path and placement. No internal UTMs; same-tab navigation preserved.
- Existing `amazon_click` remains on the LP and does not gain a new tracking ID.

Use **sessions with an event**, not raw event count divided by sessions. Primary cohort: US, organic-search sessions landing on this exact guide, excluding QA/developer traffic. Report all-country organic separately; keep direct/social/referral separate. Event-name based session segments can be used without registering the custom parameters. Custom parameter breakdown requires GA4 custom dimensions and is not claimed configured.

GA4 Explore closed sequence in the same session: guide page_view → support_to_money → Nightstands LP page_view → amazon_click. This verifies event order; a landing-page report alone does not. GA4 session counts can miss consent/ad-blocked traffic. Query intent is assessed in GSC at page + country + search type, not joined to individual GA4 visitors. GSC anonymized queries mean named-query rows are incomplete. Shared Amazon tag prevents precise attribution of orders/earnings to this page or search query.

## Thirty-day decision (Day 0 = verified public release)

Review on Day 7 for technical issues only, Day 14 for crawling/query relevance, and Day 30 for the following funnel. These are analysis checkpoints, not automatic scheduled jobs.

| Stage | Evidence | Decision |
|---|---|---|
| Discovery | URL Inspection/indexing, WEB impressions and page-filtered named queries | No index/low exposure → diagnose discovery; do not infer purchase failure. |
| Relevant entry | US organic guide landing sessions; GSC queries about height, width, bed fit or clearance | Decorative/image-only intent does not establish buying intent. Record query coverage limitations. |
| Useful interaction | Sessions with source checks or valid calculator submits; table views separately | Table exposure alone cannot justify expansion. |
| Collection route | Same-cohort sessions with support_to_money / guide landing sessions | If weak, review answers and route; old LP remains a confounder. |
| Retailer route | Closed-sequence sessions reaching amazon_click / guide landing sessions, plus / LP-reaching sessions | Outbound click is not a purchase. Do not claim orders by this guide. |

Practical triage threshold, **not a statistically validated success criterion**: fewer than 100 US organic landing sessions in 30 days → purchase behavior is inconclusive; no mass expansion. At or above 100, inspect interaction and drop-off with counts and uncertainty. Zero LP-reaching sessions at that exposure → revise this page's usefulness/route before adding pages. LP-reaching sessions but no Amazon clicks → inspect the existing LP constraint before rejecting the niche. At least 10 LP-reaching sessions and 3 downstream Amazon-click sessions is merely an early route signal permitting a review, not authorization to build more pages or proof of profitability. Even with these counts, no monthly-income extrapolation.

If no existing product fits the reader's conditions, the honest “none fits” outcome is useful and must not be optimized away to increase click-through. No new products, LP rewrites or more support pages without a subsequent evidence-based decision.

## QA record before release

- New support template reuses the existing 36-inch-counter guide's page-scoped styling.
- One H1, canonical, OG/Twitter, Article/BreadcrumbList parse; no Product/Review/Rating/Offer schema.
- Original SVGs and social PNG; no invented physical test or exact-product room image.
- Local assets and fragment targets resolve. No new direct Amazon link.
- JavaScript syntax and jsdom checks passed: height above/below/equal; width too large/exact/remaining; invalid gaps; decimal boundary; stale answer hides on edit; all three LP link events; production-only loader; QA exclusion; payload omits input values.
- Chromium download failed (truncated archive), so local browser QA was unavailable. Public browser review is recorded separately after deployment; do not claim true 390px QA unless performed.
- Live GA4 ingestion and same-session full sequence remain unverified; do not report the pilot as fully measured until validated.

## Public release verification

Released by GitHub API to main at commit `4131da8cce11a1f3c6ec8a12686504c1c625fa68` (Add source-checked nightstand measurement pilot), 2026-10-18 UTC / 2026-10-19 JST. API-created tree exactly matched the locally checked tree. Shell push was unavailable because no terminal GitHub credential was configured; the connected GitHub app performed the authorized publication.

- Public HTML, CSS, JS, two diagrams, social PNG and root sitemap returned HTTP 200 and matched the checked local bytes.
- Public desktop Chrome viewport: 1363px, no horizontal document overflow, both diagrams loaded. Calculator example 26/22/24/4/19 produced 4 inches lower, a 20-inch width allowance and 1 inch remaining. QA URL used `?qfl_preview=1`, so this guide did not send production analytics. No Amazon click performed.
- The first button attempt did not expose a result; a second explicit click did and the rendered calculation was verified. No repeatable calculator error was found in local DOM tests.
- True 390px browser verification remains incomplete: no local Chromium binary, failed browser download, and the cloud browser does not permit local-file navigation. Mobile stacking is implemented but is not claimed browser-verified. No attempt was made to bypass the browser URL restriction.
- A follow-up corrects singular “inch” wording and records verification. Source data and protected assets are unchanged.
