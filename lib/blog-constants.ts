export type Category = "Updates" | "Guides" | "Community" | "Videos"

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  categories: Category
  img: string
  featured: boolean
  blurDataURL?: string
  author: string
  authorTitle: string
  videoUrl?: string
  content: string
}

export const categories: Category[] = [
  "Updates",
  "Guides",
  "Community",
  "Videos",
]
