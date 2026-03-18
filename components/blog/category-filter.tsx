"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { categories } from "@/lib/blog-constants"

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category") || "All"

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "All") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    params.delete("page")
    router.push(`/blog?${params.toString()}`)
  }

  const allCategories = ["All", ...categories]

  return (
    <div className="flex flex-wrap items-center gap-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === category
              ? "bg-[#4866f7] text-white"
              : "bg-[#f0f1f5] text-[#555] hover:bg-[#e2e4eb]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
