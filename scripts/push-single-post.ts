#!/usr/bin/env npx tsx
/**
 * Push a single markdown post to Ghost CMS via the Admin API.
 *
 * Usage:
 *   GHOST_URL=https://your-ghost.com GHOST_ADMIN_API_KEY=... npx tsx scripts/push-single-post.ts content/blog/my-post.md
 *
 * If a post with the same slug already exists, it will be updated (not duplicated).
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

const filePath = process.argv[2]
if (!filePath) {
  console.error("Usage: npx tsx scripts/push-single-post.ts <path-to-markdown-file>")
  process.exit(1)
}

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`)
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
    .createHmac("sha256", Buffer.from(keySecret!, "hex"))
    .update(`${header}.${payload}`)
    .digest("base64url")

  return `${header}.${payload}.${signature}`
}

// ── Ghost Admin API helpers ──────────────────────────────────────────────

async function ghostAdmin<T>(
  method: string,
  endpoint: string,
  body?: unknown
): Promise<T> {
  const token = createAdminToken()
  const url = `${GHOST_URL}/ghost/api/admin/${endpoint}`
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

interface GhostExistingPost { id: string; slug: string; updated_at: string }
interface GhostPostResponse { posts: GhostExistingPost[] }

async function findBySlug(slug: string): Promise<GhostExistingPost | undefined> {
  try {
    const data = await ghostAdmin<GhostPostResponse>(
      "GET",
      `posts/?filter=slug:${slug}&fields=id,slug,updated_at&limit=1`
    )
    return data.posts[0]
  } catch {
    return undefined
  }
}

// ── Image upload ─────────────────────────────────────────────────────────

interface GhostImageResponse { images: Array<{ url: string }> }

async function uploadImage(localPath: string): Promise<string | undefined> {
  const absPath = path.join(process.cwd(), "public", localPath)
  if (!fs.existsSync(absPath)) {
    console.log(`  IMG MISS  ${localPath} (file not found)`)
    return undefined
  }

  const token = createAdminToken()
  const url = `${GHOST_URL}/ghost/api/admin/images/upload/`
  const fileBuffer = fs.readFileSync(absPath)
  const fileName = path.basename(absPath)
  const ext = path.extname(absPath).toLowerCase()

  const mimeTypes: Record<string, string> = {
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
    ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp",
  }
  const mimeType = mimeTypes[ext] || "image/jpeg"

  const boundary = `----FormBoundary${crypto.randomBytes(16).toString("hex")}`
  const header = Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${fileName}"\r\nContent-Type: ${mimeType}\r\n\r\n`
  )
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
    console.log(`  IMG FAIL  ${localPath}: ${res.status} — ${text.slice(0, 150)}`)
    return undefined
  }

  const data = (await res.json()) as GhostImageResponse
  const imageUrl = data.images?.[0]?.url
  if (imageUrl) console.log(`  IMG OK    ${localPath} → ${imageUrl}`)
  return imageUrl
}

// ── Mobiledoc ────────────────────────────────────────────────────────────

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

// ── Main ─────────────────────────────────────────────────────────────────

async function main() {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const slug = path.basename(filePath).replace(/\.(mdx|md)$/, "")

  const htmlContent = marked.parse(content, { async: false }) as string

  const img = (data.img || "").replace(/^["']|["']$/g, "").trim()
  const videoUrl = data.videoUrl as string | undefined
  const description = (data.description || "") as string

  console.log(`Pushing post: ${slug}`)
  console.log(`  Title: ${data.title}`)

  // Upload feature image
  let featureImage: string | undefined
  if (img) featureImage = await uploadImage(img)

  // Build tags
  const tags: Array<{ name: string }> = [{ name: data.categories || "Updates" }]
  if (videoUrl) tags.push({ name: `#video-url:${videoUrl}` })

  const audioMatch = htmlContent.match(/<audio[^>]*src="([^"]+)"/)
    || htmlContent.match(/<source[^>]*src="([^"]+)"/)
  if (audioMatch) tags.push({ name: `#audio-url:${audioMatch[1]}` })

  // For video posts, prepend video iframe
  let finalHtml = htmlContent
  if (videoUrl) {
    const videoEmbed = `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-bottom:1.5em;"><iframe src="${videoUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:8px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    finalHtml = videoEmbed + finalHtml
  }

  const postBody = {
    title: data.title,
    slug,
    mobiledoc: htmlToMobiledoc(finalHtml),
    feature_image: featureImage || undefined,
    custom_excerpt: description
      ? description.length > 300 ? description.slice(0, 297) + "..." : description
      : undefined,
    published_at: new Date(data.date).toISOString(),
    featured: data.featured || false,
    status: "published" as const,
    tags,
  }

  // Check if post already exists
  const existing = await findBySlug(slug)

  if (existing) {
    console.log(`  Found existing post (${existing.id}), updating...`)
    await ghostAdmin<GhostPostResponse>("PUT", `posts/${existing.id}/`, {
      posts: [{ ...postBody, updated_at: existing.updated_at }],
    })
    console.log(`  UPDATED  ${slug}`)
  } else {
    console.log(`  Creating new post...`)
    await ghostAdmin<GhostPostResponse>("POST", `posts/`, {
      posts: [postBody],
    })
    console.log(`  CREATED  ${slug}`)
  }
}

main().catch((err) => {
  console.error("Failed:", err)
  process.exit(1)
})
