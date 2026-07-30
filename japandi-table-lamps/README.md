# Japandi Table Lamps — landing page

Amazon Associates guide page for the *Quiet Field Living* site.

**Live URL:** https://quietfieldliving.github.io/japandi-home-decor/japandi-table-lamps/

## Files

```
japandi-table-lamps/
├── index.html      the page
├── style.css       page styles (self-contained)
├── README.md       this file
└── assets/
    └── hero-table-lamp.webp   ← add this image
```

## Publishing to GitHub Pages

GitHub Pages is already enabled for this repository, so publishing is just a commit
and push. Using **GitHub Desktop**:

1. Open GitHub Desktop. The changed files appear in the left column.
2. Type a summary, e.g. `Add Japandi Table Lamps page`.
3. Click **Commit to main**.
4. Click **Push origin**.
5. Wait 1–2 minutes, then open the live URL and hard-refresh (**Ctrl + F5**).

Using the command line instead:

```bash
git add japandi-table-lamps
git commit -m "Add Japandi Table Lamps page"
git push
```

> If the page looks stale after pushing, it is almost always browser or CDN cache.
> Hard-refresh with **Ctrl + F5** before assuming something is broken.

## Before going live

- [ ] Add `assets/hero-table-lamp.webp` (recommended 1600×1067, WebP, under 300 KB)
- [ ] Replace the three `https://example.com` links with real Amazon affiliate URLs
- [ ] Replace the three product titles and descriptions
- [ ] Add product images, or leave the placeholder frames in place
- [ ] Add this URL to `../sitemap.xml`
- [ ] Add a "Table Lamps" link to the nav on the other two pages

Until the hero image exists, the page shows a quiet "Image coming soon" frame rather
than a broken-image icon, so it is safe to publish beforehand.

## Notes

- **No Product schema.** The page uses `Article` + `BreadcrumbList` only. Product
  markup requires `offers`, `review`, or `aggregateRating`, which would mean publishing
  price or rating data that goes stale — Search Console flags it as an error.
- **No prices, star ratings, or review counts** anywhere in the page. Prices change;
  the copy points readers to the retailer page instead.
- Affiliate links use `target="_blank"` and `rel="nofollow sponsored noopener"`.
- The affiliate disclosure sits in the footer on every page.
- `style.css` is scoped to this page and does not touch the site-wide `../styles.css`,
  so the other two pages are unaffected.
