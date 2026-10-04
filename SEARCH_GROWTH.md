# Search Growth — isolated support-page experiment

## Status: prototype, not published

Prepared on 2026-10-04. One support page only:

`guides/stool-height-36-inch-counter/`

The prototype has `noindex, follow`. It is not in sitemap.xml, and no existing page links to it. No production Pages deployment or IndexNow submission has been requested. Do not merge the draft PR until the prototype and measurement isolation are reviewed.

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
