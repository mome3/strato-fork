# CLAUDE.md — strato-nexus

## What is this project?

Marketing and content website for the STRATO DeFi platform. Hosts blog posts, video transcripts, and team bios. No external CMS — all content lives in markdown files committed to git.

## Tech stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **shadcn/ui** + Radix UI for component primitives
- **pnpm** as package manager
- Deployed on **Vercel** (main branch = production)

## Commands

```bash
pnpm dev       # Dev server with Turbopack on localhost:3000
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # ESLint
```

## Project structure

```
app/                    # Next.js App Router pages
  blog/                 # /blog and /blog/[slug]
  team/                 # /team and /team/[slug]
  contact/              # /contact
  terms/ privacy/ api-terms/  # Legal pages
components/
  ui/                   # shadcn/ui components (do not hand-edit, use shadcn CLI)
  blog/                 # Blog-specific: featured-carousel, recent-posts, post-card, etc.
  hero-section.tsx      # Homepage hero with Lottie animation
  navbar.tsx            # Responsive nav
  footer.tsx
  highlight-banner.tsx  # Floating CTA banner with optional countdown
content/
  blog/                 # Markdown blog posts and video transcripts (.md)
  team/                 # Extended team bios (.mdx, optional per member)
lib/
  posts.ts              # Blog post loading, sorting, Jekyll liquid tag conversion
  blog-constants.ts     # Post interface and Category type
  team-data.ts          # Static team member array (source of truth for team)
  team-content.ts       # MDX bio file loader
  blur.ts               # Plaiceholder LQIP generation with in-memory cache
  utils.ts              # cn() helper (clsx + tailwind-merge)
  external-links.ts     # Canonical external URLs
hooks/
  use-mobile.ts         # Viewport < 768px detection
  use-reveal.ts         # IntersectionObserver reveal animation
  use-toast.ts          # Toast notifications
public/
  blog/                 # Blog cover images
  team/                 # Team portraits ({slug}.png)
  images/               # Cached/archived external images
  assets/audio/         # MP3 audio files for video transcripts
  lotties/              # Lottie animation JSON files
```

## Content authoring

### Blog posts

Create a `.md` file in `content/blog/`. Filename becomes the URL slug.

**Frontmatter schema:**

```yaml
---
title: "Post Title"                           # Required
date: "2025-12-08"                            # Quoted ISO date, used for sort order
description: "Short summary for cards/SEO"    # Required
categories: "Updates"                         # "Updates" | "Guides" | "Community" | "Videos"
img: /blog/cover-image.jpg                    # Cover image path (relative to /public)
featured: false                               # true = shows in homepage carousel
author: "Author Name"                         # Required
authorTitle: ""                               # Optional role/title
videoUrl: "https://www.youtube.com/embed/ID"  # For Videos category only
---
```

**Categories:** `Updates`, `Guides`, `Community`, `Videos` — these are the only valid values (defined as a union type in `lib/blog-constants.ts`).

**Video posts** use `categories: "Videos"` and include a `videoUrl`. They typically have an Audio section, `<!-- TABLE_OF_CONTENTS -->` comment, and a full Transcript with timestamped anchor sections.

**Jekyll liquid tags** are supported in blog markdown and converted at build time by `sanitizeContent()` in `lib/posts.ts`:
- `{% include content-embed.html src="https://www.youtube.com/embed/..." %}` → YouTube iframe
- `{% include content-embed.html url="https://..." title="..." %}` → Link card
- `{% include twitter-embed.html url="..." %}` → Tweet link

### Team members

1. Add entry to the `teamMembers` array in `lib/team-data.ts` with slug, name, jobTitle, department, summary, image path, and links.
2. Optionally create `content/team/{slug}.mdx` for an extended bio (no frontmatter needed, just content).
3. Add portrait to `public/team/{slug}.png`.

**Departments:** `"Leadership"`, `"Team Members"`, `"Advisors"`

## Routing

| Route | Source |
|-------|--------|
| `/` | `app/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/{slug}` | `app/blog/[slug]/page.tsx` |
| `/team` | `app/team/page.tsx` |
| `/team/{slug}` | `app/team/[slug]/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/terms` | `app/terms/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |
| `/api-terms` | `app/api-terms/page.tsx` |

All routes are statically generated at build time via `generateStaticParams()`.

## Key patterns and conventions

- **Styling:** Tailwind utility classes. Use `cn()` from `lib/utils.ts` to merge classes. Theme uses CSS custom properties in oklch color space (light mode only currently).
- **Images:** Use Next.js `<Image>` component. Blog images get blur placeholders via `getBlurDataURL()` in `lib/blur.ts`.
- **Dates:** Quoted ISO strings in frontmatter (`"2025-12-08"`). Displayed using `date-fns` `format()`.
- **Internal blog links:** Use `/blog/{slug}` (not `/blogs/`).
- **External links:** Centralized in `lib/external-links.ts`.
- **Animations:** Lottie for hero/feature cards, Framer Motion for page transitions, CSS keyframes for gradients and scrolling.

## Highlight banner

Configured via `BANNER_CONFIG` in `components/highlight-banner.tsx`. Toggle `enabled`, set `title`, `subtitle`, `href`, and optional `countdownTarget` (ISO date string).

## Strato-website migration context

This repo is a migration of content from `/Users/michaeltan/BlockApps/strato-website` (Jekyll). When migrating posts:
- Convert Jekyll frontmatter to the schema above (quote dates, use string category not array, add `featured`/`author`/`authorTitle` fields, remove `hosts`/`guests`/`table_of_contents`/`embed` fields)
- For videos: extract `embed.url` → `videoUrl`, set `categories: "Videos"`, `author: "STRATO Team"`
- Strip markdown links from `description` fields (keep plain text)
- Fix internal links: `/blogs/` → `/blog/`
- Copy associated assets: cover images → `public/images/covers-for-spaces/`, audio → `public/assets/audio/`, other images to appropriate `public/images/` paths
