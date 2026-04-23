import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Post } from "./blog-constants"

const videoPostsDirectory = path.join(process.cwd(), "content/video")

function readVideoPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.(md|mdx)$/, "")
  const fullPath = path.join(videoPostsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    categories: "Videos",
    img: data.img || "",
    featured: data.featured || false,
    author: data.author || "",
    authorTitle: data.authorTitle || "",
    videoUrl: data.videoUrl || data.embed?.url || undefined,
    content,
    contentFormat: "markdown",
  }
}

export function getLocalVideoPosts(): Post[] {
  const fileNames = fs.readdirSync(videoPostsDirectory)

  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map(readVideoPostFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getLocalVideoPostBySlug(slug: string): Post | undefined {
  return getLocalVideoPosts().find((post) => post.slug === slug)
}
