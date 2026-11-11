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


## Manufacturer-source discovery checkpoint: 2026-10-30 JST

- Searched the exact TROJM model `A30101014NW1`, ASIN `B0GJK2BYDW`, brand name and “TROJM HOME” combinations for an official product page, manual or specification sheet. No manufacturer-controlled source for this exact product was located in the checked results.
- Two third-party results match the exact TROJM model and describe two tables. One auction listing gives 17.7 W × 13.5 D × 19.7 H inches and explicitly states that the auctioneer does not represent any manufacturer or retailer. A marketplace listing describes two nightstands, one drawer per table, metal slides and no included assembly manual. These are corroborating marketplace records only; they do not resolve the existing Amazon field conflict or establish drawer extension, tolerances, construction or current pack contents. The guide remains “listing only” and quantity remains unresolved.
- Searched the exact FurniXpress model `FCN048_07`, ASIN `B0H3323WP2` and brand combinations for an official product page, manual or specification sheet. No manufacturer-controlled source for the exact model was located in the checked results. A third-party result for the similar model `FCN047_07` reports the same overall dimensions and two drawers, but the model and ASIN differ; none of its load, slide, material-detail or packaging claims are transferred to `FCN048_07`.
- Search results indicating a brand owner or manufacturer name without exact-product documentation are not treated as a product specification. No public guide claim was expanded. Missing manufacturer evidence, set contents and opening dimensions remain unknown rather than zero.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Only this verification record was updated.


## Event-separation execution check: 2026-10-31 JST

- Direct retrieval of the public QA HTML and `guide.js` through the available web-fetch route returned an access error. The blocked route was not retried or bypassed, so deployed-byte equality remains unverified.
- Executed the current main `guide.js` against a deterministic DOM/IntersectionObserver stub in two modes. In live-path mode, repeated comparison visibility produced one `nightstand_comparison_view`; one valid form submission produced one `nightstand_fit_check`; one in-page evidence link produced one `nightstand_source_check`; and one eligible collection link produced one `support_to_money`.
- The emitted fit event contained only `support_page_id` and `check_type`, not mattress height, table height, space, gaps or width. The support event contained the expected money-page path, placement, link URL and beacon transport. This keeps table exposure, calculator use, source checking and money-page intent analytically distinct in source execution.
- In `?qfl_preview=1` mode, the same calculation produced visible result text but loaded no GA script and emitted no events. This supports production-safe QA behavior in the tested logic.
- The harness verifies event branching and payloads only. It is not a 390px browser rendering test, deployed-file test, GA4 receipt test, same-session report or downstream `amazon_click` verification.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Only this verification record was updated.


## Internal discovery-path audit: 2026-11-01 JST

- Main still ended at commit `9dfa9c61ca697a8299404ba63fb28fa3c8616a18` before this record. GitHub returned no workflow run or combined-status context for that commit. The available workflow wrapper covers pull-request-triggered runs, so this absence is neither Pages deployment failure nor deployment proof.
- Enumerated the complete main tree at that commit and inspected all 32 HTML files outside this guide directory. None contains `japandi-nightstand-height`; therefore no other checked HTML page links to this guide in repository source. The guide links downstream to the existing Nightstands LP, but the protected LP and other site pages do not link back.
- The XML sitemap contains the guide URL exactly once. The separate `sitemap-search-test.txt` file does not contain it. XML sitemap inclusion is a discovery signal, not evidence that Google fetched, indexed or served the URL.
- This establishes a discovery constraint for Day 14 interpretation: the guide currently depends on the XML sitemap and external discovery rather than crawlable inbound HTML links from the checked site pages. Low or absent GSC activity cannot be attributed only to topic demand while this constraint and unverified sitemap processing remain.
- No inbound-link change is authorized in the current scope because existing LPs, the home page, other guides and sitemap files are protected. No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Only this verification record was updated.


## Day 14 discovery checkpoint: 2026-11-02 JST

- Main ended at commit `04278379d6e85e713a80ceea48b5f2a815171bbd` before this record. The guide HTML blob remained `3aca7034c4a4906cc1c3f22f2f6161c2847d7889`; no public guide code or copy changed after the structured-data correction.
- Queried the available public search providers using the exact guide URL, the actual title “How Tall Should a Nightstand Be? Height & Width Guide | Quiet Field Living,” the guide path, site-restricted nightstand-height terms, and distinctive page text. The support guide did not appear in the returned results. The existing Nightstands LP and several other Quiet Field Living pages did appear with recent crawl labels.
- This is evidence only about the checked public search providers at this time. It does not prove Google non-indexing, zero impressions or zero US purchase-condition queries. It does show that the support guide could not be confirmed through public search while other site URLs were retrievable, consistent with the previously recorded lack of inbound HTML links.
- Gmail search found no Search Console or Google Search notification after 2026-10-26 in the checked query. Email absence is not performance data and does not establish unchanged sitemap or URL Inspection status.
- Authenticated Search Console URL Inspection, sitemap processing, page-filtered US queries, GA4 receipt, the same-session closed sequence and 390px browser rendering remain unverified. The unchanged Google/browser access restrictions were not retried or bypassed; Supermetrics was not retried.
- Day 14 decision: funnel performance is still indeterminate. Do not classify the topic as failed and do not report missing data as zero. The next decisive evidence remains authenticated URL Inspection/sitemap status and page-level US query data; if access remains unavailable, retain the discovery constraint and wait for Day 21 rather than rewriting the guide without evidence.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed. Only this verification record was updated.

## Authenticated GSC discovery evidence: 2026-11-02 JST

- The operator checked the Google Search Console property directly. URL Inspection reported the new Nightstands support guide as not indexed before the request. The live test could fetch the URL, and an indexing request was submitted and accepted. Acceptance is not proof of later crawling, indexing, impressions or clicks.
- Search Console's sitemap detail showed `sitemap.xml` with “Sitemap could not be read,” 0 discovered pages, and a displayed last-read date of 2026-10-06. This does not mean Google retried the sitemap on November 2. Repository/public HTTP validity does not override the authenticated processing error.
- Page indexing reported 6 indexed pages and 0 not-indexed pages. The indexed list was the home page, existing Nightstands LP, Dining Chairs, Shoe Cabinets, Bar Stools, and the 36-inch counter-stool guide. Their displayed last-crawl dates ranged from 2026-09-12 through 2026-10-04. The new Nightstands support guide was not in that indexed list.
- “0 not indexed” is not treated as evidence that every repository URL is indexed; URLs not discovered by Google may be absent from that count. The evidence supports a narrower conclusion: Google can index this site and the existing Nightstands LP, while the new guide was not indexed at the time of inspection.
- Main's XML sitemap contains the guide once and is well-formed in repository source. Its guide entry still reports `lastmod` 2026-10-18 even though the Article JSON-LD reports `dateModified` 2026-10-25 after the calculator correction. This metadata lag is not established as the cause of Search Console's read failure. The sitemap is protected by the current experiment scope and was not changed.
- A direct public re-fetch of `sitemap.xml` and `robots.txt` through the available web-fetch route on 2026-11-03 returned an access error. The blocked route was not retried or bypassed. Previously confirmed public HTTP 200 is not promoted to current Search Console processing evidence.
- Revenue decision: discovery/indexing remains the largest verified obstacle. Do not rewrite the guide or judge demand/conversion before the indexing request has had time to resolve. Recheck URL Inspection on 2026-11-05 JST; if still not indexed, the next required step is authenticated Search Console inspection of the sitemap submission/error details, not another public-search proxy check.
- GA4 receipt, the same-session guide → Nightstands LP → `amazon_click` sequence, US page-filtered purchase-condition queries and real 390px browser rendering remain unverified. Existing LP Mina copy remains a downstream conversion confounder. No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap or shared measurement code was changed.

## Sitemap failure chronology and byte audit: 2026-11-04 JST

- Search Console displayed 2026-10-06 as the sitemap's last-read date. The Nightstands support guide and its sitemap entry were not added until commit `4131da8cce11a1f3c6ec8a12686504c1c625fa68` on 2026-10-18 UTC / 2026-10-19 JST. Therefore the guide URL, its `lastmod`, and later calculator changes cannot have caused the read failure displayed for October 6.
- Audited the exact base64-decoded repository bytes for the 2026-10-04 sitemap version (`7e1952b181987f1cab53552360b3eb59c7923203`) and current main (`d5bec8a899d5272e459e58961532f761011e4783`). The older file has 22 URL blocks and the current file 23; in both, opening/closing URL counts match, every location is unique and under the expected HTTPS project path, every `lastmod` uses YYYY-MM-DD, and the sitemap namespace/root is present once.
- Both files begin with the UTF-8 XML declaration and contain no UTF-8 BOM, NUL byte, non-ASCII byte or CRLF mixture. Current `robots.txt` allows all paths and declares the same absolute sitemap URL. These repository-byte checks did not identify a persistent XML-content defect that explains Search Console's processing state.
- This narrows but does not solve the incident. Repository validity and a previously observed HTTP 200 do not establish what Googlebot received on October 6 or whether Search Console has retried since then. Response headers, transient GitHub Pages delivery, property/submission state and Search Console's own processing remain possible categories; none is asserted as the cause without authenticated evidence.
- Revenue decision: do not edit the guide or sitemap merely to create activity. On 2026-11-05 JST, first recheck the guide URL's indexed/crawled state. If it remains unindexed, inspect the sitemap submission detail and displayed last-read/status before any resubmission. A repeated indexing request without new evidence is not the next step.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.

## Authenticated GSC indexing and first-impression evidence: 2026-11-05 JST

- The operator rechecked the exact guide URL in Google Search Console after the 2026-11-02 indexing request. URL Inspection now reported that the URL is on Google and eligible to appear in Google Search. HTTPS and Breadcrumb structured data were shown as valid. This is authenticated evidence that the previous unindexed discovery obstacle was resolved by November 5; it does not establish traffic or conversion.
- In the Search results report, with Web search, the past-three-month date range and a page filter containing `/guides/japandi-nightstand-height/`, the guide showed 1 impression, 0 clicks and average position 7. The single impression is too small to describe stable rank, CTR, demand or purchase intent.
- The Queries tab and Countries tab both showed “No data” for this page filter. This does not convert the hidden or unavailable dimension into zero. The query is unknown and the country is unknown, so the impression cannot be classified as a US purchase-condition search.
- The unfiltered site report showed 19 clicks, about 1,160 impressions, 1.6% CTR and average position 17 for the displayed site/date scope. Those site totals are not attributed to this guide.
- The indexing request was not repeated and no sitemap resubmission was performed. The earlier authenticated sitemap processing error remains a separate unresolved site-level issue because its status was not rechecked in this evidence set.
- Revenue decision: discovery is no longer the largest verified obstacle. Exposure is still only one impression, so the guide's search and purchase performance remain indeterminate and no copy rewrite is justified. The next independent measurement obstacle is live GA4 receipt and the same-session guide → existing Nightstands LP → `amazon_click` sequence; code presence is not receipt evidence.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.

## Authenticated GA4 live-receipt evidence: 2026-11-06 JST

- The operator opened the production Nightstands support guide, used the in-page “View the existing nightstand collection” route once, and stopped on the existing Nightstands LP. No Amazon link was clicked.
- GA4 Realtime pages showed the support guide with 3 page views and the existing Nightstands LP with 1 page view in the last 30 minutes. The Realtime event card showed `support_to_money` with an event count of 1 and one active user. This is authenticated evidence that production GA4 received both page contexts and the guide-to-collection event.
- These values are operator-generated verification traffic, not organic visitor behavior, and must be excluded from the pilot's demand/conversion judgment. Realtime coexistence for one active user is consistent with the intended route but does not by itself prove an ordered same-session closed sequence.
- The standard Events report was initially scoped to 2026-09-14 through 2026-09-18, then changed to 2026-10-30 through 2026-11-05. Filtering that report for `support_to_money` returned no row because the verification occurred on November 6 and normal reports can lag. That zero-result view is not counted as a failed event or as zero events for November 6.
- `amazon_click` was not exercised. The guide → `support_to_money` → existing LP portion is live-received; the exact event/page order and downstream `amazon_click` in the same session remain unverified. Existing LP Mina drawer wording remains a downstream conversion confounder.
- Revenue decision: tracking installation is no longer wholly unverified. Do not treat the operator-generated event as a conversion. Continue waiting for non-QA search visits and, if available, inspect an ordered GA4 session sequence without creating a real Amazon click.
- Real 390px browser verification remains incomplete: the supplied mobile screenshots show the live guide sections and CTA, but their exact CSS viewport width was not established as 390px. No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.


## GA4 QA-contamination handling checkpoint: 2026-11-09 JST

- Main still ended at commit `5f3e0be3fce1045a0ac08d90455dda649a6c41ea` before this record. The guide HTML blob remained `3aca7034c4a4906cc1c3f22f2f6161c2847d7889`; no public guide code or copy changed after the structured-data correction.
- The November 6 production verification is a known contaminated measurement period. Its observed minimum QA footprint is 3 guide page views, 1 existing Nightstands LP page view, 1 `support_to_money` event and 1 active user in Realtime. These are receipt evidence only, not visitor performance.
- Do not subtract those observed QA counts from later daily totals to manufacture an “organic remainder.” Realtime is a rolling view, the exact ordered session was not established, and other traffic in the same reporting day is unknown. If GA4 session-level evidence can isolate the operator session, exclude that session; otherwise mark November 6 JST daily funnel totals as QA-contaminated and do not use them to judge organic conversion.
- A later standard-report row for `support_to_money` on November 6 would confirm normal-report processing, but it would not convert the known QA event into a visitor conversion. Absence of a row must remain “not observed in the checked report,” not zero, unless the complete date scope and report processing are established.
- Future verification stays on `?qfl_preview=1` or another non-production path. No real Amazon click should be generated for QA. The downstream `amazon_click` step must be evaluated only from naturally received data, and shared Amazon-tag orders or revenue cannot be attributed to this guide alone.
- Search performance remains indeterminate: the last authenticated guide-specific evidence is 1 impression, 0 clicks and no query/country dimension data. Exact 390px browser rendering, the ordered same-session sequence, a natural downstream `amazon_click`, current sitemap processing status, US purchase-condition queries, and missing manufacturer opening/quantity evidence remain unresolved.
- Existing LP Mina drawer wording remains a downstream conversion confounder. No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.

## 390px source-level overflow precheck: 2026-11-10 JST

- Main ended at commit `113ffdc0f0f90ee4e30e0d8f9c4142f14e4dd471` before this record. The guide stylesheet blob remained `425c6615529176b496d1c238c4867a3182b32f15`; no public guide code or copy changed.
- Audited the current guide HTML and page-scoped CSS specifically for document-level horizontal overflow at a 390 CSS-pixel viewport. Both `max-width: 640px` and `max-width: 480px` rules apply. With global `box-sizing: border-box`, the 390px-wide `.wrap` has 20px side padding and a 350px content box; the header uses 18px side padding and wraps its flex navigation.
- The measurement and calculator grids collapse from two columns to one. Images are constrained by `max-width: 100%`; calculator inputs and mobile buttons use `width: 100%` inside border-box sizing. Source links and comparison cells use `overflow-wrap: anywhere`.
- The comparison table's desktop `min-width: 560px` is explicitly reset to `min-width: 0` below 640px. Header, rows and cells become block layout, so the desktop table minimum does not force the document wider than the viewport. The source contains no viewport-width sizing, negative horizontal margin, transform offset or fixed content width larger than the mobile content box.
- This source audit found no definite CSS cause of document-level horizontal overflow at 390px. It is not a rendered-browser result and does not establish actual `document.scrollWidth`, font rendering, touch behavior, focus behavior or the exact appearance of every table row. The supplied mobile screenshots still do not establish an exact 390px CSS viewport.
- Exact 390px browser verification remains open until a real browser can report a 390px viewport and compare `document.documentElement.scrollWidth` with `clientWidth`. Do not promote this precheck to completed mobile QA.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.

## Archived screenshot evidence correction: 2026-11-11 JST

- Main ended at commit `7a8b4d3962e9890bf86842830e005a48a4106282` before this record. The guide HTML and stylesheet blobs remained `3aca7034c4a4906cc1c3f22f2f6161c2847d7889` and `425c6615529176b496d1c238c4867a3182b32f15`; no public guide code or copy changed.
- Re-inspected the preserved November 6 guide captures rather than relying on their earlier description. The guide images named `image(20261106-090441).png`, `-090734.png`, `-090747.png`, `-090759.png` and `-090810.png` have raster widths of 1584, 1325, 1421, 1191 and 1170 pixels respectively.
- Those captures show the desktop responsive state: the header navigation remains horizontal, the comparison is still a four-column table, and the collection CTA is not the mobile full-width button. They do not show a device toolbar, a CSS viewport readout or the below-640px stacked comparison layout.
- Raster width alone is not a reliable CSS viewport measurement because capture scaling, device-pixel ratio and browser zoom are not established. The narrower conclusion is decisive: these archived captures are not evidence of an exact 390 CSS-pixel browser test and should not be described as mobile screenshots.
- This correction supersedes the “supplied mobile screenshots” wording in the November 6 and November 10 checkpoints. The captures still support that the live guide, comparison content, CTA, FAQ and sources rendered in a desktop browser; they do not complete mobile QA.
- Exact 390px verification still requires a real browser reporting a 390 CSS-pixel viewport, a stacked comparison layout, and `document.documentElement.scrollWidth === document.documentElement.clientWidth`. Use `?qfl_preview=1`; do not generate production analytics or a real Amazon click.
- No guide HTML/CSS/JS, existing LP, Priority CTA, affiliate destination, product selection, Pinterest file, sitemap, robots file or shared measurement code was changed. Only this verification record was updated.
