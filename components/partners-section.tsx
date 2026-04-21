"use client"

import Image from "next/image"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { useTranslation } from "@/lib/i18n"

/* ─── Partner Configuration ─────────────────────────────────────────────
 *  Adjust `height` per logo to achieve optical balance at larger sizes.
 * ────────────────────────────────────────────────────────────────────── */
const partners = [
  { name: "Galaxy", logo: "/partners/Galaxy logo.svg", height: 48, href: "https://www.galaxy.com/" },
  { name: "Morgan Creek", logo: "/partners/Morgan Creek Logo.svg", height: 52, href: "https://www.morgancreekcap.com/" },
  { name: "Consensys", logo: "/partners/Consensys Logo.svg", height: 48, href: "https://consensys.io/" },
  { name: "Fenbushi", logo: "/partners/Fenbushi Logo.svg", height: 54, href: "https://fenbushi.vc/" },
  { name: "Liberty City", logo: "/partners/Liberty City Logo.svg", height: 72, href: "https://www.libertycityventures.com/" },
  { name: "Bloccelerate", logo: "/partners/Bloccelerate Logo.svg", height: 48, href: "https://bloccelerate.vc/" },
]

export function PartnersSection() {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  // Duplicate for seamless infinite scroll
  const logos = [...partners, ...partners]

  return (
    <section
      ref={ref}
      className="relative w-full"
    >
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 md:px-8 lg:px-12 lg:pb-24">
        <h3
          className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-[#243486]/70"
          style={revealStyle(visible, 0)}
        >
          {t("partners.backedBy")}
        </h3>

        {/* Carousel wrapper with fade masks using CSS mask for transparency */}
        <div
          className="relative -mx-4 overflow-hidden md:-mx-8 lg:-mx-12"
          style={{
            ...revealStyle(visible, 100),
            maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          }}
        >

          {/* Scrolling track */}
          <div
            className="flex w-max items-center gap-20 px-4 py-6 md:gap-28 md:px-8 lg:px-12"
            style={{
              animation: "partners-scroll 30s linear infinite",
            }}
          >
            {logos.map((partner, i) => (
              <a
                key={`${partner.name}-${i}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-70"
                style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1800%) hue-rotate(213deg) brightness(90%) contrast(95%)" }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={partner.height}
                  style={{ height: partner.height, width: "auto" }}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
