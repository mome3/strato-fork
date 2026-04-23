"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

export function TwitterEmbedLoader() {
  useEffect(() => {
    window.twttr?.widgets?.load()
  }, [])

  return (
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="lazyOnload"
      onLoad={() => window.twttr?.widgets?.load()}
    />
  )
}
