// lib/team-content.ts

import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

const TEAM_CONTENT_DIR = path.join(process.cwd(), "content", "team")

export async function getMemberMdxBySlug(
  slug: string
): Promise<{ mdxSource: string } | null> {
  try {
    const fullPath = path.join(TEAM_CONTENT_DIR, `${slug}.mdx`)
    const raw = await fs.readFile(fullPath, "utf8")
    const parsed = matter(raw)
    return { mdxSource: parsed.content }
  } catch {
    // If the file doesn't exist yet, treat as "no full bio available"
    return null
  }
}