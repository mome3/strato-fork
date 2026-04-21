import type { MetadataRoute } from "next"
import { getNonVideoPosts, getVideoPosts } from "@/lib/posts"
import { teamMembers } from "@/lib/team-data"

export const dynamic = "force-static"

const SITE_URL = "https://strato.nexus"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/video`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/api-terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogPosts: MetadataRoute.Sitemap = getNonVideoPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const videoPosts: MetadataRoute.Sitemap = getVideoPosts().map((post) => ({
    url: `${SITE_URL}/video/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const teamPages: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: `${SITE_URL}/team/${member.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPosts, ...videoPosts, ...teamPages]
}
