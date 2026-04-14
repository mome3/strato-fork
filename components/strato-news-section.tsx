"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useTranslation } from "@/lib/i18n"
import type { Post } from "@/lib/blog-constants"

interface StratoNewsSectionProps {
  posts: Pick<Post, "slug" | "title" | "description" | "img">[]
}

export function StratoNewsSection({ posts }: StratoNewsSectionProps) {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  return (
    <section ref={ref} className="w-full bg-white pt-12 md:pt-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div
          className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
          style={revealStyle(visible, 0)}
        >
          <h2 className="text-4xl font-semibold leading-tight text-[#1d2e86] lg:text-5xl">
            {t("news.heading")}
          </h2>
          <Link
            href="/blog"
            className="group flex items-center gap-1 text-sm font-medium text-[#1a1a2e] transition-colors hover:text-[#1d2e86]"
          >
            {t("news.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
              style={revealStyle(visible, 100 + index * 60)}
            >
              {/* Thumbnail */}
              <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#d1d5db]">
                {article.img && (
                  <img
                    src={article.img}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="text-balance text-sm font-bold leading-snug text-[#1a1a2e] transition-colors group-hover:text-[#1d2e86] md:text-base">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#6b6b7b] md:text-sm">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
