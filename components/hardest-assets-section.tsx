"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useTranslation } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/translations"

const features: {
  labelKey: TranslationKey
  img: string
  alt: string
}[] = [
  {
    labelKey: "hardestAssets.feature1",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Physical%20Backing%20Graphic%403x-uv3rfppXvaZzbvVTL9C17g8P8Zsba4.png",
    alt: "Smartphone displaying gold and silver bars with a 1:1 badge",
  },
  {
    labelKey: "hardestAssets.feature2",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monthly%20Audits%20Graphic%403x-blyUuyzc3c5jMBM8wRiX9aerVr0XhO.png",
    alt: "Blue calendar with a white checkmark",
  },
  {
    labelKey: "hardestAssets.feature3",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYV%20Vault%20Graphic%403x-v8RSGW6kMK9RHghX0vaNsxF3DJLJK6.png",
    alt: "Orange vault door with white X lock mechanism",
  },
  {
    labelKey: "hardestAssets.feature4",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Redeemable%20for%20Physical%20Graphic%403x-ZpejIgx6gcKexo7ksAqWLrbE9o2b2u.png",
    alt: "Blue hand holding an orange card",
  },
]

function FeatureCard({
  feature,
  visible,
  delay,
}: {
  feature: (typeof features)[number]
  visible: boolean
  delay: number
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 1 })
  const { t } = useTranslation()

  return (
    <div
      className="flex w-36 flex-col items-center text-center"
      style={revealStyle(visible, delay)}
    >
      <motion.div
        className="mb-4 h-24 w-24"
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
          src={feature.img}
          alt={feature.alt}
          className="h-full w-full object-contain"
        />
      </motion.div>
      <span className="text-sm font-medium leading-snug text-[#1a1a2e]">
        {t(feature.labelKey)}
      </span>
    </div>
  )
}

export function HardestAssetsSection() {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center" style={revealStyle(visible, 0)}>
          <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#1d2e86] md:text-4xl lg:text-5xl">
            {t("hardestAssets.heading")}
          </h2>
          <p className="text-sm leading-relaxed text-[#6b7280] md:text-base">
            {t("hardestAssets.description")}
          </p>
        </div>

        {/* Features */}
        <div
          className="mb-12 flex flex-wrap items-start justify-center gap-10 md:gap-16 lg:gap-20"
          style={revealStyle(visible, 100)}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.labelKey}
              feature={feature}
              visible={visible}
              delay={150 + index * 60}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={revealStyle(visible, 400)}>
          <Link
            href="https://app.strato.nexus/dashboard/deposits"
            className="group inline-flex items-center gap-2 rounded-full bg-[#243486] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2766]"
          >
            {t("hardestAssets.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
