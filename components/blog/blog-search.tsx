"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

export function BlogSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (query.trim()) {
      params.set("q", query.trim())
    } else {
      params.delete("q")
    }
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
        <Search size={15} className="shrink-0 text-white/60" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-28 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
      </div>
    </form>
  )
}
