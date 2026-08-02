# japandi-home-decor

Japandi Home Decor Inspiration — *Quiet Field Living*

Amazon Associates guide site published with GitHub Pages.

**Live site:** https://quietfieldliving.github.io/japandi-home-decor/

---

## Pages

| Page | Path | Live URL |
|------|------|----------|
| Shoji Floor Lamps (home) | `/index.html` | [/](https://quietfieldliving.github.io/japandi-home-decor/) |
| Japandi Wall Art | `/japandi-wall-art/` | [/japandi-wall-art/](https://quietfieldliving.github.io/japandi-home-decor/japandi-wall-art/) |
| Japandi Table Lamps | `/japandi-table-lamps/` | [/japandi-table-lamps/](https://quietfieldliving.github.io/japandi-home-decor/japandi-table-lamps/) |
| Japandi Floor Lamps | `/japandi-floor-lamps/` | [/japandi-floor-lamps/](https://quietfieldliving.github.io/japandi-home-decor/japandi-floor-lamps/) |
| Japandi Ceiling Lights | `/japandi-ceiling-lights/` | [/japandi-ceiling-lights/](https://quietfieldliving.github.io/japandi-home-decor/japandi-ceiling-lights/) |

## Structure

```
japandi-home-decor/
├── index.html              home page (Shoji floor lamps)
├── styles.css              styles for the home page and wall art page
├── sitemap.xml             all five pages
├── robots.txt
├── images/                 home page and wall art images
├── japandi-wall-art/
│   └── index.html          (uses ../styles.css)
├── japandi-table-lamps/
│   ├── index.html
│   ├── style.css           self-contained
│   └── assets/             hero-table-lamp.webp + .png
├── japandi-floor-lamps/
│   ├── index.html
│   ├── style.css
│   └── assets/             hero-floor-lamp.webp + .png
├── japandi-ceiling-lights/
│   ├── index.html
│   ├── style.css
│   └── assets/             hero-ceiling-light.webp + .png
└── pinterest/              Pinterest pin generator (not published content)
```

The three newest pages each carry their own `style.css`, copied from the same
template, so editing one never affects the others.

## Conventions

- **Hero:** the hero image already contains the page title as artwork, so pages show
  the image only. The `<h1>` stays in the markup as `.sr-only` — search engines and
  screen readers cannot read text baked into an image. A `View Top Picks` button sits
  directly below the image and scrolls to `#top-picks` via CSS `scroll-behavior`.
- **Images:** WebP served first through `<picture>`, with the PNG as a fallback.
  Hero images are eager-loaded with `fetchpriority="high"`; `width`/`height` are set
  to prevent layout shift. Missing images show a quiet "Image coming soon" frame
  rather than a broken icon.
- **Schema:** `Article` + `BreadcrumbList` only. **No `Product`, `Review`, or
  `AggregateRating`** — those require `offers`/`review`/`aggregateRating`, which means
  publishing price or rating data that goes stale and gets flagged in Search Console.
- **No prices, star ratings, review counts, or "Best Seller" claims** anywhere.
- **Affiliate links:** `target="_blank"` with `rel="nofollow sponsored noopener"`.
  The Amazon Associates disclosure appears in the footer of every page.
- **Product copy** must describe the actual linked product. Verify on the product page
  before writing; do not carry over template placeholder text.

## Local preview

Open any page directly in a browser — no build step or server is required:

```bash
start "" "japandi-ceiling-lights\index.html"
```

## Publishing

GitHub Pages is enabled on `main`. Using **GitHub Desktop**:

1. Review the changed files in the left column.
2. Enter a summary, then click **Commit to main**.
3. Click **Push origin**.
4. Wait 1–2 minutes, then hard-refresh the live URL (**Ctrl + F5**).

Command line equivalent:

```bash
git add . && git commit -m "Your message" && git push
```

> A page that looks stale after pushing is almost always browser or CDN cache.
> Hard-refresh before assuming something is broken.

## Outstanding

- Product images on the wall art, table lamp, floor lamp and ceiling light pages are
  still placeholders (Amazon product images cannot be copied or hotlinked).
- The ceiling light page has three placeholder picks (`https://example.com`) awaiting
  real product selection.
- The nav on the wall art, table lamp and floor lamp pages does not yet list every
  page; the home page and ceiling light page do.
