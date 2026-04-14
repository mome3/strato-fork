"use client"

import { useTranslation } from "@/lib/i18n"

export function RealYieldSection() {
  const { t } = useTranslation()

  return (
    <section className="relative z-0 -mt-20 w-full rounded-b-[32px] bg-[#1d2e86] pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">

          {/* Left: text + CTA */}
          <div className="flex-1">
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white lg:text-5xl">
              {t("realYield.heading")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-blue-200">
              {t("realYield.description")}
            </p>
            <a
              href="https://strato.nexus/blog/how-trading-bot-generates-yield"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {t("realYield.cta")} &rarr;
            </a>
          </div>

          {/* Right: robot artwork */}
          <div className="group w-full max-w-[480px] flex-shrink-0 md:w-1/2">
            <div className="overflow-hidden rounded-2xl bg-[#2a3fa0]">
              <img
                src="/trading-bot-artwork.png"
                alt="Autonomous trading bot working at a laptop"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
