import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { articleJsonLd, videoObjectJsonLd, breadcrumbJsonLd } from "@/lib/seo"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article" as const,
      title: post.title,
      description: post.description,
      images: post.img ? [{ url: post.img }] : undefined,
      article: {
        publishedTime: post.date,
        authors: [post.author],
      },
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: post.img ? [post.img] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      <JsonLd data={articleJsonLd(post, "/blog")} />
      {post.categories === "Videos" && <JsonLd data={videoObjectJsonLd(post)} />}
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />
      {/* Background artwork */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-80">
        <img
          src="/background-artwork.svg"
          alt=""
          className="h-full w-full object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Navbar */}
        <div className="pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#243486] transition-colors hover:text-[#1a1a2e]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Article */}
        <article className="mx-auto mt-8 max-w-3xl pb-16">
          {/* Meta */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[#e8eaf0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#243486]">
              {post.categories}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-[#1a1a2e] md:text-4xl text-balance">
              {post.title}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-[#6b6b7b]">
              <span className="font-semibold text-[#1a1a2e]">
                {post.author}
              </span>
              {post.authorTitle && (
                <>
                  <span className="text-[#c4c8d4]">|</span>
                  <span>{post.authorTitle}</span>
                </>
              )}
              <span className="text-[#c4c8d4]">|</span>
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Video embed for video posts */}
          {post.categories === "Videos" && post.videoUrl && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                src={post.videoUrl}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}

          {/* Cover image (non-video posts) */}
          {!(post.categories === "Videos" && post.videoUrl) && post.img && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-[#d1d5db]">
              <img
                src={post.img}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Post content */}
          <div className="mdx-content max-w-none text-[#444] leading-relaxed [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-[#1a1a2e] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1a1a2e] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#1a1a2e] [&_p]:mb-4 [&_a]:text-[#243486] [&_a]:underline hover:[&_a]:text-[#1a1a2e] [&_strong]:font-semibold [&_strong]:text-[#1a1a2e] [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_blockquote]:border-l-4 [&_blockquote]:border-[#243486] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_code]:rounded [&_code]:bg-[#f0f1f5] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-[#1a1a2e] [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-white [&_pre_code]:bg-transparent [&_pre_code]:p-0">
            {post.contentFormat === "html" ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            )}
          </div>
        </article>
      </div>

      {/* Footer */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
