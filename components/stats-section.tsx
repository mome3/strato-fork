"use client"

import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/translations"

const stats: { value: string; labelKey: TranslationKey; numericValue: number }[] = [
  { value: "$10M+", labelKey: "stats.tvl", numericValue: 10 },
  { value: "$1.7M+", labelKey: "stats.loans", numericValue: 1.7 },
  { value: "2M+", labelKey: "stats.points", numericValue: 2 },
]

function CountUpNumber({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef(0)

  useEffect(() => {
    if (!visible) return

    const duration = 1500 // 1.5 seconds
    startTimeRef.current = null
    startValueRef.current = 0

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // ease-out-quad
      const easeProgress = 1 - (1 - progress) * (1 - progress)

      const current = startValueRef.current + target * easeProgress
      setDisplayValue(Math.floor(current * 10) / 10)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [visible, target])

  return (
    <>
      {displayValue}
      {suffix}
    </>
  )
}

export function StatsSection() {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  return (
    <section ref={ref} className="relative w-full">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 lg:px-12 lg:py-24">
        {/* Stats Cards Group */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch">
          {/* Left card (stretches to match right column total height) */}
          <div
            className="h-full rounded-2xl bg-[#EFF3FA] bg-opacity-80 p-6 backdrop-blur-md"
            style={revealStyle(visible, 100)}
          >
            <p className="text-5xl font-medium text-[#1a1a2e]">
              $<CountUpNumber target={stats[0].numericValue} suffix="M+" visible={visible} />
            </p>
            <p className="mt-1 text-lg font-normal text-[#6b6b7b]">{t(stats[0].labelKey)}</p>
          </div>

          {/* Right column becomes a 2-row grid so its total height is well-defined */}
          <div className="grid h-full gap-4 md:grid-rows-2">
            {stats.slice(1).map((stat, i) => (
              <div
                key={stat.labelKey}
                className="rounded-2xl bg-[#EFF3FA] bg-opacity-80 p-6 backdrop-blur-md"
                style={revealStyle(visible, 100 + i * 100)}
              >
                <p className="text-5xl font-medium text-[#1a1a2e]">
                  {i === 0 ? "$" : ""}
                  <CountUpNumber target={stat.numericValue} suffix="M+" visible={visible} />
                </p>
                <p className="mt-1 text-lg font-normal text-[#6b6b7b]">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
