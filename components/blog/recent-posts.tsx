"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import type { Post } from "@/lib/blog-constants"
import { categories } from "@/lib/blog-constants"

interface RecentPostsProps {
  posts: Post[]
}

const ALL = "All"
const allCategories = [ALL, ...categories] as const
const POSTS_PER_PAGE = 6

/* ── Fuzzy helpers ─────────────────────────────────────────────── */

/** Simple Levenshtein distance */
function levenshtein(a: string, b: string): number {
  const m = a.length
  const n = b.length
  if (m === 0) return n
  if (n === 0) return m

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  )
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

/** Check if any word in `text` fuzzy-matches the query token */
function fuzzyMatch(text: string, token: string): boolean {
  if (text.includes(token)) return true
  const maxDist = token.length <= 3 ? 1 : Math.floor(token.length * 0.35)
  const words = text.split(/\s+/)
  return words.some((word) => levenshtein(word, token) <= maxDist)
}

/** Score a post against all query tokens. Returns -1 if no match. */
function scorePost(post: Post, tokens: string[]): number {
  const fields = [
    { text: post.title.toLowerCase(), weight: 3 },
    { text: post.author.toLowerCase(), weight: 2 },
    { text: post.categories.toLowerCase(), weight: 2 },
    { text: post.description.toLowerCase(), weight: 1 },
  ]

  let totalScore = 0
  for (const token of tokens) {
    let matched = false
    for (const { text, weight } of fields) {
      if (fuzzyMatch(text, token)) {
        totalScore += weight
        matched = true
        break
      }
    }
    if (!matched) return -1
  }
  return totalScore
}

/* ── Component ─────────────────────────────────────────────────── */

export function RecentPosts({ posts }: RecentPostsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Category filter
    if (activeCategory !== ALL) {
      filtered = filtered.filter((p) => p.categories === activeCategory)
    }

    // Search filter with fuzzy matching
    const trimmed = searchQuery.trim().toLowerCase()
    if (trimmed) {
      const tokens = trimmed.split(/\s+/).filter(Boolean)
      const scored = filtered
        .map((p) => ({ post: p, score: scorePost(p, tokens) }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
      filtered = scored.map((r) => r.post)
    }

    return filtered
  }, [posts, activeCategory, searchQuery])

  // Reset to page 1 when filters change
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)

  const paginatedPosts = useMemo(() => {
    const start = (safePage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(start, start + POSTS_PER_PAGE)
  }, [filteredPosts, safePage])

  // Reset page when filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  return (
    <section className="py-12">
      {/* Header row: title + search + filters */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-[#1a1a2e]">Recent Posts</h2>

          {/* Search bar */}
          <div className="flex items-center gap-2 rounded-full bg-[#f0f1f5] px-4 py-2">
            <Search size={15} className="shrink-0 text-[#999]" />
            <input
              type="text"
              placeholder="Search articles, authors, tags..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-transparent text-sm text-[#1a1a2e] placeholder:text-[#999] focus:outline-none sm:w-56"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat
                ? "bg-[#4866f7] text-white"
                : "bg-[#f0f1f5] text-[#555] hover:bg-[#e2e4eb]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-base text-[#6b6b7b]">
            No posts found
            {activeCategory !== ALL ? ` in "${activeCategory}"` : ""}
            {searchQuery.trim() ? ` matching "${searchQuery.trim()}"` : ""}.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1f5] text-[#555] transition-colors hover:bg-[#e2e4eb] disabled:opacity-30 disabled:hover:bg-[#f0f1f5]"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${page === safePage
                ? "bg-[#4866f7] text-white"
                : "bg-[#f0f1f5] text-[#555] hover:bg-[#e2e4eb]"
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage >= totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1f5] text-[#555] transition-colors hover:bg-[#e2e4eb] disabled:opacity-30 disabled:hover:bg-[#f0f1f5]"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#d1d5db]">
        {post.img && (
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder={post.blurDataURL ? "blur" : "empty"}
            blurDataURL={post.blurDataURL}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
          />
        )}
      </div>

      {/* Text */}
      <div className="mt-3">
        <h3 className="text-sm font-bold leading-snug text-[#1a1a2e] transition-colors group-hover:text-[#243486] md:text-base text-balance">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-[#6b6b7b] md:text-sm">
          {post.description}
        </p>
        <span className="mt-3 inline-block rounded-full bg-[#f0f1f5] px-3 py-1 text-xs font-medium text-[#555]">
          {post.categories}
        </span>
      </div>
    </Link>
  )
}
