import type { Post } from "./blog-constants"
import type { TeamMember } from "./team-data"
import { EXTERNAL_LINKS } from "./external-links"

export const SITE_URL = "https://strato.nexus"
export const SITE_NAME = "STRATO"
export const SITE_DESCRIPTION =
  "Diverse asset classes, one platform. From crypto to precious metals to tokenized securities—investing made simple for everyone."

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/strato-logo.svg"),
    description: SITE_DESCRIPTION,
    sameAs: [
      EXTERNAL_LINKS.twitter,
      EXTERNAL_LINKS.linkedin,
      EXTERNAL_LINKS.youtube,
      EXTERNAL_LINKS.github,
      EXTERNAL_LINKS.telegram,
    ],
  }
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  }
}

export function articleJsonLd(post: Post, basePath: string = "/blog") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.img ? absoluteUrl(post.img) : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/strato-logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`${basePath}/${post.slug}`),
    },
  }
}

export function videoObjectJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: post.title,
    description: post.description,
    thumbnailUrl: post.img ? absoluteUrl(post.img) : undefined,
    uploadDate: post.date,
    ...(post.videoUrl ? { embedUrl: post.videoUrl } : {}),
  }
}

export function personJsonLd(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.jobTitle,
    description: member.summary,
    image: member.image ? absoluteUrl(member.image) : undefined,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    sameAs: member.links
      ? Object.values(member.links).filter(Boolean)
      : undefined,
  }
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}
