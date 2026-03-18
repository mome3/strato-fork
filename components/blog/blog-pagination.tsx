"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  if (totalPages <= 1) return null

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page <= 1) {
      params.delete("page")
    } else {
      params.set("page", String(page))
    }
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex h-9 w-9 items-center justify-center rounded-full text-[#555] transition-colors hover:bg-[#f0f1f5] disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-[#243486] text-white"
              : "text-[#555] hover:bg-[#f0f1f5]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-full text-[#555] transition-colors hover:bg-[#f0f1f5] disabled:opacity-30 disabled:hover:bg-transparent"
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
