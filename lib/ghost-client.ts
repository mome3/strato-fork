import "server-only"

// ── Ghost Content API v5 client ──────────────────────────────────────────
// Typed fetch wrapper — no external dependencies needed.
// All functions run at build time only (output: 'export').

const GHOST_URL = process.env.GHOST_URL?.replace(/\/$/, "") ?? ""
const GHOST_KEY = process.env.GHOST_CONTENT_API_KEY ?? ""

// ── Types matching Ghost Content API response shapes ─────────────────────

export interface GhostTag {
  id: string
  name: string
  slug: string
  visibility: "public" | "internal"
}

export interface GhostAuthor {
  id: string
  name: string
  slug: string
  bio: string | null
  profile_image: string | null
}

export interface GhostPost {
  id: string
  slug: string
  title: string
  html: string
  feature_image: string | null
  featured: boolean
  published_at: string
  custom_excerpt: string | null
  excerpt: string
  primary_tag: GhostTag | null
  tags: GhostTag[]
  primary_author: GhostAuthor | null
  authors: GhostAuthor[]
}

interface GhostPostsResponse {
  posts: GhostPost[]
  meta: { pagination: { pages: number; total: number } }
}

// ── Helpers ──────────────────────────────────────────────────────────────

function ghostUrl(endpoint: string, params: Record<string, string> = {}): string {
  if (!GHOST_URL || !GHOST_KEY) {
    throw new Error(
      "Ghost is not configured. Set GHOST_URL and GHOST_CONTENT_API_KEY environment variables."
    )
  }
  const url = new URL(`/ghost/api/content/${endpoint}/`, GHOST_URL)
  url.searchParams.set("key", GHOST_KEY)
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v)
  }
  return url.toString()
}

async function ghostFetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = ghostUrl(endpoint, params)
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error(`Ghost API error: ${res.status} ${res.statusText} — ${url}`)
  }
  return res.json() as Promise<T>
}

// ── Public API ───────────────────────────────────────────────────────────

/** Fetch all published posts (with tags + authors) in a single request. */
export async function getGhostPosts(): Promise<GhostPost[]> {
  const data = await ghostFetch<GhostPostsResponse>("posts", {
    limit: "all",
    include: "tags,authors",
    formats: "html",
  })
  return data.posts
}

/** Fetch a single post by slug. Returns undefined if not found. */
export async function getGhostPostBySlug(slug: string): Promise<GhostPost | undefined> {
  try {
    const data = await ghostFetch<GhostPostsResponse>("posts", {
      limit: "1",
      filter: `slug:${slug}`,
      include: "tags,authors",
      formats: "html",
    })
    return data.posts[0]
  } catch {
    return undefined
  }
}
