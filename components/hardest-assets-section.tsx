"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useReveal, revealStyle } from "@/hooks/use-reveal"

const features = [
  {
    label: "1:1 Physical Backing",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Physical%20Backing%20Graphic%403x-uv3rfppXvaZzbvVTL9C17g8P8Zsba4.png",
    alt: "Smartphone displaying gold and silver bars with a 1:1 badge",
  },
  {
    label: "Monthly Audits",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monthly%20Audits%20Graphic%403x-blyUuyzc3c5jMBM8wRiX9aerVr0XhO.png",
    alt: "Blue calendar with a white checkmark",
  },
  {
    label: "NYC Vault Partner",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYV%20Vault%20Graphic%403x-v8RSGW6kMK9RHghX0vaNsxF3DJLJK6.png",
    alt: "Orange vault door with white X lock mechanism",
  },
  {
    label: "Redeemable for Physical",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Redeemable%20for%20Physical%20Graphic%403x-ZpejIgx6gcKexo7ksAqWLrbE9o2b2u.png",
    alt: "Blue hand holding an orange card",
  },
]

export function HardestAssetsSection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center" style={revealStyle(visible, 0)}>
          <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#1d2e86] md:text-4xl lg:text-5xl">
            The Hardest Assets in DeFi
          </h2>
          <p className="text-sm leading-relaxed text-[#6b7280] md:text-base">
            Every gram of gold and silver on Strato is backed 1:1 by physical metal stored in a
            secure vault in New York City, operated by our vaulting partner BA Gold Enterprises
            Inc. Monthly third-party audits verify supply. Redeem your physical gold anytime.
          </p>
        </div>

        {/* Features */}
        <div
          className="mb-12 flex flex-wrap items-start justify-center gap-10 md:gap-16 lg:gap-20"
          style={revealStyle(visible, 100)}
        >
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex w-36 flex-col items-center text-center"
              style={revealStyle(visible, 150 + index * 60)}
            >
              <div className="mb-4 h-24 w-24">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium leading-snug text-[#1a1a2e]">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={revealStyle(visible, 400)}>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-[#243486] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2766]"
          >
            Buy Precious Metals
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
