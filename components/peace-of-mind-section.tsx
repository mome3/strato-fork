"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FeatureCard } from "./feature-card"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useMotionValue } from "framer-motion"

const cards = [
  {
    title: "Hardened Architecture",
    subtitle:
      "Audited, high-performance rails built for moving value. Less complexity, more reliability.",
    bgColor: "#E5E1FF",
    illustration: "/cards/card-4-static.svg",
    illustrationScale: 1.1,
    lottieIn: "/lotties/card-04-in.json",
    lottieLoop: "/lotties/card-04-loop.json",
  },
  {
    title: "You Hold The Keys",
    subtitle:
      "STRATO is non-custodial. You stay in control of your assets at all times.",
    bgColor: "#DDF7B8",
    illustration: "/cards/card-5-static.svg",
    illustrationScale: 1.1,
    lottieIn: "/lotties/card-05-in.json",
    lottieLoop: "/lotties/card-05-loop.json",
  },
  {
    title: "Earn Rewards",
    subtitle:
      "Earn points when you lend, borrow, or provide liquidity. Use the platform and earn along the way.",
    bgColor: "#CFF0FF",
    illustration: "/cards/card-6-static.svg",
    illustrationScale: 1.25,
    lottieLoop: "/lotties/card-06-loop.json",
  },
  {
    title: "Verify Everything",
    subtitle:
      "Loans, collateral, and payouts are visible on-chain. Check it in real time: no trust required.",
    bgColor: "#F2D8D8",
    illustration: "/cards/card-7-static.svg",
    illustrationScale: 1.1,
    lottieLoop: "/lotties/card-07-loop.json",
  },
]

export function PeaceOfMindSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const alignRef = useRef<HTMLDivElement>(null)
  const [dynamicPadding, setDynamicPadding] = useState(16)
  const { ref: sectionRef, visible } = useReveal()

  // Motion value that mirrors carousel scrollLeft
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

  // Update carouselScrollX from native scroll (does not block scrolling)
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      carouselScrollX.set(el.scrollLeft)
    }

    // init
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
      className="relative z-[2] -mt-[32px] w-full bg-[#243486]"
    >
      <div className="py-16 lg:py-24">
        <div className="mx-auto mb-10 w-full max-w-[1280px] px-4 md:px-8 lg:px-12">
          <div ref={alignRef} className="pointer-events-none h-0 w-0" />
          <h2
            className="w-full text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={revealStyle(visible, 0)}
          >
            Built for peace of mind
          </h2>
          <p
            className="mt-2 w-full text-sm leading-relaxed text-white/70 md:text-base lg:text-lg"
            style={revealStyle(visible, 100)}
          >
            We stripped away the complexity of crypto and kept the security. No
            black boxes, no custodial risk.
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
