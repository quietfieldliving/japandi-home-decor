# Search Growth — isolated support-page experiment

## Status: page 1 published on 2026-10-04

One support page only:

`guides/stool-height-36-inch-counter/`

Published on **2026-10-04** by merging PR #1 (see "Publication record" below). Live URL: https://quietfieldliving.github.io/japandi-home-decor/guides/stool-height-36-inch-counter/ (`index, follow`, in sitemap.xml). No existing page links to it. No IndexNow submission has been made. The remaining 11 pages have not been built.

## Protected experiment

Do not change existing category LPs, Amazon links, Priority CTA blocks, Pinterest creatives, publishing design, recovery queues, recovery documentation, or existing tracking code. This prototype adds only a new directory and this document.

Adding search traffic affects all-source Money Page totals even without modifying LPs. Evaluate Pinterest using its source/medium cohort, not all-source totals. Amazon orders remain mixed when the exit links share existing tracking IDs.

## Observed GA4 baseline

Read-only query on 2026-10-04, property Quiet Field Living, period 2026-07-06 through 2026-10-03. This is the reporting window, not evidence of continuous tracking throughout the window.

| Session source / medium | Recorded sessions |
|---|---:|
| Pinterest / organic | 215 |
| pinterest.com / referral | 105 |
| uk.pinterest.com / referral | 1 |
| google / organic | 2 |
| (direct) / (none) | 31 |
| chatgpt.com / ai-assistant | 7 |

The same window queried with eventName = amazon_click, grouped by sessionSourceMedium and landingPage, returned no Google-organic row. Do not interpret this as a universal absence of clicks outside the recorded dataset. It is not an Amazon order report.

Search Console authenticated on 2026-10-04; the correct URL-prefix property was discovered. Search performance is now available. URL Inspection/Page Indexing status remains unverified.

## Prototype content and method

- Direct answer: 24–26 inch starting seat-height range for a 36-inch counter.
- Nathan James uses a broader 24–27 inch range; avoid treating labels as fit guarantees.
- Separate countertop-height difference from actual underside clearance.
- Original SVG diagram and PNG social-card version; no AI furniture image or copied product image.
- Original arithmetic table, worked thick-counter example, measuring checklist, four visible FAQs.
- Manufacturer/retailer source links and a checked date. No firsthand testing claim.
- No publication dates in Article schema until actually published.
- Self canonical, OG/Twitter, Article and BreadcrumbList. No Product, Review, Rating, or FAQ rich-result schema.

Sources checked 2026-10-04:

1. https://www.wayfair.com/sca/ideas-and-advice/guides/bar-stool-dimensions-how-to-choose-the-right-ones-T494
2. https://nathanjames.com/products/linus-bar-stool-24-counter-height-solid-wood

## Tracking isolation

The new support page loads the existing GA4 measurement ID only on the production hostname and exact guide path. Local preview does not send analytics.

All Bar Stools Money Page links emit `support_to_money` with support_page_id, money_page_path and link_placement. Link URLs are unchanged and carry no internal UTMs. Existing Money Page amazon_click stays untouched.

Reporting plan:

1. Organic-search sessions landing on the support path.
2. Sessions with support_to_money, not raw click count divided by sessions.
3. Within the same landing-page and source cohort, sessions with existing amazon_click.
4. GA4 Explore closed sequence for the actual Support → Money page_view → amazon_click path; a landing-page report alone does not verify step order.
5. New custom dimensions can help article/placement breakdown, but are not registered by this draft.
6. Reconcile Amazon only at available tracking-ID level. Search-only orders cannot be claimed from shared IDs.

## Release gates

Completed draft checks: local resource and internal-link resolution, one H1, JSON-LD parsing, JavaScript syntax, mocked production event payload, preview analytics exclusion, original measurement diagram visual review, and static layout render. Browser-based desktop/mobile verification is still pending: the runtime has no Chromium binary, and browser download failed. Static rendering does not replace browser QA or prove live GA4 ingestion.

1. Review the one-page prototype and source checks.
2. Connect Search Console; inspect existing focus URLs, sitemap status and index coverage. Export performance by page, query, country and search type for the baseline.
3. Confirm Pinterest reporting can exclude new search traffic. If not, hold public launch through the protected experiment window.
4. For release: replace noindex with index, add actual publication date, add the URL to sitemap once, and decide a crawlable discovery link. A guides hub with no inbound links does not solve an orphan-page problem. Any existing-page backlink needs a separately reviewed minimal change.
5. Decide Bing registration and IndexNow keyLocation. Do not submit an unpublished/noindex draft.
6. Review live analytics without treating developer test clicks as growth.

The 90-day experiment clock begins when the initial 12 approved pages are publicly released; log individual release dates. No 12-page bulk build is authorized by this draft.

## Claude Code handoff prompt

```text
まずPROJECT.mdを全文読み、EXPERIMENTS.mdとSEARCH_GROWTH.mdを確認してください。
対象はSearch Growthの1ページ試作です。Pinterest復旧や既存Money Pageの実験は変更禁止です。
GitHubのsearch-growth/36-inch-counter-prototypeブランチを確認し、guides/stool-height-36-inch-counter/だけをレビューしてください。
未コミット変更があれば上書き・破棄・stashせず報告してください。
寸法の根拠、天板上面と下面の差、図の数値、HTMLのtitle/H1/canonical、構造化データ、PC/390px画面、内部リンク、support_to_moneyイベントを検証してください。
ローカルプレビューは本番GA4へ送信しないこと。既存Amazonリンク・CTA・計測コードは変更しないこと。
試作はnoindexのまま維持し、sitemap追加、IndexNow通知、mainへのマージ、公開、残り11ページ制作はまだ行わないでください。
修正が必要なら、この新規ページ内だけで修正し、差分と検証結果を日本語で報告してください。
```


## Search Console baseline: retrieved 2026-10-04

Requested window: 2026-07-06 through 2026-10-03, finalized data only. Daily output begins 2026-07-26 and ends 2026-09-29; do not claim complete 90-day coverage or treat missing later days as zero.

| Search type | Impressions | Clicks | CTR (reported, rounded) | Average position |
|---|---:|---:|---:|---:|
| WEB | 119 | 2 | 1.68% | 14.0588 |
| IMAGE | 792 | 1 | 0.13% | 63.8838 |

Page rows: Bar Stools WEB 110 impressions / 2 clicks / position 14.8364; home WEB 9 / 0 / 4.5556. IMAGE: home 447 / 1 / 72.5615; Bar Stools 345 / 0 / 52.6406. No Shoe Cabinets or Dining Chairs row returned. Absence of performance is NOT proof of exclusion from the index.

Named WEB query japandi bar stools: 34 impressions / 1 click / average position 11.8235; japandi bar stool: 14 / 0 / 13.1429. Unknown query rows contain additional impressions and clicks; do not infer a full keyword list from named rows.

US: WEB 41 impressions / 0 clicks / position 15.2683; IMAGE 138 / 0 / 58.5435. The two WEB clicks were reported in GBR and MEX; the image click in CAN. These tiny samples do not establish US monetization.

SITEMAPS report: sitemap.xml lastSubmitted 2026-09-12, lastDownloaded 1970-01-01, submitted FALSE, indexed FALSE, errors 0, warnings 0. These sentinel/type-mismatched values do not prove zero indexed pages or a successful fetch. Need direct Search Console UI/URL Inspection review; public sitemap HTTP 200 alone does not prove Google retrieved it.

Decision: retain Bar Stools as first prototype; do not expand to remaining 11 pages until index coverage and sitemap processing are checked. Noindex prototype and draft PR remain unchanged. Existing LPs and Pinterest files untouched.


## Quality review: 2026-10-04

Reviewed in a separate worktree of the prototype branch, served locally at `127.0.0.1`, in a desktop browser at 1280px and an emulated 390px mobile viewport (page zoom 100%). Fix commits: `115f1a7` (mobile layout and diagrams), `cb4513e` (mobile "Seat height:" label).

Passed after fixes:

- No horizontal page overflow at 1280px or 390px; one H1; logical H2 order.
- Sources re-checked 2026-10-04: Wayfair states 24"–26" seats for a 36" counter and 10"–12" between seat and counter underside; Nathan James states 24–27 inches. Table arithmetic, metric rounding, worked example (10.5 / 8.5 / 8 in) and diagram scale are consistent.
- Title, H1, description, self canonical, OG/Twitter, Article and BreadcrumbList parse; no Product/Review/Rating/FAQ schema. Image alt matches the diagram; SVG and OG PNG are 1200×675.
- All six local internal links return 200; the primary CTA navigates to Bar Stools.
- `support_to_money`: with gtag stubbed and the gtag.js loader blocked, all five Bar Stools links (header, breadcrumb, context, primary, related) emitted the expected parameters; non-money links emitted nothing. On a local host the page loads no gtag and sends nothing.

Fixed during review (inside the guide directory only):

- Desktop diagram labels were about 6–7px on a 390px screen. Added a portrait mobile SVG served via `<picture>` at max-width 640px.
- "34.5 in underside" was placed above the top surface. The labels now read "Top surface: 36 in" and "Underside: 34.5 in (example)". The OG PNG was re-rendered from the corrected SVG.
- At 390px the table clipped its third column and the "not underside clearance" caption. At 640px and below, rows now stack as labeled cards, including "Seat height:". The desktop table is unchanged.
- Added `og:image:width`/`height` and the same Google Fonts link the category pages use.

Not verified: real iOS/Android devices, VoiceOver handling of the stacked table, live GA4 ingestion, and the public HTTP response.

Analytics incident: during the review, the existing Bar Stools page was opened once from `127.0.0.1:8765`. That page always loads GA4, so it sent **one `page_view` with hostname `127.0.0.1`** to the production property on 2026-10-04 (JST). Exclude hostname `127.0.0.1` / `localhost` from analysis; it is not real traffic. Do not open existing LPs on a local server during QA.

## Release preparation: 2026-10-04

Changes on the prototype branch:

- `<meta name="robots">` changed from `noindex, follow` to `index, follow`.
- Article JSON-LD: `datePublished` and `dateModified` = `2026-10-04`. A visible "Published October 4, 2026" line sits under the H1.
- sitemap.xml: added exactly one `<url>` for `https://quietfieldliving.github.io/japandi-home-decor/guides/stool-height-36-inch-counter/` with `lastmod` 2026-10-04. Existing URLs and existing lastmod values are unchanged (22 unique URLs).
- No link from any existing LP or the home page. Whether to add one is a separate decision because it touches the Pinterest experiment pages. Until then, discovery depends on the sitemap and URL Inspection.

**Date dependency:** 2026-10-04 is the *planned* publication date. If the merge/deploy happens on a different day, update all four together before or with the merge: `datePublished`, `dateModified`, the visible `<time datetime>`, and the sitemap `lastmod`. Record the actual release date here. Per the release gates above, this is page 1 of 12; log its individual release date.

## Post-publication checks

Run after the PR is merged to `main` and GitHub Pages has deployed.

Public deployment:

1. `https://quietfieldliving.github.io/japandi-home-decor/guides/stool-height-36-inch-counter/` returns 200 and serves `index, follow`.
2. style.css, support-tracking.js, both SVGs and the PNG return 200.
3. The live sitemap.xml contains the new URL once and still parses.

GA4 (property Quiet Field Living, `G-JQ7SQ8TM4Z`):

1. Open the live page with GA DebugView enabled (Tag Assistant or the GA debugger extension). Confirm a `page_view` with page_location on the guide path and hostname `quietfieldliving.github.io`.
2. Click one Bar Stools link. In DebugView, confirm `support_to_money` with `support_page_id=stool-height-36-inch-counter`, `money_page_path=/japandi-home-decor/japandi-bar-stools/`, a `link_placement` value and `link_url`. Then confirm the Bar Stools `page_view` follows.
3. Do not click Amazon links during this test. Treat these as developer test events, not growth, and note the test time here.
4. After 24–48 hours, confirm the event appears in standard reports. Optionally register `support_page_id`, `money_page_path` and `link_placement` as event-scoped custom dimensions. They are not registered yet.
5. Keep filtering hostname `127.0.0.1` / `localhost` (see the analytics incident above).

Search Console (URL-prefix property for `https://quietfieldliving.github.io/japandi-home-decor/`):

1. URL Inspection → Test live URL: page fetchable, indexing allowed (no noindex), user-declared canonical = self.
2. Request indexing once.
3. Sitemaps: resubmit `sitemap.xml`, then record status, last read date and discovered URL count. The earlier SITEMAPS API values were inconclusive.
4. Page indexing: check the guide URL and the existing focus URLs (Bar Stools, Dining Chairs, Shoe Cabinets) for coverage status.
5. After 1–2 weeks, Performance filtered to the guide page: record impressions, clicks, queries and countries against the baseline above. Do not treat the absence of rows as non-indexing.

Still not done (by decision): IndexNow / Bing registration, any existing-page link to the guide, and the remaining 11 pages.


## Publication record: 2026-10-04

Release date: **2026-10-04**. This matches the planned date, so `datePublished`, `dateModified`, the visible `<time>` and the sitemap `lastmod` need no change. This is page 1 of 12; the 90-day clock rule in "Release gates" still applies.

- PR #1 (`search-growth/36-inch-counter-prototype`) merged to `main`. Merge commit: `0ffeae3b008cba05074f71ce0af31786f0601d41`. The merge added only the guide directory and SEARCH_GROWTH.md, plus one sitemap.xml entry (+5 / −0). No existing LP, Amazon link, Pinterest file or tracking code changed.
- GitHub Pages "pages build and deployment" for `0ffeae3`: completed / success.
- Public checks (curl, no browser visit, no Amazon clicks):
  - The page, style.css, support-tracking.js, the desktop SVG, the mobile SVG and the OG PNG all return HTTP 200.
  - No noindex, in either the meta robots tag (`index, follow`) or the response headers.
  - The canonical and og:url equal the live URL.
  - The live sitemap.xml parses with 22 unique URLs and contains the guide URL exactly once.

Search Console (times are JST):

- ~18:22: URL Inspection live test of the new page succeeded.
- ~18:23: Indexing request accepted. Indexing itself is **not yet confirmed**.
- The Search Console sitemap fetch error is **unresolved**. A public HTTP 200 for sitemap.xml does not prove Google read it.

GA4:

- ~18:25–18:28 JST: one `support_to_money` event observed, with `link_placement=primary`.
- That click was the operator's own verification, **not search traffic**. Exclude it, and the earlier `127.0.0.1` page_view, from search-growth results.

Open items:

- Sitemap fetch error in Search Console: unresolved.
- No link from any existing LP to the guide. The decision is pending because of the Pinterest experiment.
- Amazon orders and earnings cannot yet be separated by search traffic, because the exit links share the existing tracking IDs.
- Remaining 11 pages: not built.
- IndexNow / Bing: not submitted.
