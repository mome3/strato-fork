"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { EXTERNAL_LINKS } from "@/lib/external-links"

// ─── Feature Cards Data ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "/get-started/hard-assets.png",
    title: "Access Hard Assets",
    description: "Gold, silver, crypto, and stocks",
    iconSize: 100, // customizable size per feature
  },
  {
    icon: "/get-started/bridge.png",
    title: "Bridge Fast",
    description: "It only takes about 15 minutes",
    iconSize: 130,
  },
  {
    icon: "/get-started/free-usage.png",
    title: "Free Usage",
    description: "10 gas-free transaction vouchers",
    iconSize: 100,
  },
  {
    icon: "/get-started/low-cost.png",
    title: "Low Cost",
    description: "Only ~$0.01 per transaction",
    iconSize: 70,
  },
]

// ─── Carousel Cards Data ───────────────────────────────────────────────────────

const CAROUSEL_CARDS = [
  {
    id: "fund",
    title: "Get 10 Free Transactions When You Bridge",
    description:
      "Bridge crypto from Ethereum, Base, or Linea to STRATO. Choose your asset on Deposits, confirm in MetaMask, and receive it in about 15 minutes or less.",
    secondaryText:
      "No bridge fees. Pay Ethereum gas plus a $0.10 STRATO network fee, and get 10 gas-free transactions per bridge.",
    primaryCta: { label: "Bridge Now", href: `${EXTERNAL_LINKS.app}dashboard/deposits` },
    secondaryCta: { label: "Full Bridge Guide", href: `${EXTERNAL_LINKS.docs}scenarios/first-time-user/` },
    screenshot: "/get-started/card-01-fund.png",
  },
  {
    id: "borrow",
    title: "Supply, Borrow, Go",
    description:
      "Supply ETHST as collateral on Borrow and mint USDST at up to 75% LTV. Track your Health Factor in real time.",
    secondaryText:
      "Use USDST like any stablecoin: swap it, LP with it, or hold it. Interest is ~5% variable APR, and you repay on your schedule.",
    primaryCta: { label: "Start Borrowing", href: `${EXTERNAL_LINKS.app}dashboard/borrow` },
    secondaryCta: { label: "First-Time User Guide", href: `${EXTERNAL_LINKS.docs}scenarios/first-time-user/` },
    screenshot: "/get-started/card-02-borrow.png",
  },
  {
    id: "earn",
    title: "Yield Maxxing on STRATO",
    description:
      "Borrow or mint USDST against collateral, then put it to work. Earn passive yield in the savings vault, provide liquidity across six reward-earning pools, or combine strategies for higher returns while keeping exposure to your original collateral.",
    secondaryText:
      "Check Earn for current APYs and Rewards for active point opportunities.",
    table: [
      { source: "LP trading", estimated: "~10%" },
      { source: "STRATO Reward", estimated: "Variable" },
      { source: "Sky savings rate", estimated: "Variable" },
      { source: "Borrow Cost", estimated: "~5%" },
    ],
    primaryCta: { label: "Provide Liquidity", href: `${EXTERNAL_LINKS.app}dashboard/earn` },
    secondaryCta: { label: "Full Yield Maxxing Guide", href: `${EXTERNAL_LINKS.docs}scenarios/maximize-yield` },
    screenshot: "/get-started/card-03-earn.png",
  },
]

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="relative w-full pt-4 md:pt-6 lg:pt-8">
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        <Navbar />

        <div className="pb-12 pt-12 md:pb-16 md:pt-20" style={revealStyle(visible, 100)}>
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#4866f7" }}>
            Get Started with HardFi
          </span>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#243486] md:text-5xl lg:text-6xl">
            The easiest way to enable gold and silver to work for you
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-medium text-[#1a1a2e]/80">
            STRATO is the one-stop shop to manage a balanced DeFi portfolio across gold, silver, and stocks.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Rewards Badge ────────────────────────────────────────────────────────────

function RewardsBadge() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="relative mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
      <div
        className="rounded-3xl bg-[#243486] px-6 py-6 md:px-8"
        style={revealStyle(visible, 0)}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 flex-shrink-0 fill-[#a4daff] text-[#a4daff]" />
          <span className="text-lg font-bold uppercase tracking-wider" style={{ color: "#a4daff" }}>
            STRATO Rewards Season 2
          </span>
        </div>
        <p className="mt-3 w-full text-sm leading-relaxed text-white/90">
          Rewards are running on STRATO now. 1% of the total token supply up for grabs.
          Ten emission-earning activities span liquidity provision, CDP minting, savings, bridging, and vault deposits. Every meaningful action on the platform earns Reward Points before TGE.
        </p>
        <div className="mt-4">
          <a
            href="https://strato.nexus/blog/announcing-strato-rewards-season-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#a4daff" }}
          >
            Start Earning <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Feature Card (with framer-motion hover, same as hardest-assets-section) ──

function FeatureCard({
  feature,
  visible,
  delay,
}: {
  feature: (typeof FEATURES)[number]
  visible: boolean
  delay: number
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 1 })

  const size = feature.iconSize ?? 100

  return (
    <div
      className="flex flex-col items-center text-center"
      style={revealStyle(visible, delay)}
    >
      {/* Fixed-size container so all text labels align at the same vertical position */}
      <div className="mb-0 flex h-[100px] w-[100px] items-center justify-center">
        <motion.div
          style={{ x: springX, y: springY }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            mouseX.set(((e.clientX - centerX) / rect.width) * 12)
            mouseY.set(((e.clientY - centerY) / rect.height) * 12)
          }}
          onMouseLeave={() => {
            mouseX.set(0)
            mouseY.set(0)
          }}
          whileHover={{ scale: 1.01, transition: { duration: 0.15, ease: "easeOut" } }}
        >
          <img
            src={feature.icon}
            alt=""
            style={{ width: size, height: size }}
            className="object-contain"
          />
        </motion.div>
      </div>
      <h3 className="text-sm font-semibold text-[#243486] md:text-base">
        {feature.title}
      </h3>
      <p className="mt-1 text-xs text-[#6b6b7b] md:text-sm">
        {feature.description}
      </p>
    </div>
  )
}

// ─── Features Grid ────────────────────────────────────────────────────────────

function FeaturesGrid() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            visible={visible}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Carousel Tabs ────────────────────────────────────────────────────────────

function CarouselTabs({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number
  setActiveIndex: (index: number) => void
}) {
  const tabs = [
    { label: "1. Fund Your Account" },
    { label: "2. Borrow Against Your Assets" },
    { label: "3. Earn With Your Position" },
  ]

  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-6 md:py-2.5 ${activeIndex === index
              ? "bg-[#243486] text-white"
              : "bg-transparent text-[#243486] hover:bg-[#243486]/10"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Big Card Carousel ────────────────────────────────────────────────────────

function BigCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const { ref, visible } = useReveal()

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / CAROUSEL_CARDS.length
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
    setActiveIndex(index)
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.scrollWidth / CAROUSEL_CARDS.length
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < CAROUSEL_CARDS.length) {
        setActiveIndex(newIndex)
      }
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [activeIndex])

  return (
    <section ref={ref} className="py-8 md:py-12" style={revealStyle(visible, 0)}>
      <CarouselTabs activeIndex={activeIndex} setActiveIndex={scrollToCard} />

      <div className="relative mt-8">
        {/* Navigation arrows - desktop only */}
        <button
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 disabled:opacity-50 md:left-4 lg:block"
          disabled={activeIndex === 0}
          aria-label="Previous card"
        >
          <ChevronLeft className="h-6 w-6 text-[#243486]" />
        </button>

        <button
          onClick={() => scrollToCard(Math.min(CAROUSEL_CARDS.length - 1, activeIndex + 1))}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 disabled:opacity-50 md:right-4 lg:block"
          disabled={activeIndex === CAROUSEL_CARDS.length - 1}
          aria-label="Next card"
        >
          <ChevronRight className="h-6 w-6 text-[#243486]" />
        </button>

        {/* Cards container */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-4 md:px-8 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CAROUSEL_CARDS.map((card, index) => (
            <div
              key={card.id}
              className="w-full flex-shrink-0 snap-center px-2 md:px-4"
              style={{ maxWidth: "calc(100vw - 32px)" }}
            >
              <div className="mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-[#1d2c6d]" style={{ minHeight: 520 }}>
                <div className="flex flex-col lg:flex-row" style={{ minHeight: 520 }}>
                  {/* Text Panel */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8 lg:p-10 lg:max-w-[50%]">
                    {/* Top: title + paragraphs */}
                    <div>
                      <h2 className="text-xl font-bold md:text-3xl" style={{ color: "#a4daff" }}>
                        {card.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/90 md:mt-4 md:text-base">
                        {card.description}
                      </p>
                      {card.secondaryText && (
                        <p className="mt-3 text-sm leading-relaxed text-white/90 md:mt-4 md:text-base">
                          {card.secondaryText}
                        </p>
                      )}
                      {card.table && (
                        <div className="mt-3 hidden rounded-lg bg-white/10 p-4 md:mt-4 md:block">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="font-semibold text-white">Source</div>
                            <div className="font-semibold text-white">Estimated APR</div>
                            {card.table.map((row) => (
                              <div key={row.source} className="contents">
                                <div className="text-white/80">{row.source}</div>
                                <div className="text-white/80">{row.estimated}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Bottom: CTAs — ghost on mobile, filled pills on desktop, always vertical stack */}
                    <div className="mt-4 flex flex-col items-end gap-2 md:mt-6">
                      {/* Primary — mobile ghost */}
                      <a
                        href={card.primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 md:hidden"
                        style={{ color: "#a4daff" }}
                      >
                        {card.primaryCta.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      {/* Primary — desktop pill */}
                      <a
                        href={card.primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
                        style={{ backgroundColor: "#4866f7" }}
                      >
                        {card.primaryCta.label} <ArrowRight className="h-4 w-4" />
                      </a>
                      {/* Secondary — mobile ghost */}
                      <a
                        href={card.secondaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-opacity hover:opacity-70 md:hidden"
                      >
                        {card.secondaryCta.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      {/* Secondary — desktop pill */}
                      <a
                        href={card.secondaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 md:inline-flex"
                        style={{ color: "#1d2c6d" }}
                      >
                        {card.secondaryCta.label} <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Image Panel — fills remaining space, screenshot fills it entirely */}
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={card.screenshot}
                      alt={`${card.title} interface`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {CAROUSEL_CARDS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? "bg-[#243486]" : "bg-[#243486]/30"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Innovation Section ───────────────────────────────────────────────────────

function InnovationSection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1" style={revealStyle(visible, 0)}>
          <h2 className="text-3xl font-bold leading-tight text-[#243486] md:text-4xl">
            Over 10 years of Innovation in Crypto
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#1a1a2e]/80">
            STRATO (formerly BlockApps) was the first to issue RWAs on Ethereum in 2017, and has worked with governments, startups, and enterprises like Microsoft to build tokenized real-world infrastructure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#1a1a2e]/80">
            In collaboration with Founding members of the Ethereum Enterprise Alliance, the team now brings the hardest assets—gold and silver—to users globally through STRATO.
          </p>
          <a
            href="https://app.strato.nexus/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#243486] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a2761]"
          >
            Try STRATO
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex-1" style={revealStyle(visible, 100)}>
          <img
            src="/get-started/eth-alliance.png"
            alt="Ethereum Enterprise Alliance founding members"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Main Page Content ────────────────────────────────────────────────────────

export function GetStartedPageContent() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero + Rewards + Features + BigCards share one block — artwork fills this block exactly like the homepage */}
      <div className="relative w-full overflow-hidden rounded-b-[32px] bg-[#f9f9f9]">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-auto overflow-hidden opacity-100">
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
        <HeroSection />
        <RewardsBadge />
        <FeaturesGrid />
        <BigCardCarousel />
      </div>
      <InnovationSection />
      <Footer />
    </div>
  )
}