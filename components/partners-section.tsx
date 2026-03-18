"use client"

import Image from "next/image"
import { useReveal, revealStyle } from "@/hooks/use-reveal"

/* ─── Partner Configuration ─────────────────────────────────────────────
 *  Adjust `height` per logo to achieve optical balance at larger sizes.
 * ────────────────────────────────────────────────────────────────────── */
const partners = [
  { name: "Galaxy", logo: "/partners/Galaxy logo.svg", height: 48 },
  { name: "Morgan Creek", logo: "/partners/Morgan Creek Logo.svg", height: 52 },
  { name: "Consensys", logo: "/partners/Consensys Logo.svg", height: 48 },
  { name: "Fenbushi", logo: "/partners/Fenbushi Logo.svg", height: 54 },
  { name: "Liberty City", logo: "/partners/Liberty City Logo.svg", height: 72 },
  { name: "Bloccelerate", logo: "/partners/Bloccelerate Logo.svg", height: 48 },
]

export function PartnersSection() {
  const { ref, visible } = useReveal()

  // Duplicate for seamless infinite scroll
  const logos = [...partners, ...partners]

  return (
    <section
      ref={ref}
      className="relative z-[4] -mt-[32px] w-full rounded-b-[32px] bg-[#243486] pb-[32px]"
    >
      <div className="mx-auto max-w-[1280px] px-4 pt-16 md:px-8 lg:px-12">
        <h3
          className="mb-6 text-center font-sans text-sm font-medium uppercase tracking-[0.2em] text-white"
          style={revealStyle(visible, 0)}
        >
          Backed By
        </h3>

        {/* Carousel wrapper with fade masks */}
        <div
          className="relative -mx-4 overflow-hidden md:-mx-8 lg:-mx-12"
          style={revealStyle(visible, 100)}
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#243486] to-transparent md:w-32" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#243486] to-transparent md:w-32" />

          {/* Scrolling track */}
          <div
            className="flex w-max items-center gap-20 px-4 py-6 md:gap-28 md:px-8 lg:px-12"
            style={{
              animation: "partners-scroll 30s linear infinite",
            }}
          >
            {logos.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex shrink-0 items-center justify-center brightness-0 invert"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={partner.height}
                  style={{ height: partner.height, width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/20" />
      </div>
    </section>
  )
}
