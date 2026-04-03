import type { GhostPost, GhostTag } from "./ghost-client"
import type { Category, Post } from "./blog-constants"
import { categories } from "./blog-constants"

// ── Ghost → Post mapping ────────────────────────────────────────────────
// Maps Ghost Content API JSON to the existing Post interface so that
// all downstream components and pages work without changes.

/** Extract a value from Ghost internal tags (prefixed with #). */
function extractInternalTag(tags: GhostTag[], prefix: string): string | undefined {
  const tag = tags.find((t) => t.name.startsWith(`#${prefix}:`))
  return tag ? tag.name.slice(prefix.length + 2) : undefined
}

/** Map a Ghost tag name to a valid Category, defaulting to "Updates". */
function toCategory(tagName: string | undefined): Category {
  if (!tagName) return "Updates"
  if ((categories as readonly string[]).includes(tagName)) return tagName as Category
  return "Updates"
}

/** Format an ISO date string to YYYY-MM-DD. */
function formatDate(isoDate: string): string {
  return isoDate.slice(0, 10)
}

/** Convert a single Ghost post to the app's Post interface. */
export function mapGhostPost(ghost: GhostPost): Post {
  const videoUrl = extractInternalTag(ghost.tags, "video-url")

  return {
    slug: ghost.slug,
    title: ghost.title,
    date: formatDate(ghost.published_at),
    description: ghost.custom_excerpt ?? ghost.excerpt ?? "",
    categories: toCategory(ghost.primary_tag?.name),
    img: ghost.feature_image ?? "",
    featured: ghost.featured,
    author: ghost.primary_author?.name ?? "",
    authorTitle: ghost.primary_author?.bio ?? "",
    videoUrl,
    content: ghost.html,
    contentFormat: "html",
  }
}

/** Convert an array of Ghost posts, sorted newest-first. */
export function mapGhostPosts(ghostPosts: GhostPost[]): Post[] {
  return ghostPosts
    .map(mapGhostPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
