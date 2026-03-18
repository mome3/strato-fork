"use client"

import { Send } from "lucide-react"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { EXTERNAL_LINKS } from "@/lib/external-links"

export function CommunitySection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="relative z-[1] -mt-[32px] w-full bg-[#f9f9f9] pt-[32px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div className="flex-1" style={revealStyle(visible, 0)}>
          <h3 className="text-lg font-bold text-[#1a1a2e]">
            Join Our Community
          </h3>
          <p className="mt-1 text-sm text-[#6b6b7b]">
            Stay updated with the latest news, updates, and connect with other
            investors
          </p>
        </div>
        <a
          href={EXTERNAL_LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#243486] px-5 py-2.5 text-sm font-semibold text-[#243486] transition-colors hover:bg-[#243486] hover:text-white"
          style={revealStyle(visible, 200)}
        >
          <Send size={14} />
          Join Telegram
        </a>
      </div>
    </section>
  )
}
