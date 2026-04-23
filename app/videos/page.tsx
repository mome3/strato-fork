import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/blog/featured-carousel"
import { RecentPosts } from "@/components/blog/recent-posts"
import { JsonLd } from "@/components/json-ld"
import { getBlurDataURL } from "@/lib/blur"
import { breadcrumbJsonLd, webSiteJsonLd } from "@/lib/seo"
import { getLocalVideoPosts } from "@/lib/local-video-posts"
import type { Post } from "@/lib/blog-constants"

export const metadata = {
  title: "Videos - STRATO",
  description: "Watch the latest videos, talks, and discussions from the STRATO team.",
  alternates: {
    canonical: "/videos",
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

export default async function VideosPage() {
  const allPosts = await withBlur(getLocalVideoPosts())
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white font-sans">
      <JsonLd data={webSiteJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Videos", url: "/videos" },
        ])}
      />

      <div className="bg-[#0c1c60] rounded-b-[2.5rem]">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <div className="pt-4 md:pt-6 lg:pt-8">
            <Navbar />
          </div>

          <div className="mt-10 mb-10">
            <h1 className="text-5xl font-bold text-white md:text-6xl">Videos</h1>
          </div>

          {featuredPosts.length > 0 && (
            <div className="pb-14">
              <FeaturedCarousel posts={featuredPosts} basePath="/videos" />
            </div>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-b-[2.5rem] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <RecentPosts posts={allPosts} basePath="/videos" availableCategories={["All"]} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
