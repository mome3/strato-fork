"use client"

import { useEffect, useRef, useState } from "react"
import lottie, { type AnimationItem } from "lottie-web"
import { Navbar } from "./navbar"
import { HighlightBanner } from "./highlight-banner"
import { revealStyle } from "@/hooks/use-reveal"
import { EXTERNAL_LINKS } from "@/lib/external-links"

function isIPhone() {
  if (typeof navigator === "undefined") return false
  return /iPhone|iPod/i.test(navigator.userAgent)
}

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [heroHeight, setHeroHeight] = useState<string>("100dvh")
  const lottieRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!lottieRef.current) return
    animRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/hero.json",
    })
    return () => {
      if (animRef.current) {
        animRef.current.destroy()
        animRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // iPhone-only: lock hero height to window.outerHeight (covers glass chrome area)
  // Elsewhere: use 100dvh.
  useEffect(() => {
    if (!isIPhone()) {
      setHeroHeight("100dvh")
      return
    }

    const update = () => setHeroHeight(`${window.outerHeight}px`)

    update()
    window.addEventListener("resize", update)
    window.addEventListener("orientationchange", update)

    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("orientationchange", update)
    }
  }, [])

  return (
    <section
      className="relative z-[5] w-full overflow-hidden rounded-b-[32px] bg-[#f9f9f9] pb-[32px]"
      style={{ height: heroHeight }}
    >
      {/* Background Artwork */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-auto overflow-hidden rounded-b-[32px] opacity-100">
        <img
          src="/background-artwork-mobile.svg"
          alt=""
          className="h-full w-auto object-cover md:hidden"
        />
        <img
          src="/background-artwork.svg"
          alt=""
          className="hidden h-full w-auto object-cover md:block"
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col px-4 md:px-8 lg:px-12">
        {/* Navbar */}
        <div className="relative z-10 pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        {/* Hero Layout */}
        <div
          className="
            flex flex-1 flex-col

            lg:flex-row lg:items-center lg:justify-between

            [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:flex-row
            [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:items-center
            [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:justify-between
          "
        >
          {/* Hero Copy */}
          <div
            className="
              flex-none
              pt-16 md:pt-16
              flex flex-col items-center text-center

              lg:pt-0 lg:items-start lg:text-left

              [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:pt-0
              [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:items-start
              [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:text-left
            "
            style={revealStyle(visible, 100)}
          >
            <h1 className="text-balance text-6xl font-bold leading-[1.05] tracking-tight text-[#243486] sm:text-6xl lg:text-8xl">
              Stability
              <br />
              Meets
              <br />
              Opportunity
            </h1>

            <p
              className="mt-4 max-w-lg font-regular text-lg text-[#000000] lg:max-w-lg"
              style={revealStyle(visible, 200)}
            >
              Diverse asset classes, one platform. From crypto to precious metals to tokenized securities—investing made simple for everyone.
            </p>

            <a
              href={EXTERNAL_LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#243486] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a276a]"
              style={revealStyle(visible, 300)}
            >
              Go to App
            </a>
          </div>

          {/* Hero Media */}
          <div
            className="
              pointer-events-none flex-1 min-h-0
              flex items-center justify-center

              lg:flex-initial
              [@media(min-aspect-ratio:1/1)_and_(min-height:500px)]:flex-initial
            "
            style={revealStyle(visible, 200)}
          >
            {/* Container size stays fixed per breakpoint */}
            <div className="relative flex h-[280px] w-[280px] items-center justify-center overflow-visible rounded-2xl md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px]">
              {/* Always-centered scaled layer */}
              <div
                ref={lottieRef}
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center scale-[0.75] lg:scale-[1]"
                style={{ width: "1200px", height: "1200px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating highlight banner at bottom of hero */}
      <HighlightBanner />
    </section>
  )
}
