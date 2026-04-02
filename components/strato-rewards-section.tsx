"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useReveal, revealStyle } from "@/hooks/use-reveal"

const earningMethods = [
  {
    label: "Deposit & Lend",
    description: "Earn points continuously while your USDST powers lending markets",
    img: "/icons/deposit-icon.png",
    alt: "Deposit and lend icon",
  },
  {
    label: "Borrow",
    description: "Take out a loan against your assets and earn points as you borrow.",
    img: "/icons/borrow-icon.png",
    alt: "Borrow icon",
  },
  {
    label: "Swap & Mint",
    description: "Earn points every time you trade or mint USDST through a CDP.",
    img: "/icons/swap-icon.png",
    alt: "Swap and mint icon",
  },
  {
    label: "Provide Liquidity",
    description: "Supply liquidity to the ecosystem and unlock the highest point rewards.",
    img: "/icons/liquidity-icon.png",
    alt: "Provide liquidity icon",
  },
  {
    label: "Refer Friends",
    description: "Invite others to join Strato and earn a share of the points they generate.",
    img: "/icons/refer-icon.png",
    alt: "Refer friends icon",
  },
]

function EarnItem({ method, delay, visible }: { method: typeof earningMethods[0]; delay: number; visible: boolean }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={revealStyle(visible, delay)}
    >
      <div className="mb-3 h-16 w-16">
        <img src={method.img} alt={method.alt} className="h-full w-full object-contain" />
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-[#1d2e86]">{method.label}</h3>
      <p className="max-w-[180px] text-xs leading-relaxed text-[#4b5563]">
        {method.description}
      </p>
    </div>
  )
}

export function StratoRewardsSection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="relative z-10 w-full rounded-b-[32px] bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Panel — light blue fill, no radius on bottom corners */}
        <div className="overflow-hidden rounded-3xl bg-[#eef2ff]">

          {/* Main content area */}
          <div className="px-6 pb-12 pt-14 md:px-14 md:pt-16">

            {/* Heading */}
            <div className="mx-auto mb-8 max-w-3xl text-center" style={revealStyle(visible, 0)}>
              <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#1d2e86] lg:text-5xl">
                Earn STRATO Rewards Before TGE
              </h2>
              <p className="text-sm leading-relaxed text-[#4b5563] md:text-base">
                Every meaningful action on STRATO earns you STRATO reward points: lending, borrowing,
                swapping, minting, and providing liquidity. These points are your stake in what comes
                next.
              </p>
            </div>

            {/* How you earn label */}
            <p className="mb-10 text-center text-sm font-semibold text-[#1a1a2e]" style={revealStyle(visible, 60)}>
              How you earn:
            </p>

            {/* Top row — 3 items (desktop) / 2+2+1 (mobile) */}
            <div className="mb-10">
              {/* Mobile: 2+2+1 grid */}
              <div className="grid grid-cols-2 gap-8 sm:hidden">
                {earningMethods.slice(0, 4).map((method, i) => (
                  <EarnItem key={method.label} method={method} delay={160 + i * 60} visible={visible} />
                ))}
              </div>
              <div className="mt-8 flex justify-center sm:hidden">
                <EarnItem method={earningMethods[4]} delay={400} visible={visible} />
              </div>

              {/* Desktop: 3 top + 2 centred bottom */}
              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8">
                {earningMethods.slice(0, 3).map((method, i) => (
                  <EarnItem key={method.label} method={method} delay={160 + i * 60} visible={visible} />
                ))}
              </div>
              <div className="mt-10 hidden justify-center gap-24 sm:flex">
                {earningMethods.slice(3).map((method, i) => (
                  <EarnItem key={method.label} method={method} delay={340 + i * 60} visible={visible} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center" style={revealStyle(visible, 500)}>
              <Link
                href="https://app.strato.nexus/dashboard/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#243486] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2766]"
              >
                Start Earning Rewards
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Banner strip — flush to bottom of panel, no bottom radius */}
          <div className="bg-[#1d2e86] px-6 py-4 text-center" style={revealStyle(visible, 560)}>
            <p className="text-sm font-semibold text-white">
              2M+ STRATO points have already been earned across the ecosystem and TGE is fast approaching.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
