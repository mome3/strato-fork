# Strato Nexus

The marketing and content website for **Strato Nexus** — a multi-asset DeFi platform that combines hard asset stability with on-chain efficiency. The site covers the product, team, blog, and legal pages, and is deployed on Vercel.

---

## About This Project

Strato Nexus is a consumer DeFi product built on the STRATO blockchain. This repository is the public-facing website, providing:

- A product landing page with animated hero, feature cards, stats, and partner sections
- A blog with category filtering, full-text post pages, and a featured carousel
- Team directory pages with per-member extended bios
- Legal pages (Terms of Service, Privacy Policy, API Terms of Use)
- A contact page

Content is managed entirely via Markdown/MDX files in the `content/` directory — no external CMS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16.1.6 (App Router) |
| Language | TypeScript 5.7.3 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://radix-ui.com/) |
| Styling | Tailwind CSS v4 |
| Animations | [Framer Motion](https://www.framer.com/motion/) 11, [Lottie](https://airbnb.io/lottie/) (lottie-web + lottie-react) |
| Content parsing | [gray-matter](https://github.com/jonschlinkert/gray-matter), [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote), [react-markdown](https://github.com/remarkjs/react-markdown) |
| Markdown plugins | remark-gfm, rehype-raw |
| Image blur placeholders | [plaiceholder](https://plaiceholder.co/) + sharp |
| Analytics | [@vercel/analytics](https://vercel.com/analytics) |
| Package manager | pnpm |
| Deployment | Vercel |

---

## Project Structure

```
strato-nexus-refresh/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Poppins font, Analytics)
│   ├── page.tsx                # Homepage
│   ├── blog/
│   │   ├── page.tsx            # Blog index (featured carousel + post grid)
│   │   └── [slug]/page.tsx     # Individual blog post page
│   ├── team/
│   │   ├── page.tsx            # Team directory (grouped by department)
│   │   └── [slug]/page.tsx     # Individual team member page
│   ├── contact/page.tsx        # Contact page
│   ├── terms/page.tsx          # Terms of Service
│   ├── privacy/page.tsx        # Privacy Policy
│   └── api-terms/page.tsx      # API Terms of Use
│
├── components/                 # React components
│   ├── ui/                     # shadcn/ui primitives
│   ├── blog/                   # Blog-specific components
│   │   ├── featured-carousel.tsx
│   │   ├── post-card.tsx
│   │   ├── blog-search.tsx
│   │   ├── category-filter.tsx
│   │   ├── blog-pagination.tsx
│   │   └── recent-posts.tsx
│   ├── hero-section.tsx        # Homepage hero with Lottie animation
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── feature-card.tsx
│   ├── stats-section.tsx
│   ├── partners-section.tsx
│   ├── community-section.tsx
│   ├── hard-money-section.tsx
│   ├── peace-of-mind-section.tsx
│   ├── legal-page.tsx          # Shared legal page layout wrapper
│   └── theme-provider.tsx
│
├── content/                    # File-based content
│   ├── blog/                   # Blog posts (.md / .mdx)
│   └── team/                   # Team member extended bios (.mdx)
│
├── lib/                        # Server-side utilities
│   ├── posts.ts                # Blog post parsing, filtering, sorting
│   ├── blog-constants.ts       # Post type definition and category list
│   ├── team-data.ts            # Static team member records
│   ├── team-content.ts         # MDX bio loader for team members
│   ├── blur.ts                 # plaiceholder blur data URL generator
│   └── utils.ts                # cn() class name utility
│
├── hooks/
│   ├── use-mobile.ts           # Viewport width breakpoint hook
│   ├── use-reveal.ts           # Intersection-observer reveal hook
│   └── use-toast.ts            # Toast notification hook
│
├── public/                     # Static assets served at /
│   ├── background-artwork.svg
│   ├── background-artwork-mobile.svg
│   ├── hero-media.svg
│   ├── cards/                  # Static SVG feature cards
│   ├── blog/                   # Blog cover images
│   ├── team/                   # Team member portrait images
│   └── images/                 # Archived external images (cached locally)
│
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── components.json             # shadcn/ui configuration
└── pnpm-lock.yaml
```

---

## Configuration Overview

### `next.config.mjs`

- `typescript.ignoreBuildErrors: true` — TypeScript errors do not fail the Vercel build.
- SVG files at `/:path*.svg` are served with `Content-Type: image/svg+xml` and a one-year immutable cache header.

### `tsconfig.json`

- Path alias: `@/*` maps to the project root. Import any file as `@/lib/posts`, `@/components/navbar`, etc.
- Target: ES6, module resolution: `bundler`.

### `postcss.config.mjs`

Uses `@tailwindcss/postcss` for Tailwind CSS v4 integration.

### Environment Variables

This project does not require any environment variables for local development or production. All content is file-based and all third-party integrations (Vercel Analytics) are zero-config.

---

## Local Development

**Prerequisites**

- Node.js >= 20
- pnpm >= 9

**Setup**

```bash
# Clone the repository
git clone https://github.com/mo-mew/strato-nexus-refresh.git
cd strato-nexus-refresh

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000) with Turbopack.

**Other commands**

```bash
# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

---

## Content Architecture

### Blog Posts — `content/blog/`

Posts are `.md` or `.mdx` files parsed with `gray-matter`. All frontmatter fields:

```yaml
---
title: "Post Title"
date: "2026-02-11"
description: "Short description shown in cards and meta."
categories: "Updates"         # "Updates" | "Guides" | "Community" | "Videos"
img: /images/path/to/cover.png
featured: true                # true → appears in the featured carousel
author: "Author Name"
authorTitle: "Author Role"
videoUrl: "https://www.youtube.com/embed/VIDEO_ID"   # optional
---
```

The `lib/posts.ts` module reads all files at build time, applies `sanitizeContent()` to handle legacy Jekyll liquid tags (`{% include ... %}`), and exposes:

- `getAllPosts()` — sorted by date descending
- `getFeaturedPosts()` — filtered to `featured: true`
- `getPostBySlug(slug)` — single post lookup
- `getPostsByCategory(category)` — category filter

Blog images are stored in `public/blog/` and referenced by path. Blur placeholders are generated at request time via `lib/blur.ts` using `plaiceholder` + `sharp`.

### Team Members — `content/team/` and `lib/team-data.ts`

Team data is split across two sources:

**`lib/team-data.ts`** — defines all members as a typed static array (`TeamMember[]`). Each record contains:

```ts
{
  slug: "bob-summerwill",
  name: "Bob Summerwill",
  image: "/team/bob-summerwill.png",
  jobTitle: "Head of Ecosystem",
  department: "Leadership",    // "Leadership" | "Team Members" | "Advisors"
  summary: "One-line summary shown on the team index.",
  links: {
    website?: string
    x?: string
    github?: string
    linkedin?: string
    wikipedia?: string
  }
}
```

**`content/team/{slug}.mdx`** — optional extended bio file. The content is plain MDX (no frontmatter required) with `##` sections for Overview, background, prior roles, etc. If no file exists for a member, the individual page shows only the data from `team-data.ts`.

Portrait images live in `public/team/` and follow the naming convention `{slug}.png`.

---

## Custom Workflows

### Jekyll Liquid Tag Sanitization

Blog posts migrated from a Jekyll site may contain `{% include ... %}` liquid tags. `lib/posts.ts` converts these at parse time:

| Liquid tag | Output |
|---|---|
| `{% include twitter-embed.html url="..." %}` | Anchor link to the tweet |
| `{% include content-embed.html src="..." %}` | YouTube `<iframe>` embed |
| `{% include content-embed.html url="..." %}` | Article link card |
| Unknown tags | Stripped silently |

`{{ site.baseurl }}` and `{{ '...' | relative_url }}` are also resolved to plain paths.

### Blur Placeholders

`lib/blur.ts` generates low-quality image placeholders (LQIP) via `plaiceholder`. Results are in-memory cached per process. Images without a matching file in `public/` return `undefined` (no placeholder).

---

## Deployment

The site is deployed to **Vercel**.

- **Build command:** `pnpm build` (runs `next build`)
- **Output:** Static + server-rendered pages via Next.js App Router
- **Preview deployments:** Every push to a non-`main` branch generates a Vercel preview URL automatically
- **Production branch:** `main`
- **Analytics:** Vercel Analytics is injected in `app/layout.tsx` via `<Analytics />`

No build-time environment variables are required.

---

## Highlight Banner

The highlight banner is a floating toast anchored to the bottom of the hero section. It is fully controlled by the `BANNER_CONFIG` object at the top of `components/highlight-banner.tsx` — no other files need to be touched.

```ts
// components/highlight-banner.tsx

const BANNER_CONFIG = {
  // Set to false to hide the banner entirely
  enabled: true,

  // Main heading — renders with an animated dark-blue-to-mint gradient
  title: "Strato Nexus is Live",

  // Secondary line shown below the title (mobile) or inline (desktop)
  subtitle: "Start hedging with hard assets today",

  // URL the banner links to when clicked
  href: "https://app.strato.nexus/",

  // Open the link in a new tab?
  openInNewTab: true,

  // Optional countdown target. Use an ISO date string to show a live
  // days / hours / minutes / seconds countdown.
  // Set to null to hide the countdown entirely.
  countdownTarget: null,             // hidden
  // countdownTarget: "2026-06-01T00:00:00Z",  // example: show a countdown
}
```

**Turning the banner on/off:** Set `enabled: true` or `enabled: false`.

**Adding a countdown:** Set `countdownTarget` to an ISO 8601 date string (UTC). The countdown ticks live in the browser and disappears automatically when the target is reached. Set it back to `null` to remove it.

**Dismissal:** Visitors can close the banner with the X button. The dismissed state is in-memory only (resets on page reload) — intentionally kept lightweight without persisting to `localStorage`.

---

## Development Tips

- **Adding a blog post:** Create a `.md` file in `content/blog/` with the required frontmatter fields. The slug is derived from the filename.
- **Featuring a post:** Set `featured: true` in the post frontmatter. All posts with this flag appear in the carousel on `/blog`.
- **Adding a team member:** Add a record to the `teamMembers` array in `lib/team-data.ts`, place a portrait at `public/team/{slug}.png`, and optionally create `content/team/{slug}.mdx` for the full bio.
- **Path alias:** Use `@/` to import from the project root in all TypeScript files.
- **SVGs:** The `/:path*.svg` cache header is set to one year (`immutable`). Rename SVG files after updating them to bust the cache in production.
- **Images:** Locally cached external images are stored under `public/images/{domain}/{date}/`. Do not delete these; they are referenced by archived blog posts.

---

## Contributing

```bash
# Fork the repository, then:
git clone https://github.com/<your-fork>/strato-nexus-refresh.git
cd strato-nexus-refresh
pnpm install

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes, then commit
git add .
git commit -m "feat: describe your change"

# Push and open a pull request against main
git push origin feature/your-feature-name
```

Pull requests are reviewed before merging to `main`.

---

## License

This repository is private. All rights reserved by BlockApps, Inc.

---

## Support / Contact

For questions or issues, contact the team at [blockapps.net](https://blockapps.net) or open a GitHub issue in this repository.
