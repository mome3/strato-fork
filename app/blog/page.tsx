import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/blog/featured-carousel"
import { RecentPosts } from "@/components/blog/recent-posts"
import { getNonVideoPosts } from "@/lib/posts"
import { getBlurDataURL } from "@/lib/blur"
import { categories } from "@/lib/blog-constants"
import type { Post } from "@/lib/blog-constants"

const blogCategories = ["All", ...categories.filter((c) => c !== "Videos")] as const

export const metadata = {
  title: "Blog",
  description:
    "Latest updates, guides, and community news from the STRATO team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - STRATO",
    description: "Latest updates, guides, and community news from the STRATO team.",
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

export default async function BlogPage() {
  const allPosts = await withBlur(getNonVideoPosts())
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

          {/* Blog heading */}
          <div className="mt-10 mb-10">
            <h1 className="text-5xl font-bold text-white md:text-6xl">Blog</h1>
          </div>

          {/* Featured carousel */}
          {featuredPosts.length > 0 && (
            <div className="pb-14">
              <FeaturedCarousel posts={featuredPosts} />
            </div>
          )}
        </div>
      </div>

      {/* ── Recent Posts / white section ─────────────────────────── */}
      <div className="overflow-hidden rounded-b-[2.5rem] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <RecentPosts posts={allPosts} availableCategories={blogCategories} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
