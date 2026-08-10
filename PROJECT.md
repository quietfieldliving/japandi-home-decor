# Japandi Home Decor Project Guide

## 1. Project Overview

This repository contains a Pinterest-first Amazon Associates website focused on Japandi home decor.

Primary goals:

1. Build useful category landing pages.
2. Attract visitors from Pinterest.
3. Attract visitors from Google Search.
4. Send qualified visitors to Amazon product pages.
5. Keep the website visually consistent and easy to maintain.

Live website:

https://quietfieldliving.github.io/japandi-home-decor/

Repository:

japandi-home-decor

Hosting:

GitHub Pages

Primary language of published pages:

English

Primary operator language:

Japanese

---

## 2. Important Working Principle

Read this file before making any changes.

Do not redesign the website.

Do not invent a new structure when an existing page can be reused.

Consistency is more important than creativity.

When uncertain:

1. Inspect the latest completed category page.
2. Follow its structure and styling.
3. Make the smallest necessary change.
4. Report any judgment call before changing unrelated files.

Do not make broad improvements unless explicitly requested.

---

## 3. Division of Responsibilities

### Human operator

The human operator handles:

- Creating category folders inside the external Images folder
- Saving generated Hero images
- Searching Amazon.com
- Creating Amazon SiteStripe or Get Link short URLs
- Uploading Pinterest images
- Publishing or scheduling Pinterest Pins
- Providing product links to the coding agent

The human operator should not need to manage repository folder paths manually.

### Coding agent

The coding agent handles:

- Creating category landing-page folders
- Copying the most relevant existing page as a template
- Writing and editing HTML and CSS
- Optimizing Hero images
- Creating WebP versions
- Keeping PNG fallbacks
- Updating internal links when explicitly requested
- Updating the homepage when requested
- Updating sitemap.xml
- Validating desktop and mobile layouts
- Checking affiliate links
- Committing and pushing after approval

### ChatGPT or planning agent

The planning agent handles:

- Selecting the next category
- Creating Hero-image concepts
- Writing coding-agent prompts
- Evaluating Amazon product candidates
- Writing Pinterest titles and descriptions
- Managing the daily workflow
- Deciding when to stop, revise, or continue

---

## 4. Local Project Paths

Main repository path:

C:\Users\a4221\OneDrive\ドキュメント\GitHub\japandi-home-decor

External source-image root:

C:\Users\a4221\OneDrive\Pinterest-Amazon\Project\Niches\HomeDecor\Images

The coding agent must inspect the actual filesystem before assuming a path is correct.

If the supplied path differs from the real path:

1. Find the actual file.
2. Use the actual file.
3. Report the discrepancy.
4. Do not silently create duplicate image folders.

---

## 5. Naming Rules

### External Images folders

Use PascalCase with no spaces.

Examples:

- ShojiLamp
- JapandiWallArt
- JapandiTableLamps
- JapandiFloorLamps
- JapandiCeilingLights
- JapandiRugs
- JapandiCoffeeTables
- JapandiDiningTables

### Repository page folders

Use lowercase kebab-case.

Examples:

- japandi-wall-art
- japandi-table-lamps
- japandi-floor-lamps
- japandi-ceiling-lights
- japandi-rugs
- japandi-coffee-tables
- japandi-dining-tables

The human operator manages only the external Images folder names.

The coding agent manages repository folder names and URL paths.

---

## 6. Hero Image Naming

Use a clear singular filename related to the category.

Examples:

- hero-wall-art.png
- hero-table-lamp.png
- hero-floor-lamp.png
- hero-ceiling-light.png
- hero-rug.png
- hero-coffee-table.png
- hero-dining-table.png

The source PNG must remain available.

Create an optimized WebP copy inside the relevant page assets folder.

Example:

assets/hero-coffee-table.webp

Use a PNG fallback through a picture element when consistent with existing pages.

Do not hotlink images.

Do not use Amazon product images.

---

## 7. Current Project Status (updated 2026-08-11)

Initial build is complete.

- Landing pages: 20 / 20 published
- Amazon product links: 60 / 60 (three per landing page)
- Pinterest Pins: 100 / 100
- Internal linking: standardized site-wide (every page's header nav reaches all 20 categories + the Shoji Floor Lamps home page)
- Homepage: reflects all 20 categories (header nav + "More Japandi Guides" card grid)
- sitemap.xml: final, 21 URLs (home + 20 categories), no duplicates
- Product-card images: still `Image coming soon` on every page. Real product images are a **separate future task** — do not scrape or hotlink Amazon images.
- Next phase: analytics / measurement (traffic, clicks, Pinterest performance), then iterate.

### Published categories (20)

The home page (root `index.html`) is the **Shoji Floor Lamps** guide and also acts as the site home.

| # | Category | Slug |
|---|----------|------|
| — | Shoji Floor Lamps (home) | `/` (root `index.html`) |
| 1 | Japandi Wall Art | japandi-wall-art |
| 2 | Japandi Table Lamps | japandi-table-lamps |
| 3 | Japandi Floor Lamps | japandi-floor-lamps |
| 4 | Japandi Ceiling Lights | japandi-ceiling-lights |
| 5 | Japandi Rugs | japandi-rugs |
| 6 | Japandi Coffee Tables | japandi-coffee-tables |
| 7 | Japandi Dining Tables | japandi-dining-tables |
| 8 | Japandi Sofas | japandi-sofas |
| 9 | Japandi Bed Frames | japandi-bed-frames |
| 10 | Japandi Nightstands | japandi-nightstands |
| 11 | Japandi Dressers | japandi-dressers |
| 12 | Japandi Bookshelves | japandi-bookshelves |
| 13 | Japandi Dining Chairs | japandi-dining-chairs |
| 14 | Japandi Accent Chairs | japandi-accent-chairs |
| 15 | Japandi Side Tables | japandi-side-tables |
| 16 | Japandi Benches | japandi-benches |
| 17 | Japandi Console Tables | japandi-console-tables |
| 18 | Japandi Storage Cabinets | japandi-storage-cabinets |
| 19 | Japandi Shoe Cabinets | japandi-shoe-cabinets |
| 20 | Japandi Bar Stools | japandi-bar-stools |

Two page templates exist and must be preserved:

- **Home template** (`styles.css`, `header.site-header` + `nav.site-nav`): the root `index.html` and `japandi-wall-art/` only.
- **Category template** (per-page `style.css`, `header.site-header` + `nav.nav`, hero via `<picture>` WebP-first, `.related` "You may also like"): the other 18 categories.

Before creating or editing a page, inspect the actual repository — do not rely only on this list.

---

## 8. Next Planned Category

All 20 planned categories are built and published. There is no next category queued.

The project has moved from **building** to **measuring**: analytics, click tracking, and Pinterest performance, then iteration on the existing 20 pages (copy, images, internal links).

If a new category is ever requested:

- Use the **category template** (copy the most recent category page, e.g. `japandi-bar-stools`).
- Add it to the header nav on every page and to the home page card grid.
- Add its URL to `sitemap.xml`.
- Follow the latest explicit user instruction over this section.

---

## 9. Standard Daily Workflow

Every category normally follows this sequence.

### Phase 1: Setup

1. Human creates the external Images category folder.
2. Hero image is generated.
3. Human saves and names the Hero image.
4. Coding agent confirms that the source file exists.

### Phase 2: Draft landing page

1. Copy the most relevant existing category page.
2. Create the new repository folder.
3. Replace page-specific text.
4. Add the Hero image.
5. Add SEO metadata.
6. Add placeholder Top Picks.
7. Update sitemap.xml.
8. Update homepage only when explicitly included in the task.
9. Validate locally.
10. Do not commit or push yet unless instructed.

### Phase 3: Amazon product selection

The human provides three Amazon short URLs:

- Best Overall
- Best Value
- Budget Pick

### Phase 4: Final landing page

1. Replace all placeholder links.
2. Verify each short URL reaches the intended Amazon product.
3. Rewrite each card description using verified product facts.
4. Validate desktop and mobile.
5. Commit and push.
6. Confirm the public page returns HTTP 200.

### Phase 5: Pinterest

For each category, create five separate Pinterest images.

Each Pin requires:

- One individual vertical image
- Title
- Description
- Tagged Topics
- Landing-page URL

The human publishes the Pins.

---

## 10. Standard Landing-Page Structure

Use the existing page structure as the final authority.

A normal category page includes:

1. Hero
2. Introduction
3. Why Choose this product category?
4. Top Picks
5. Buying or selection guide
6. Materials, shapes, sizing, or styling guidance
7. Placement or room ideas when relevant
8. FAQ
9. Conclusion
10. Related-page links

Section names may change naturally for the category.

Do not force irrelevant sections merely to match a checklist.

---

## 11. Hero Rules

The Hero should display the image prominently.

Rules:

- Show the Hero image.
- Keep exactly one H1.
- H1 may use the existing sr-only pattern.
- Do not display duplicate large text over an image that already contains its own title unless the template requires it.
- Place the CTA directly below the Hero.
- CTA text is normally:

View Top Picks

- CTA target:

#top-picks

- Preserve smooth scrolling where already implemented.
- Prevent layout shift by declaring image dimensions or aspect ratio.
- Do not lazy-load the above-the-fold Hero image.
- Use appropriate fetch priority when already consistent with the project.

---

## 12. Design Rules

Preserve the established design language.

Do not casually change:

- Fonts
- Colors
- Button styles
- Content width
- Spacing system
- Header style
- Card style
- Border radius
- Navigation behavior
- Mobile layout
- Global CSS

Current design direction:

- Warm neutral palette
- White and beige backgrounds
- Dark brown or near-black text
- Natural wood visual language
- Calm editorial typography
- Minimalist spacing
- Japandi aesthetic

If CSS changes are necessary:

1. Make the smallest scoped change possible.
2. Explain why it is required.
3. Confirm that existing pages are not broken.

---

## 13. Top Picks Rules

Every product landing page normally has three cards:

1. Best Overall
2. Best Value
3. Budget Pick

Before products are selected, placeholders may use:

- https://example.com
- Image coming soon
- Clearly marked placeholder copy
- TODO comments

After real links are provided:

- Remove every example.com occurrence from that page.
- Remove every placeholder description.
- Keep exactly one link for each selected product.
- Confirm the links are in the correct card order.

Button text:

Check availability

Required link attributes:

target="_blank"

rel="nofollow sponsored noopener"

Do not change these without an explicit instruction.

---

## 14. Amazon Product Copy Rules

Product descriptions must reflect the actual linked products.

Use only information verified on the Amazon product page.

Allowed examples:

- Material
- Shape
- Color
- General construction
- Storage feature
- Product type
- Indoor or outdoor positioning
- Confirmed functional features

Do not include:

- Current price
- Discount amount
- Star rating
- Review count
- Sales volume
- Best Seller claims
- Testimonials
- Personal testing claims
- Unsupported durability claims
- Invented dimensions
- Invented materials
- Invented certifications
- “Cheapest” or absolute price-superiority claims

If a specification cannot be verified:

Omit it.

Do not guess.

Descriptions should be natural English, useful to readers, and consistent with the page theme.

If a selected product clearly conflicts with the page theme:

Report it before finalizing, unless the product was explicitly approved after the conflict was disclosed.

---

## 15. Amazon Image Rules

Do not copy or redistribute Amazon product images.

Product-card images remain placeholders unless the project has a separately approved, self-created image.

Use:

Image coming soon

until an approved self-created image exists.

Do not hotlink Amazon images.

Do not scrape product images.

---

## 16. SEO Rules

Every category page should include:

- Unique title tag
- Unique meta description
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Exactly one H1
- Logical heading hierarchy
- Internal links
- Article structured data
- BreadcrumbList structured data

Do not add:

- Product schema
- Review schema
- AggregateRating schema
- Offer schema
- Fake pricing data
- Fake review data

Schema must match the visible page content.

Canonical URLs must use the GitHub Pages project path.

Expected pattern:

https://quietfieldliving.github.io/japandi-home-decor/category-folder/

---

## 17. Internal-Link Rules

New pages should naturally link to relevant existing categories.

Do not insert every page link into every paragraph.

Use:

- Header or navigation where established
- Related guides
- Contextual links in relevant sections
- A “You may also like” area where established

Do not update all historical pages unless explicitly requested.

When a new category is created, report which older pages do not yet link to it.

This allows navigation updates to be batched rather than performed unpredictably.

---

## 18. Homepage Rules

Add the new category to the homepage only when instructed.

Preserve the homepage layout.

Do not redesign the homepage.

If the homepage has a fixed card capacity or layout problem:

Report it before inventing a new design.

Confirm that the homepage link resolves correctly.

---

## 19. Sitemap Rules

Add each public category page to sitemap.xml.

Ensure:

- XML remains valid
- No duplicate URL entries
- Correct project-path URL
- Previously published pages are not accidentally removed

When old public pages are missing from the sitemap, report the issue and fix it only if the task includes sitemap maintenance or the omission is clearly accidental.

---

## 20. Git Rules

### Draft phase

Before real Amazon links are added:

- Do not commit
- Do not push

unless explicitly instructed.

### Final phase

After real Amazon links and verified descriptions are added:

- Commit
- Push to main
- Confirm zero unpushed commits
- Confirm GitHub Pages build completion
- Confirm the public page returns HTTP 200

Use clear commit messages.

Examples:

- Add Japandi Dining Tables landing page
- Add real affiliate picks to Japandi Dining Tables
- Update Japandi Dining Tables budget pick
- Complete project operating guide

Do not rewrite unrelated Git history.

Do not force-push.

---

## 21. Validation Checklist

Before reporting completion, verify:

### Files

- Expected page folder exists
- HTML exists
- CSS reference resolves
- Hero PNG exists
- Hero WebP exists
- No broken local paths

### Content

- Exactly one H1
- Logical heading hierarchy
- Correct category name
- No placeholder text after finalization
- No example.com links after finalization
- No prohibited Amazon claims

### Affiliate links

- Three intended URLs
- Correct card order
- target="_blank"
- rel="nofollow sponsored noopener"
- Each link reaches an Amazon product page

### SEO

- Title
- Meta description
- Canonical
- Open Graph
- Twitter Card
- Article schema
- BreadcrumbList
- No Product, Review, AggregateRating, or Offer schema

### Layout

- Desktop at 1280px
- Mobile at a true 390px viewport
- No horizontal overflow
- Cards stack correctly on mobile
- Text wraps correctly
- CTA works
- Hero is not cropped unintentionally
- No broken image icons

### Public deployment

- GitHub Pages build completed
- Page returns HTTP 200
- Hero image returns HTTP 200
- CSS returns HTTP 200

---

## 22. Reporting Format

At the end of each coding task, report:

### Completed

- Files created
- Files modified
- Main changes

### Validation

- Desktop result
- Mobile result
- Link result
- SEO/schema result
- Public HTTP result

### Git

- Commit ID
- Commit message
- Push status
- Unpushed commit count

### Public URL

Provide the final public URL.

### Remaining Tasks

Clearly list anything unfinished, such as:

- Product-card images
- Historical navigation updates
- README updates
- Missing related-page links
- Pinterest work

Do not hide unfinished work behind vague language.

---

## 23. Pinterest Rules

Pinterest uses five separate vertical images per category.

Do not combine five Pins into one collage unless explicitly requested.

Each Pin should be a separately downloadable file.

Preferred aspect ratio:

2:3

Typical target size:

1000 × 1500 px

Use consistent visual language:

- Warm beige
- Neutral cream
- Natural wood
- Soft green accents
- Editorial serif typography
- Calm Japandi interiors
- Clear readable headline
- No excessive clutter

Each Pin requires:

1. Image
2. English title
3. English description
4. Tagged Topics
5. Category landing-page URL

Hashtags are not the default requirement.

Use Pinterest’s available Tagged Topics where appropriate.

The linked URL should normally be the category landing page, not a direct Amazon affiliate URL.

---

## 24. Pinterest Copy Principles

Titles should:

- Be clear
- Include the category keyword naturally
- Match the image
- Avoid clickbait
- Avoid unsupported superlatives

Descriptions should:

- Explain the benefit
- Include relevant category terms naturally
- Encourage reading the guide
- Use natural English
- Link to the category page

Do not claim that products were tested unless they were genuinely tested.

Do not use fake scarcity.

---

## 25. Current Asset Count Reference

Initial build complete (2026-08-11):

- 20 landing pages (20 / 20)
- 60 Amazon product links (60 / 60 — three per page)
- 100 Pinterest Pins (100 / 100)

Site-finishing done: internal links standardized across all pages, home page reflects all 20 categories, sitemap finalized.

Still open: product-card images are `Image coming soon` on every page (separate future task).

Inspect the repository and Pinterest records before reporting new totals.

---

## 26. Planned Category Direction

The initial 20-category set is complete (see Section 7). No further categories are planned for now — the focus has shifted to analytics/measurement and to improving the existing 20 pages (product images, copy, internal links).

Do not create new categories automatically.

Create only a category that is explicitly requested, and if so follow Section 8.

---

## 27. Files That May Be Added Later

Possible future project-management files:

- TODO.md
- CHANGELOG.md

PROJECT.md contains durable operating rules.

TODO.md should contain only current tasks.

CHANGELOG.md should record meaningful project changes.

Do not create either file unless requested.

---

## 28. Absolute Do-Not-Do List

Do not:

- Redesign without permission
- Change global CSS without a demonstrated need
- Invent product facts
- Copy Amazon product images
- Add fake reviews
- Add fake prices
- Add Product or Review schema
- Change affiliate URLs
- Replace supplied short links with different links
- Add unrelated pages
- Update every old page without approval
- Commit drafts unless instructed
- Force-push
- Delete existing public pages
- Assume filesystem paths without checking
- Tell the human operator to manually manage repository folders when the coding agent can do it

---

## 29. Priority Order

When rules conflict, use this priority order:

1. Latest explicit user instruction
2. Safety, legal, affiliate, and factual-accuracy requirements
3. Existing repository structure and working implementation
4. PROJECT.md
5. Older chat instructions
6. Optional suggestions

---

## 30. Final Operating Rule

The correct default behavior is:

Read the repository.

Read PROJECT.md.

Reuse the latest successful page.

Make only the requested changes.

Validate thoroughly.

Report honestly.

Consistency first.
