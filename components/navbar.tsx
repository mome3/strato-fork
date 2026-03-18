"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { EXTERNAL_LINKS } from "@/lib/external-links"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const scrollPositionRef = useRef(0)
  const prevThemeColorRef = useRef<string | null>(null)

  const setThemeColor = (color: string) => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", color)
  }

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

    if (mobileOpen) {
      // Save current theme color once, then force Safari chrome to match the menu (white)
      if (meta && prevThemeColorRef.current === null) {
        prevThemeColorRef.current = meta.getAttribute("content")
      }
      setThemeColor("#ffffff")

      // Lock scroll (your original approach)
      scrollPositionRef.current = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Unlock scroll
      const scrollY = scrollPositionRef.current
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      window.scrollTo(0, scrollY)

      // Restore theme color so Safari chrome goes back to what it was before opening
      if (prevThemeColorRef.current) {
        setThemeColor(prevThemeColorRef.current)
        prevThemeColorRef.current = null
      }

      // Nudge a repaint (helps iOS Safari update the top/bottom chrome immediately)
      requestAnimationFrame(() => window.scrollTo(0, scrollY))
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const toggleMenu = () => {
    if (mobileOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setMobileOpen(false)
        setIsClosing(false)
      }, 150)
    } else {
      setMobileOpen(true)
    }
  }

  return (
    <>
      <nav className="flex items-center justify-between rounded-full bg-[#243486] px-4 py-3 md:px-6 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/strato-logo.svg" alt="STRATO" className="h-6 w-auto md:h-7" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/blog"
            className="text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            Blog
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            Contact
          </Link>
          <a
            href={EXTERNAL_LINKS.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-white transition-colors hover:text-white/80 lg:block"
          >
            Docs
          </a>
        </div>

        {/* CTA */}
        <a
          href={EXTERNAL_LINKS.app}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#243486] transition-colors hover:bg-white/90 md:block"
        >
          Launch App
        </a>

        {/* Mobile Hamburger */}
        <button className="text-white md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full Screen Mobile Menu Overlay (white so Safari chrome doesn't darken) */}
      {mobileOpen && (
        <div
          className={`fixed left-0 top-0 z-[9998] h-[100dvh] w-screen bg-white md:hidden ${isClosing ? "animate-out fade-out duration-150" : "animate-in fade-in duration-150"
            }`}
        />
      )}

      {/* Full Screen Mobile Menu Panel */}
      {mobileOpen && (
        <div
          className={`fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen flex-col bg-white md:hidden
            pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
            ${isClosing
              ? "animate-out slide-out-to-right duration-150"
              : "animate-in slide-in-from-right duration-150"
            }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <Link href="/">
                <img src="/strato-logo-black.svg" alt="STRATO" className="h-6 w-auto" />
              </Link>
            </div>

            <button
              className="rounded-lg p-2 -mr-2 text-[#1a1a2e] hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 py-8">
            <div className="flex flex-col gap-8">
              <Link
                href="/blog"
                className="text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/team"
                className="text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
                onClick={toggleMenu}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a
                href={EXTERNAL_LINKS.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
                onClick={toggleMenu}
              >
                Docs
              </a>
            </div>

            <div className="mt-auto pt-8">
              <a
                href={EXTERNAL_LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[#243486] px-6 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#1a1a2e]"
                onClick={toggleMenu}
              >
                Launch App
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
