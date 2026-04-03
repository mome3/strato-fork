"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { EXTERNAL_LINKS } from "@/lib/external-links"

const cards = [
  {
    image: "/images/welcome-card-1.png",
    title: "Ultra-low fees",
    description:
      "Gas on STRATO costs only ~$0.01 per transaction, and get 10 free transactions through vouchers every time you bridge assets from Ethereum.",
    cta: "Start Earning",
    href: EXTERNAL_LINKS.app,
  },
  {
    image: "/images/welcome-card-2.png",
    title: "Gold & silver, onchain",
    description:
      "Own tokenized precious metals backed 1:1 by physical reserves in New York City vaults. Audited monthly, redeemable for real metal, and built for onchain utility.",
    cta: "Buy Metals",
    href: EXTERNAL_LINKS.app,
  },
  {
    image: "/images/welcome-card-3.png",
    title: "Borrow without selling",
    description:
      "Use your gold, silver, BTC, ETH, and other crypto assets as collateral and borrow USDST instantly with up to 80% LTV. Keep your position while unlocking liquidity.",
    cta: "Start Borrowing",
    href: EXTERNAL_LINKS.app,
  },
  {
    image: "/images/welcome-card-4.png",
    title: "Built on trust",
    description:
      "STRATO is a non-custodial, fully audited, open-source chain built by the team behind some of Ethereum's earliest infrastructure.",
    cta: "Learn More",
    href: EXTERNAL_LINKS.docs,
  },
]

function WelcomeCard({ card, index, visible }: { card: typeof cards[number]; index: number; visible: boolean }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 1 })

  return (
    <div
      className="flex flex-col"
      style={revealStyle(visible, 150 + index * 50)}
    >
      {/* Card Image Container */}
      <motion.div
        className="mb-5 flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#324c93]"
        style={{ aspectRatio: "1.6 / 1", x: springX, y: springY }}
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
        <Image
          src={card.image}
          alt={card.title}
          width={300}
          height={188}
          className="h-4/5 w-auto object-contain"
        />
      </motion.div>

      {/* Card Content */}
      <h3 className="mb-2 text-xl font-semibold leading-snug text-[#7dd3fc]">
        {card.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-snug text-white/80">
        {card.description}
      </p>
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-[#7dd3fc]"
      >
        {card.cta}
        <ArrowRight className="h-4 w-4 text-[#7dd3fc] transition-transform group-hover:translate-x-1 group-hover:text-[#7dd3fc]" />
      </a>
    </div>
  )
}

export function WelcomeSection() {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      className="relative z-[4] -mt-[32px] w-full rounded-b-[32px] bg-[#243486] pb-[32px]"
    >
      <div className="mx-auto max-w-[1280px] px-4 pt-24 pb-20 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12" style={revealStyle(visible, 0)}>
          <p className="mb-2 text-sm font-medium uppercase leading-snug tracking-widest text-[#7dd3fc]">
            Welcome to STRATO
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            Gold and Silver Meet DeFi.
          </h2>
          <p className="max-w-4xl text-base leading-snug text-white/80 md:text-lg">
            When times get hard, people turn to gold and silver. Traditional finance makes it nearly impossible to earn on gold and silver, borrow against them, or move them quickly. STRATO puts vaulted precious metals onchain and builds a full-stack DeFi platform around them, so you can earn, borrow, and provide liquidity using metals, BTC, ETH, and stablecoins.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={revealStyle(visible, 100)}
        >
          {cards.map((card, index) => (
            <WelcomeCard key={card.title} card={card} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
