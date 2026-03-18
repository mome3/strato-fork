"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FeatureCard } from "./feature-card"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useMotionValue } from "framer-motion"

const cards = [
  {
    title: "Earn on Dollars",
    subtitle:
      "Earn up to 4.5% APY on USDST in lending markets. No lockups: access your funds anytime.",
    bgColor: "#E5E1FF",
    illustration: "/cards/card-1-static.svg",
    illustrationScale: 1,
    lottieIn: "/lotties/card-01-in.json",
    lottieLoop: "/lotties/card-01-loop.json",
  },
  {
    title: "Borrow, Don\u2019t Sell",
    subtitle:
      "Borrow stablecoins against crypto or tokenized metals in seconds. Get cash without selling your position.",
    bgColor: "#F2D8D8",
    illustration: "/cards/card-2-static.svg",
    illustrationScale: 1,
    lottieIn: "/lotties/card-02-in.json",
    lottieLoop: "/lotties/card-02-loop.json",
  },
  {
    title: "On-Chain Hard Assets",
    subtitle:
      "Move between stablecoins, tokenized Gold/Silver, and blue-chip crypto in one app. Hedge fiat risk without friction.",
    bgColor: "#CFF0FF",
    illustration: "/cards/card-3-static.svg",
    illustrationScale: 1.1,
    lottieIn: "/lotties/card-03-in.json",
    lottieLoop: "/lotties/card-03-loop.json",
  },
]

export function HardMoneySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const alignRef = useRef<HTMLDivElement>(null)
  const [dynamicPadding, setDynamicPadding] = useState(16)
  const { ref: sectionRef, visible } = useReveal()

  // Motion value that mirrors the carousel's scrollLeft
  const carouselScrollX = useMotionValue(0)

  const updatePadding = useCallback(() => {
    if (alignRef.current) {
      const rect = alignRef.current.getBoundingClientRect()
      setDynamicPadding(rect.left)
    }
  }, [])

  useEffect(() => {
    updatePadding()
    window.addEventListener("resize", updatePadding)
    return () => window.removeEventListener("resize", updatePadding)
  }, [updatePadding])

  // Keep carouselScrollX updated without interfering with native scrolling
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      carouselScrollX.set(el.scrollLeft)
    }

    // initialize
    carouselScrollX.set(el.scrollLeft)

    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [carouselScrollX])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 300
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative z-[4] -mt-[32px] w-full rounded-b-[32px] bg-[#243486] pb-[32px]"
    >
      <div className="pt-10 pb-16">
        <div className="mx-auto mb-10 w-full max-w-[1280px] px-4 md:px-8 lg:px-12">
          <div ref={alignRef} className="pointer-events-none h-0 w-0" />
          <h2
            className="w-full text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={revealStyle(visible, 0)}
          >
            Hard Money Wins
          </h2>
          <p
            className="mt-2 w-full text-sm leading-relaxed text-white/70 md:text-base lg:text-lg"
            style={revealStyle(visible, 100)}
          >
            Stop choosing between safety and growth. STRATO Nexus combines the
            stability of hard assets with the efficiency of DeFi.
          </p>
        </div>

        <div className="relative w-full" style={revealStyle(visible, 200)}>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto py-8 md:gap-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingLeft: `${dynamicPadding}px`,
              paddingRight: `${dynamicPadding}px`,
            }}
          >
            {cards.map((card, index) => (
              <div key={card.title} className="shrink-0">
                <FeatureCard
                  {...card}
                  // Provide scroll input + index so cards can vary slightly
                  carouselScrollX={carouselScrollX}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-[1280px] gap-2 px-4 md:px-8 lg:px-12">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
