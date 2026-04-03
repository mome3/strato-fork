#!/usr/bin/env npx tsx
/**
 * Migrate markdown blog + video posts to Ghost CMS via the Admin API.
 *
 * Usage:
 *   GHOST_URL=https://your-ghost.com GHOST_ADMIN_API_KEY=... npx tsx scripts/migrate-to-ghost.ts
 *
 * Prerequisites:
 *   - Ghost instance running with Admin API access
 *   - pnpm add -D marked
 *
 * The script deletes previously migrated posts (by slug match) and re-creates them.
 * It uploads feature images to Ghost and embeds video iframes for video posts.
 */

import fs from "fs"
import path from "path"
import crypto from "crypto"
import matter from "gray-matter"
import { marked } from "marked"

// ── Config ───────────────────────────────────────────────────────────────

const GHOST_URL = process.env.GHOST_URL?.replace(/\/$/, "")
const GHOST_ADMIN_KEY = process.env.GHOST_ADMIN_API_KEY

if (!GHOST_URL || !GHOST_ADMIN_KEY) {
  console.error("Error: Set GHOST_URL and GHOST_ADMIN_API_KEY environment variables.")
  process.exit(1)
}

const [keyId, keySecret] = GHOST_ADMIN_KEY.split(":")
if (!keyId || !keySecret) {
  console.error("Error: GHOST_ADMIN_API_KEY must be in the format {id}:{secret}")
  process.exit(1)
}

// ── JWT for Admin API ────────────────────────────────────────────────────

function createAdminToken(): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT", kid: keyId })).toString("base64url")
  const now = Math.floor(Date.now() / 1000)
  const payload = Buffer.from(JSON.stringify({
    iat: now,
    exp: now + 300,
    aud: "/admin/",
  })).toString("base64url")

  const signature = crypto
    .createHmac("sha256", Buffer.from(keySecret, "hex"))
    .update(`${header}.${payload}`)
    .digest("base64url")

  return `${header}.${payload}.${signature}`
}

// ── Ghost Admin API helpers ──────────────────────────────────────────────

async function ghostAdminJson<T>(
  method: string,
  endpoint: string,
  body?: unknown
): Promise<T> {
  const token = createAdminToken()
  const url = `${GHOST_URL}/ghost/api/admin/${endpoint}/`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Ghost ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Ghost Admin API ${method} ${endpoint}: ${res.status} — ${text}`)
  }
  return res.json() as Promise<T>
}

interface GhostExistingPost {
  id: string
  slug: string
}

interface GhostPostResponse {
  posts: GhostExistingPost[]
}

async function getExistingPosts(): Promise<GhostExistingPost[]> {
  const data = await ghostAdminJson<GhostPostResponse>(
    "GET",
    "posts?limit=all&fields=id,slug"
  )
  return data.posts
}

async function deletePost(id: string): Promise<void> {
  const token = createAdminToken()
  const url = `${GHOST_URL}/ghost/api/admin/posts/${id}/`
  const res = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: `Ghost ${token}` },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Delete failed: ${res.status} — ${text}`)
  }
}

// ── Image upload ─────────────────────────────────────────────────────────

interface GhostImageResponse {
  images: Array<{ url: string }>
}

/** Upload a local image file to Ghost and return the hosted URL. */
async function uploadImage(localPath: string): Promise<string | undefined> {
  const absPath = path.join(process.cwd(), "public", localPath)
  if (!fs.existsSync(absPath)) {
    console.log(`    IMG MISS  ${localPath} (file not found)`)
    return undefined
  }

  const token = createAdminToken()
  const url = `${GHOST_URL}/ghost/api/admin/images/upload/`

  const fileBuffer = fs.readFileSync(absPath)
  const fileName = path.basename(absPath)
  const ext = path.extname(absPath).toLowerCase()

  // Determine MIME type
  const mimeTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  }
  const mimeType = mimeTypes[ext] || "image/jpeg"

  // Build multipart form data manually
  const boundary = `----FormBoundary${crypto.randomBytes(16).toString("hex")}`
  const bodyParts = [
    `--${boundary}\r\n`,
    `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n`,
    `Content-Type: ${mimeType}\r\n\r\n`,
  ]
  const header = Buffer.from(bodyParts.join(""))
  const footer = Buffer.from(`\r\n--${boundary}--\r\n`)
  const multipartBody = Buffer.concat([header, fileBuffer, footer])

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Ghost ${token}`,
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
      "Content-Length": String(multipartBody.length),
    },
    body: multipartBody,
  })

  if (!res.ok) {
    const text = await res.text()
    console.log(`    IMG FAIL  ${localPath}: ${res.status} — ${text.slice(0, 150)}`)
    return undefined
  }

  const data = (await res.json()) as GhostImageResponse
  const imageUrl = data.images?.[0]?.url
  if (imageUrl) {
    console.log(`    IMG OK    ${localPath} → ${imageUrl}`)
  }
  return imageUrl
}

// ── Mobiledoc helpers ────────────────────────────────────────────────────

/** Wrap HTML content in a Ghost mobiledoc HTML card. */
function htmlToMobiledoc(html: string): string {
  return JSON.stringify({
    version: "0.3.1",
    ghostVersion: "4.0",
    markups: [],
    atoms: [],
    cards: [["html", { html }]],
    sections: [[10, 0]],
  })
}

// ── Markdown parsing ─────────────────────────────────────────────────────

interface ParsedPost {
  slug: string
  title: string
  date: string
  description: string
  category: string
  img: string
  featured: boolean
  author: string
  authorTitle: string
  videoUrl?: string
  htmlContent: string
}

function parseMarkdownFile(filePath: string): ParsedPost {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const slug = path.basename(filePath).replace(/\.(mdx|md)$/, "")

  // Convert markdown to HTML
  const htmlContent = marked.parse(content, { async: false }) as string

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    category: data.categories || "Updates",
    img: (data.img || "").replace(/^["']|["']$/g, "").trim(),
    featured: data.featured || false,
    author: data.author || "STRATO Team",
    authorTitle: data.authorTitle || "",
    videoUrl: data.videoUrl,
    htmlContent,
  }
}

// ── Migration ────────────────────────────────────────────────────────────

async function migratePost(post: ParsedPost): Promise<void> {
  const tags: Array<{ name: string }> = [{ name: post.category }]
  if (post.videoUrl) {
    tags.push({ name: `#video-url:${post.videoUrl}` })
  }

  // Extract audio URL from content if present
  const audioMatch = post.htmlContent.match(/<audio[^>]*src="([^"]+)"/)
  if (audioMatch) {
    tags.push({ name: `#audio-url:${audioMatch[1]}` })
  }

  // Upload feature image to Ghost
  let featureImage: string | undefined
  if (post.img) {
    featureImage = await uploadImage(post.img)
  }

  // For video posts, prepend the video iframe to the HTML content
  let finalHtml = post.htmlContent
  if (post.videoUrl) {
    const videoEmbed = `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-bottom:1.5em;"><iframe src="${post.videoUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:8px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    finalHtml = videoEmbed + finalHtml
  }

  const ghostPost = {
    posts: [
      {
        title: post.title,
        slug: post.slug,
        mobiledoc: htmlToMobiledoc(finalHtml),
        feature_image: featureImage || undefined,
        custom_excerpt: post.description
          ? post.description.length > 300
            ? post.description.slice(0, 297) + "..."
            : post.description
          : undefined,
        published_at: new Date(post.date).toISOString(),
        featured: post.featured,
        status: "published" as const,
        tags,
      },
    ],
  }

  try {
    await ghostAdminJson<GhostPostResponse>("POST", "posts", ghostPost)
    console.log(`  OK    ${post.slug}`)
  } catch (err) {
    console.error(`  FAIL  ${post.slug}: ${err}`)
  }
}

async function main() {
  // Step 1: Delete all existing migrated posts
  console.log("Fetching existing Ghost posts...")
  const existing = await getExistingPosts()
  console.log(`Found ${existing.length} existing posts in Ghost.`)

  if (existing.length > 0) {
    console.log("Deleting existing posts...")
    for (const post of existing) {
      try {
        await deletePost(post.id)
        console.log(`  DEL   ${post.slug}`)
      } catch (err) {
        console.error(`  FAIL  deleting ${post.slug}: ${err}`)
      }
    }
    console.log()
  }

  // Step 2: Migrate all posts
  const dirs = [
    { dir: path.join(process.cwd(), "content/blog"), label: "Blog" },
    { dir: path.join(process.cwd(), "content/video"), label: "Video" },
  ]

  for (const { dir, label } of dirs) {
    console.log(`── Migrating ${label} posts from ${dir} ──`)
    if (!fs.existsSync(dir)) {
      console.log(`  Directory not found, skipping.\n`)
      continue
    }

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    console.log(`  Found ${files.length} files.\n`)

    for (const file of files) {
      const post = parseMarkdownFile(path.join(dir, file))
      await migratePost(post)
    }
    console.log()
  }

  console.log("Migration complete.")
}

main().catch((err) => {
  console.error("Migration failed:", err)
  process.exit(1)
})
