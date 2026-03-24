import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/blog/featured-carousel"
import { RecentPosts } from "@/components/blog/recent-posts"
import { getVideoPosts } from "@/lib/posts"
import { getBlurDataURL } from "@/lib/blur"
import type { Post } from "@/lib/blog-constants"

export const metadata = {
  title: "Videos",
  description:
    "Watch the latest videos, talks, and discussions from the STRATO team.",
  alternates: {
    canonical: "/video",
  },
  openGraph: {
    title: "Videos - STRATO",
    description: "Watch the latest videos, talks, and discussions from the STRATO team.",
  },
}

async function withBlur(posts: Post[]): Promise<Post[]> {
  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      blurDataURL: await getBlurDataURL(post.img),
    }))
  )
}

export default async function VideoPage() {
  const allPosts = await withBlur(getVideoPosts())
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Hero / dark navy section ─────────────────────────────── */}
      <div className="bg-[#0c1c60] rounded-b-[2.5rem]">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          {/* Navbar */}
          <div className="pt-4 md:pt-6 lg:pt-8">
            <Navbar />
          </div>

          {/* Videos heading */}
          <div className="mt-10 mb-10">
            <h1 className="text-5xl font-bold text-white md:text-6xl">Videos</h1>
          </div>

          {/* Featured carousel */}
          {featuredPosts.length > 0 && (
            <div className="pb-14">
              <FeaturedCarousel posts={featuredPosts} basePath="/video" />
            </div>
          )}
        </div>
      </div>

      {/* ── Recent Posts / white section ─────────────────────────── */}
      <div className="overflow-hidden rounded-b-[2.5rem] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <RecentPosts posts={allPosts} basePath="/video" availableCategories={["All"]} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
