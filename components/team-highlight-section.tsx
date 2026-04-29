"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useTranslation } from "@/lib/i18n"
import { LottieWithIntro } from "@/components/lottie-player"

const ETHEREUM_DNA_LOTTIE_IN = "/lotties/ethereum-dna-in.lottie"
const ETHEREUM_DNA_LOTTIE_LOOP = "/lotties/ethereum-dna-loop.lottie"

const teamMembers = [
  {
    name: "Kieren James-Lubin",
    image: "/team/kieren-james-lubin-clear.png",
  },
  {
    name: "Victor Wong",
    image: "/team/victor-wong-clear.png",
  },
  {
    name: "Joe Lubin",
    image: "/team/joe-lubin-clear.png",
  },
]

function TeamHeadshot({
  member,
  visible,
  delay,
  className = "",
}: {
  member: (typeof teamMembers)[number]
  visible: boolean
  delay: number
  className?: string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 1 })

  return (
    <div className={className} style={revealStyle(visible, delay)}>
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-2xl bg-[#4a6cb3]"
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
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  )
}

function CtaButton({ className = "" }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <Link
      href="/team"
      className={`group inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-[#243486] transition-colors hover:bg-transparent hover:text-white ${className}`}
    >
      {t("teamHighlight.cta")}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

function TextBlock({ visible, className = "" }: { visible: boolean; className?: string }) {
  const { t } = useTranslation()
  return (
    <div className={className} style={revealStyle(visible, 100)}>
      <h2 className="mb-5 text-4xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
        {t("teamHighlight.heading")}
      </h2>
      <div className="space-y-4 text-base leading-snug text-white/80 md:text-lg">
        <p>{t("teamHighlight.p1")}</p>
        <p>{t("teamHighlight.p2")}</p>
        <p>{t("teamHighlight.p3")}</p>
      </div>
    </div>
  )
}

/**
 * Ethereum DNA Artwork - renders either a Lottie animation (intro + loop) or static image
 */
const LOTTIE_FADE_MASK =
  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"

function EthereumDnaArtwork() {
  const maskStyle = {
    maskImage: LOTTIE_FADE_MASK,
    WebkitMaskImage: LOTTIE_FADE_MASK,
  }

  if (ETHEREUM_DNA_LOTTIE_IN || ETHEREUM_DNA_LOTTIE_LOOP) {
    return (
      <div className="absolute inset-0" style={maskStyle}>
        <LottieWithIntro
          introSrc={ETHEREUM_DNA_LOTTIE_IN}
          loopSrc={ETHEREUM_DNA_LOTTIE_LOOP}
          className="pointer-events-none h-full w-full"
          style={{ position: "absolute", inset: 0 }}
          renderConfig={{ devicePixelRatio: 1 }}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0" style={maskStyle}>
      <Image
        src="/images/ethereum-dna.png"
        alt="Ethereum DNA"
        fill
        className="pointer-events-none object-contain"
        priority
      />
    </div>
  )
}

export function TeamHighlightSection() {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  return (
    <section
      ref={ref}
      className="relative z-[5] -mt-[32px] w-full rounded-b-[32px] bg-[#243486] pb-[32px]"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 md:px-8 lg:px-12 lg:py-28">
        {/* ===== MOBILE (below md): artwork → text → 2×2 grid ===== */}
        <div className="flex flex-col md:hidden">
          <div
            className="relative mb-8 w-full overflow-visible"
            style={{ height: "34vh", ...revealStyle(visible, 0) }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ height: "130vh", aspectRatio: "8000 / 2262" }}
            >
              <EthereumDnaArtwork />
            </div>
          </div>

          <TextBlock visible={visible} className="mb-8" />

          <div className="grid grid-cols-2 gap-3">
            {teamMembers.map((member, index) => (
              <TeamHeadshot
                key={member.name}
                member={member}
                visible={visible}
                delay={150 + index * 50}
                className="aspect-square"
              />
            ))}
            <div className="flex items-end" style={revealStyle(visible, 300)}>
              <CtaButton />
            </div>
          </div>
        </div>

        {/* ===== TABLET (md to lg): text → 4-col row (3 headshots + CTA) → artwork ===== */}
        <div className="hidden flex-col md:flex lg:hidden">
          <TextBlock visible={visible} className="mb-10" />

          <div className="w-full" style={revealStyle(visible, 0)}>
            <div className="relative z-10 mb-4 grid grid-cols-4 gap-3">
              {teamMembers.map((member, index) => (
                <TeamHeadshot
                  key={member.name}
                  member={member}
                  visible={visible}
                  delay={50 + index * 50}
                  className="aspect-square"
                />
              ))}
              <div className="flex items-end" style={revealStyle(visible, 200)}>
                <CtaButton />
              </div>
            </div>

            <div
              className="relative grid grid-cols-4 gap-3"
              style={revealStyle(visible, 200)}
            >
              <div className="aspect-square" />
              <div className="absolute inset-0 overflow-visible">
                <div
                  className="absolute left-1/2 top-1/2 h-[400%] -translate-x-1/2 -translate-y-1/2"
                  style={{ aspectRatio: "8000 / 2262" }}
                >
                  <EthereumDnaArtwork />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP (lg+): side-by-side ===== */}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-shrink-0" style={revealStyle(visible, 0)}>
            <div className="relative z-10 mb-4 flex gap-3">
              {teamMembers.map((member, index) => (
                <TeamHeadshot
                  key={member.name}
                  member={member}
                  visible={visible}
                  delay={50 + index * 50}
                  className="h-[120px] w-[120px]"
                />
              ))}
            </div>

            <div
              className="relative h-[120px] w-[calc(3*120px+2*12px)] overflow-visible"
              style={revealStyle(visible, 200)}
            >
              <div
                className="absolute left-1/2 top-1/2 h-[400%] -translate-x-1/2 -translate-y-1/2"
                style={{ aspectRatio: "8000 / 2262" }}
              >
                <EthereumDnaArtwork />
              </div>
            </div>
          </div>

          <div className="flex-1" style={revealStyle(visible, 100)}>
            <h2 className="mb-5 text-4xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {t("teamHighlight.heading")}
            </h2>
            <div className="space-y-4 text-base leading-snug text-white/80 md:text-lg">
              <p>{t("teamHighlight.p1")}</p>
              <p>{t("teamHighlight.p2")}</p>
              <p>{t("teamHighlight.p3")}</p>
            </div>
            <div className="mt-8">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}