import Link from "next/link"
import type { Post } from "@/lib/blog-constants"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#d1d5db]">
        {post.img && (
          <img
            src={post.img}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-bold text-[#1a1a2e] transition-colors group-hover:text-[#243486] md:text-base text-balance">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-xs text-[#6b6b7b] md:text-sm leading-relaxed">
          {post.description}
        </p>
        <span className="mt-2.5 inline-block rounded-full bg-[#f0f1f5] px-3 py-1 text-xs font-medium text-[#555]">
          {post.categories}
        </span>
      </div>
    </Link>
  )
}
