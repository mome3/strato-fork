import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Category, Post } from "./blog-constants"

export type { Category, Post }
export { categories } from "./blog-constants"

const postsDirectory = path.join(process.cwd(), "content/blog")

/** Parse key="value" or key='value' pairs from a liquid tag body */
function parseLiquidAttrs(body: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  const re = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) {
    attrs[m[1]] = m[2] ?? m[3] ?? ""
  }
  return attrs
}

/** Convert Jekyll liquid tags to plain HTML, and strip HTML comments */
function sanitizeContent(content: string): string {
  // Convert {% include ... %} blocks
  const converted = content.replace(/\{%([\s\S]*?)%\}/g, (_match, body: string) => {
    const trimmed = body.trim()

    // twitter-embed.html → plain link
    if (trimmed.startsWith("include twitter-embed.html")) {
      const attrs = parseLiquidAttrs(trimmed)
      const url = attrs.url || ""
      if (!url) return ""
      // Extract tweet ID for display
      const tweetId = url.split("/").pop() || url
      return `<blockquote class="twitter-link"><a href="${url}" target="_blank" rel="noopener noreferrer">View post on X/Twitter →</a></blockquote>`
    }

    // content-embed.html with src= → YouTube iframe
    if (trimmed.startsWith("include content-embed.html") && /\bsrc\s*=/.test(trimmed)) {
      const attrs = parseLiquidAttrs(trimmed)
      const src = attrs.src || ""
      const title = attrs.title || "Video"
      if (!src) return ""
      return `<div class="video-embed" style="margin: 1.5em 0;"><iframe width="100%" height="400" src="${src}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display:block; border-radius:8px;"></iframe>${attrs.title ? `<div style="font-style:italic; font-size:0.9em; margin-top:0.5em;">${title}${attrs.author ? ` — ${attrs.author}` : ""}${attrs.date ? `, ${attrs.date}` : ""}</div>` : ""}</div>`
    }

    // content-embed.html with url= → article link card
    if (trimmed.startsWith("include content-embed.html") && /\burl\s*=/.test(trimmed)) {
      const attrs = parseLiquidAttrs(trimmed)
      const url = attrs.url || ""
      const title = attrs.title || url
      const author = attrs.author || ""
      const date = attrs.date || ""
      const img = attrs.img || ""
      if (!url) return ""
      const meta = [author, date].filter(Boolean).join(" · ")
      const imgHtml = img ? `<img src="${img}" alt="" style="width:100%; height:140px; object-fit:cover; border-radius:6px 6px 0 0; display:block;" />` : ""
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="display:block; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden; text-decoration:none; color:inherit; margin: 1.5em 0;">${imgHtml}<div style="padding: 0.75em 1em;">${meta ? `<div style="font-size:0.8em; color:#6b7280; margin-bottom:0.25em;">${meta}</div>` : ""}<div style="font-weight:600; font-size:0.95em;">${title}</div></div></a>`
    }

    // Fallback: strip unknown liquid tags
    return ""
  })

  // Strip {{ site.baseurl }} — the remaining /path is kept as-is
  const withoutBaseurl = converted.replace(/\{\{\s*site\.baseurl\s*\}\}/g, "")

  // Convert {{ '/path' | relative_url }} → just the path string
  const withResolvedUrls = withoutBaseurl.replace(
    /\{\{\s*['"]([^'"]+)['"]\s*\|\s*relative_url\s*\}\}/g,
    (_m, path: string) => path
  )

  // Strip HTML comments
  return withResolvedUrls.replace(/<!--[\s\S]*?-->/g, "")
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        categories: (data.categories || "Updates") as Category,
        img: data.img || "",
        featured: data.featured || false,
        author: data.author || "",
        authorTitle: data.authorTitle || "",
        videoUrl: data.videoUrl || undefined,
        content: sanitizeContent(content),
      }
    })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((post) => post.featured)
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: Category): Post[] {
  return getAllPosts().filter((post) => post.categories === category)
}
