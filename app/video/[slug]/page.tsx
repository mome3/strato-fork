import { redirect } from "next/navigation"
import { getAllPosts } from "@/lib/posts"

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts
    .filter((p) => p.categories === "Videos")
    .map((post) => ({ slug: post.slug }))
}

export default async function VideoPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/blog/${slug}`)
}
