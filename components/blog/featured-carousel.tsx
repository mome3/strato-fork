"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/lib/blog-constants"

interface FeaturedCarouselProps {
  posts: Post[]
}

export function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  useEffect(() => {
    const interval = setInterval(advance, 6000)
    return () => clearInterval(interval)
  }, [advance])

  if (posts.length === 0) return null

  const current = posts[activeIndex]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Cover image */}
        <Link
          href={`/blog/${current.slug}`}
          className="group block w-full lg:w-3/5"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/10">
            {current.img && (
              <Image
                src={current.img}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                placeholder={current.blurDataURL ? "blur" : "empty"}
                blurDataURL={current.blurDataURL}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
              />
            )}
          </div>
        </Link>

        {/* Info */}
        <div className="flex flex-col justify-center lg:w-2/5">
          {/* Category badge */}
          <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
            {current.categories}
          </span>

          <Link href={`/blog/${current.slug}`}>
            <h2 className="text-2xl font-bold leading-snug text-white transition-colors hover:text-white/80 md:text-3xl text-balance">
              {current.title}
            </h2>
          </Link>

          <div className="mt-5">
            <p className="text-sm font-semibold text-white">
              By {current.author}
            </p>
            {current.authorTitle && (
              <p className="mt-0.5 text-sm text-white/60">
                {current.authorTitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      {posts.length > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                ? "w-7 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
