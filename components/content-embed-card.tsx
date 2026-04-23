"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { teamMembers } from "@/lib/team-data"

type ContentEmbedCardProps = {
  src?: string
  img?: string
  url?: string
  title?: string
  description?: string
  site?: string
  author?: string
  date?: string
  alt?: string
  thumbfit?: string
  thumbzoom?: string
}

function isExternalUrl(value: string): boolean {
  return /^https?:\/\//i.test(value)
}

function isLocalVideoSource(value: string): boolean {
  const lower = value.toLowerCase()
  const isVideoFile = lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg")
  return isVideoFile && !isExternalUrl(value) && !lower.includes("youtube.com") && !lower.includes("vimeo.com")
}

function formatDate(value?: string): string | null {
  if (!value) return null
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function ContentEmbedCard({
  src,
  img,
  url,
  title,
  description,
  site,
  author,
  date,
  alt,
  thumbfit,
  thumbzoom,
}: ContentEmbedCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const href = url || src || "#"
  const localVideo = src ? isLocalVideoSource(src) : false
  const formattedDate = formatDate(date)
  const matchedAuthor = useMemo(
    () => teamMembers.find((member) => member.name === author),
    [author]
  )
  const thumbnailFit = thumbfit || "cover"
  const thumbnailZoom = thumbzoom || "1"

  if (src) {
    return (
      <div className="my-6 overflow-hidden rounded-2xl border border-[#dde2ea] bg-white shadow-sm">
        <div className="relative aspect-video w-full overflow-hidden bg-[#0f172a]">
          {localVideo ? (
            <video
              className="h-full w-full"
              src={src}
              controls
              preload="none"
              poster={img || undefined}
            />
          ) : img && !iframeLoaded ? (
            <button
              type="button"
              onClick={() => setIframeLoaded(true)}
              className="group relative block h-full w-full cursor-pointer bg-black"
              aria-label={title ? `Play ${title}` : "Play embedded video"}
            >
              <img
                src={img}
                alt={alt || title || "Embedded content thumbnail"}
                className="h-full w-full"
                style={{
                  objectFit: thumbnailFit as "cover" | "contain" | "fill" | "none" | "scale-down",
                  transform: `scale(${thumbnailZoom})`,
                }}
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-red-600/90 shadow-lg">
                <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[18px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
              </div>
            </button>
          ) : (
            <iframe
              className="h-full w-full"
              src={src}
              title={title || "Embedded content"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>

        <div className="px-5 py-4">
          {title && (
            <a
              href={href}
              target={isExternalUrl(href) ? "_blank" : undefined}
              rel={isExternalUrl(href) ? "noopener noreferrer" : undefined}
              className="not-prose no-underline"
            >
              <div className="text-lg font-semibold leading-snug text-[#1a1a2e] hover:text-[#243486]">
                {title}
              </div>
            </a>
          )}

          {(author || formattedDate) && (
            <div className="mt-2 text-sm text-[#667085]">
              {author && (
                <>
                  <span>by </span>
                  {matchedAuthor ? (
                    <Link
                      href={`/team/${matchedAuthor.slug}`}
                      className="font-medium text-[#243486] no-underline hover:text-[#1a1a2e]"
                    >
                      {author}
                    </Link>
                  ) : (
                    <span className="font-medium text-[#1a1a2e]">{author}</span>
                  )}
                </>
              )}
              {author && formattedDate && <span>, </span>}
              {formattedDate && <span>{formattedDate}</span>}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#dde2ea] bg-white shadow-sm">
      {(img || title) && (
        <a
          href={url || "#"}
          target={url && isExternalUrl(url) ? "_blank" : undefined}
          rel={url && isExternalUrl(url) ? "noopener noreferrer" : undefined}
          className="block no-underline"
        >
          {img && (
            <div className="overflow-hidden">
              <img
                src={img}
                alt={alt || title || url || "Embedded content"}
                className="max-h-[320px] w-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          {title && (
            <div className="px-5 pb-2 pt-4 text-lg font-semibold leading-snug text-[#1a1a2e] hover:text-[#243486]">
              {title}
            </div>
          )}
        </a>
      )}

      <div className="px-5 pb-5 pt-2">
        {description && (
          <div className="mb-3 text-[15px] leading-7 text-[#475467]">
            {description}
          </div>
        )}

        {site && (
          <div className="mb-2 text-sm text-[#667085]">
            {isExternalUrl(site) ? (
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#243486] no-underline hover:text-[#1a1a2e]"
              >
                {site}
              </a>
            ) : (
              <span>{site}</span>
            )}
          </div>
        )}

        {(author || formattedDate) && (
          <div className="text-sm text-[#667085]">
            {author && (
              <>
                <span>by </span>
                {matchedAuthor ? (
                  <Link
                    href={`/team/${matchedAuthor.slug}`}
                    className="font-medium text-[#243486] no-underline hover:text-[#1a1a2e]"
                  >
                    {author}
                  </Link>
                ) : (
                  <span className="font-medium text-[#1a1a2e]">{author}</span>
                )}
              </>
            )}
            {author && formattedDate && <span>, </span>}
            {formattedDate && <span>{formattedDate}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
