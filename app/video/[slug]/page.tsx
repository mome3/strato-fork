import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { isGhostConfigured } from "@/lib/ghost-client"

export const dynamicParams = false
export const dynamic = "force-static"
const GHOST_PLACEHOLDER_SLUG = "__ghost_unconfigured__"

export async function generateStaticParams() {
  if (!isGhostConfigured()) {
    return [{ slug: GHOST_PLACEHOLDER_SLUG }]
  }

  const posts = await getAllPosts()
  const videoPosts = posts.filter((p) => p.categories === "Videos")

  if (videoPosts.length === 0) {
    return [{ slug: GHOST_PLACEHOLDER_SLUG }]
  }

  return videoPosts.map((post) => ({ slug: post.slug }))
}

export default async function VideoPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === GHOST_PLACEHOLDER_SLUG) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center">
        <p>No Ghost-backed video redirects were generated for this build.</p>
      </main>
    )
  }

  const redirectPath = `/blog/${slug}`

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${redirectPath}`} />
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center">
        <p>
          Redirecting to{" "}
          <Link href={redirectPath} className="text-[#243486] underline">
            {redirectPath}
          </Link>
          .
        </p>
      </main>
    </>
  )
}
