import { redirect } from "next/navigation"
import { getAllPostsAsync } from "@/lib/posts"

export async function generateStaticParams() {
  const posts = await getAllPostsAsync()
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
