"use client"

import Link from "next/link"
import { useReveal, revealStyle } from "@/hooks/use-reveal"
import { EXTERNAL_LINKS } from "@/lib/external-links"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { ref, visible } = useReveal()
  const { t } = useTranslation()

  const socialLinks = [
    { name: "X", icon: "twitter-x", href: EXTERNAL_LINKS.twitter },
    { name: "LinkedIn", icon: "linkedin", href: EXTERNAL_LINKS.linkedin },
    { name: "YouTube", icon: "youtube", href: EXTERNAL_LINKS.youtube },
    { name: "GitHub", icon: "github", href: EXTERNAL_LINKS.github },
    { name: "Telegram", icon: "telegram", href: EXTERNAL_LINKS.telegram },
  ]

  return (
    <footer ref={ref} className="relative z-[1] w-full bg-[#EFF3FA] bg-opacity-80 px-0 py-0 md:px-4 md:py-4 lg:px-12">
      <div className="mx-auto max-w-[1280px] px-4 py-8 md:rounded-[32px] md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Logo + Social */}
          <div className="flex flex-col gap-3" style={revealStyle(visible, 0)}>
            <div className="flex items-center gap-3">
              <img
                src="/strato-logo-black.svg"
                alt="STRATO"
                className="h-8 w-auto"
              />
              <span className="text-xs text-[#6b6b7b]">Copyright {new Date().getFullYear()}</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b6b7b] transition-colors hover:text-[#243486]"
                  aria-label={link.name}
                >
                  <img
                    src={`/${link.icon}.svg`}
                    alt={link.name}
                    width="18"
                    height="18"
                    className="w-4.5 h-4.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16" style={revealStyle(visible, 100)}>
            <div>
              <h4 className="mb-3 text-sm font-bold text-[#1a1a2e]">
                {t("footer.resources")}
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/blog" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.blog")}</Link>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.docs} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.docs")}</a>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.contact")}</Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.team")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-[#1a1a2e]">
                {t("footer.company")}
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/privacy" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.privacyPolicy")}</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.termsOfService")}</Link>
                </li>
                <li>
                  <Link href="/api-terms" className="text-sm text-[#6b6b7b] hover:text-[#243486]">{t("footer.apiTerms")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
