import "server-only"
import type { Category, Post } from "./blog-constants"
import { getGhostPosts } from "./ghost-client"
import { mapGhostPosts } from "./ghost-mapper"

export type { Category, Post }
export { categories } from "./blog-constants"

export async function getAllPosts(): Promise<Post[]> {
  const ghostPosts = await getGhostPosts()
  return mapGhostPosts(ghostPosts)
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.featured)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getPostsByCategory(category: Category): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.categories === category)
}

export async function getNonVideoPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.categories !== "Videos")
}

export async function getVideoPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.categories === "Videos")
}
