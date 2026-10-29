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

Manufacturer follow-up (2026-10-22 UTC): Nathan James now exposes Mina SKU 33201 storage dimensions in the official product page text: open cubby 17.7 inches wide × 5.5 inches high; internal storage 17.7 inches wide × 9.4 inches high. Storage depths and the clearance envelope required by the fixed left-hand door swing are not specified. The guide was updated to add only these manufacturer-backed dimensions; the other two products remain listing-only.

Material findings: Mina manufacturer lists engineered wood, laminate, metal and rattan. TROJM listing identifies engineered-wood frame/top; FurniXpress listing identifies engineered wood. Natural-oak finish is not evidence of solid-oak construction. Mina has an open cubby and a left-swing hinged door, although the old LP calls the front a drawer. Old LP remains unchanged; the new guide explicitly distinguishes this. Do not infer durability, actual material quality or tactile finish from these sources.

Opening envelope/extension: the Mina storage opening widths and heights are now manufacturer-listed, but its storage depths and required door-swing clearance remain unknown; drawer extension remains unknown for TROJM and FurniXpress. No automatic product recommendation. TROJM/FurniXpress are not recommended for conditions requiring manufacturer-verified specifications. Mina's larger published dimension envelope can be used for conservative planning, not as a replacement manufacturer specification. Boundary fits require confirmation.

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


## Evidence decision and minimum publication gate (2026-10-25 JST)

Rechecked the official Mina SKU 33201 product page. This is published-specification research, not a hands-on test. Manufacturer publication does not establish as-built dimensions, tolerance, quality or durability.

| Evidence class | Information | Permitted comparison use | Excluded inference |
|---|---|---|---|
| Manufacturer product-page specification | Overall W 18.9 × D 16.9 × H 22.2 inches | Preliminary body-size and mattress-height arithmetic | Guaranteed tight-space fit or measured dimensions |
| Manufacturer product-page specification | Open cubby W 17.7 × H 5.5 inches; internal storage W 17.7 × H 9.4 inches | Compare the stated width and height independently | Storage depth, volume, usable insertion aperture or guaranteed object fit |
| Manufacturer product-page description | Fixed left-hand door swing; engineered wood, laminate, metal, rattan | Distinguish hinged door from drawer; list stated materials | Reversible door, solid oak, tactile finish or durability ranking |
| Manufacturer-stated limits | Top 90 lb; each shelf 30 lb | Attribute as manufacturer load limits if needed | Independently tested strength or long-term durability |
| Unknown | Storage depths, swing envelope, unobstructed insertion aperture, assembly tolerance and actual assembled dimensions | State unknown; stop recommendations dependent on these conditions | Derive from overall depth, photographs, unscaled diagrams or assumed hinge geometry |
| Unknown | Stability, finish quality, assembly difficulty in practice, durability | State no physical testing | Treat marketing assembly time or warranty as performance evidence |
| Historical retailer audit, not refreshed in this follow-up | Mina ASIN B084HCTYZ7, model 33201, one table | Identify the previously checked destination | Claim current selected variant, offer, availability, delivery or returns verified |
| Listing-only, historical retailer audit | TROJM and FurniXpress specifications | Explicitly label seller-reported reference data | Manufacturer-verified comparison or quality recommendation |
| Unresolved conflict | TROJM title/unit count implies two tables; Number of Items says one | Expose the conflict | Assume two complete tables, calculate per-table value or recommend a pair |

### Additional manual located

The official flipbook URL could not be retrieved through the research tool; that limitation remains. A manufacturer-authored 14-page Mina Side Table instruction PDF, marked SKU 33201 and revision 23-1229-VN, was located on retailer-hosted infrastructure:
https://images.thdstatic.com/catalog/pdfImages/b4/b45f824e-e326-4660-97a6-4fba00be2269.pdf

The extracted manual text lists a door, pin hinges and magnetic catch (printed pp. 2, 4, 8–9), and top/shelf limits of 90/30 lb (printed p. 2). Printed p. 13 instructs screw tightening two weeks after assembly and checking every two months. This is a retailer-hosted copy of manufacturer-authored instructions, not a successfully retrieved copy of the current official flipbook; revision equivalence is unverified. No numeric storage-depth, door-clearance or assembly-tolerance specification was established from this copy. Do not scale its drawings. No new public performance or fit claim is authorized by these findings.

### Minimum check before the next guide publication/update

| Check | Where | Completion criterion |
|---|---|---|
| Variant identity | Manufacturer SKU and retailer model/ASIN, finish and pack selector | Match the exact variant; retain an explicit unknown for unresolved quantity; recheck retailer selection before describing it as current |
| Units, axes and provenance | Guide comparison and source section | Overall W × D × H; storage W × H only; each datum attributed and dated; manufacturer text and rounded diagram kept distinct |
| Claim boundaries | Guide prose, comparison, calculator result | No storage-depth substitution, object-fit guarantee, door-clearance certification, as-built precision or durability claim; no physical testing implied |
| Tight-space use | Relevant recommendation | Obtain maximum overall dimensions including projections and tolerance, plus required operating clearances; otherwise withhold that recommendation |
| Manual status | Source/method note | Distinguish the retailer-hosted manual from the unavailable official flipbook; do not claim current manual equivalence |
| Protection and rendering | Git diff and published guide | Existing LP, Priority Amazon CTA and Pinterest files unchanged; check the changed table at desktop and 390px if public HTML changes; unknowns remain visible |

Status: no new public HTML changes in this follow-up. Only this experiment record is updated. The existing manufacturer's published values support preliminary comparisons; missing measurements do not block an explicitly limited sizing guide. They do block specific storage-fit, tight-installation and durability recommendations. Further repetitive searches without new evidence are not a reason to expand claims.


## Calculator boundary correction: 2026-10-25 JST

Reproduced floating-point error for an exact decimal fit: space 24.3, total gaps 4.1, width 20.2 could say 'leaves 0 inches' rather than exactly fills. The 0.3/0.1/0.2 case could say exceeds by zero. Subtraction now uses integer hundredths, consistent with all five inputs' step=0.01; this changes arithmetic only, not fit advice or tracking semantics.

The original script fails the exact-fit regression. The corrected script passes 11 JavaScript/DOM-stub checks covering three decimal exact-fit examples, one-hundredth over/under, height above/below/equal, invalid gaps, stale-answer hiding, one valid-fit event with no measurement payload, and preview analytics exclusion. Syntax passed. No mobile browser QA or live GA4 verification is claimed.

Before the change, the public guide returned HTTP 200 and public sitemap parsed with 23 unique URLs, this guide once. Manufacturer product text rechecked; storage depth and operating-clearance gaps remain unresolved. No protected LP, Priority CTA, affiliate link, product selection, Pinterest file, shared tracking or sitemap was edited. The current summary is synchronized in SEARCH_GROWTH.md; its older first-page sections remain dated historical records.


## Day 7 technical checkpoint: 2026-10-26 JST

- Main still ends at commit `3a9e80079eff6a2b980ea078e349b1b68e0ac179`; no later repository change was found in this check.
- The current main blobs remain `guide.js` `1941bee4cc721f30bc727a8a601e07e1eb3eca63`, this record `04c85f463e8595cb9057984132dd4b4aa29aed5f` before this append, and unchanged project rules `268050e001cd2f474644c6727d7f44f8dd3bccae`.
- The decimal-boundary correction was independently checked for exact fit (24.3 − 4.1 − 20.2 = 0 and 0.3 − 0.1 − 0.2 = 0) and one-hundredth over/under results. This verifies the arithmetic path, not the deployed browser file.
- GitHub returned no combined status contexts for the latest commit. Absence of a status context is not a failed Pages deployment and is not deployment proof.
- An exact-title and exact-URL public web search through the available search provider did not surface this guide. Competing nightstand-height pages appeared. This result is not Google Search Console evidence, cannot establish non-indexing, and is not counted as zero impressions.
- Gmail contained no new Search Console notification after 2026-10-19 in the checked query. Email absence does not establish unchanged GSC performance.
- True 390px browser rendering, the post-fix public calculator, Search Console URL Inspection/sitemap processing, US page-filtered purchase-condition queries, live GA4 receipt and the same-session closed sequence remain unverified. Known browser/authentication restrictions were not bypassed or retried through the blocked route.
- No public guide copy, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed at this checkpoint.

Day 7 decision: no evidence supports a purchase-funnel judgment yet. Keep the pilot running without expansion. The next high-value checks are authenticated GSC discovery/query evidence and a no-production-analytics 390px/post-fix public browser run when those environments become available.


## Structured-data maintenance: 2026-10-27 JST

The calculator behavior changed on 2026-10-25 JST, but the Article JSON-LD still reported `dateModified` as 2026-10-22. Updated only that machine-readable field to `2026-10-25`, matching the latest public-facing functional change. The visible “Sources checked October 22, 2026” line and comparison caption remain unchanged because the product-source review date did not change.

No title, description, canonical, product statement, affiliate route, event name, tracking gate, existing LP, Priority CTA, Pinterest file or sitemap entry was changed. Repository inspection confirms one Article object and one `dateModified` field in the guide HTML. Public browser verification remains pending under the existing access restriction; repository publication is not claimed as proof of deployed bytes, indexing or GA4 receipt.


## Repository preflight: 2026-10-28 JST

- Main still ends at commit `a1069227c177f9f371490c3cb33cce9229164d45`; no later repository change was found before this record.
- Both JSON-LD blocks parse as JSON. Their types are one `Article` and one `BreadcrumbList`; the Article reports `datePublished` 2026-10-18 and `dateModified` 2026-10-25. No Product, Offer, Review or AggregateRating schema is present. The canonical is the guide URL, robots is `index, follow`, and the HTML has one H1.
- The comparison body has nine `data-label` attributes for its three rows × three data cells. At widths up to 640px the stylesheet removes the table minimum width, makes the table structure block-level and uses those labels; the calculator fields and measurement figures also switch to one column. At widths up to 480px the content wrapper uses 20px side padding. This is a repository-level responsive preflight, not a 390px browser-rendering result; text wrapping, viewport overflow and interaction remain unverified in a real browser.
- All three support-to-money links still target the existing Nightstands collection and have distinct placements (`comparison-intro`, `primary`, `sources`). The script still excludes `?qfl_preview=1` from production analytics, emits `support_to_money` with beacon transport on an eligible live click, and keeps the integer-hundredths exact-fit correction. These checks verify source logic only, not GA4 receipt or the same-session downstream `amazon_click` sequence.
- No evidenced public-copy or behavior defect was found in this preflight. No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Authenticated GSC/GA4 checks and the previously blocked real-browser route were not retried.


## Downstream LP source audit: 2026-10-29 JST

- The guide and existing Nightstands LP both configure GA4 measurement ID `G-JQ7SQ8TM4Z`. The guide routes to `/japandi-home-decor/japandi-nightstands/` in the same tab and emits `support_to_money`; the LP contains three `target="_blank"` Amazon short links and a delegated listener that emits `amazon_click` for `amzn.to`, `amazon.com` and subdomains. Its parameters are `link_url`, `link_domain`, `page_location` and `page_title`.
- The three current LP href values are distinct (`https://amzn.to/45LkbJi`, `https://amzn.to/4fVpfzn`, `https://amzn.to/4wOC8me`), so a received `amazon_click` can be separated by short-link URL in GA4. The event does not carry an explicit product ID, ASIN, card rank or `support_page_id`; analysis must not infer more than the received URL and page context establish.
- This source path makes the planned same-session sequence technically expressible: guide page_view → `support_to_money` → Nightstands LP page_view → `amazon_click`. Source inspection does not prove that any event reached GA4, remained in one session, or was attributed to a US purchase-condition query. A production event was not sent in this audit.
- The LP's first card is visibly titled “Rattan and Wood Nightstand” rather than Mina/model 33201 and describes “a woven rattan-and-wood drawer front” and “the enclosed drawer.” Manufacturer evidence establishes a hinged cane-front door. The ASIN appears only in an HTML comment, not the visible card. This identity/feature mismatch is a specific downstream conversion confounder: a guide reader carrying model/ASIN may not recognize the card, and the drawer wording contradicts the guide. The protected LP remains unchanged.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Only this verification record was updated.
