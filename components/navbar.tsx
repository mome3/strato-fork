"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"
import { EXTERNAL_LINKS } from "@/lib/external-links"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "./language-switcher"
import type { TranslationKey } from "@/lib/translations"

// ─── Nav structure ────────────────────────────────────────────────────────────

type NavLink = { labelKey: TranslationKey; href: string; external: boolean }
type NavDropdown = { labelKey: TranslationKey; items: readonly NavLink[] }
type NavPlainLink = { labelKey: TranslationKey; href: string; external?: boolean }
type NavItem = NavPlainLink | NavDropdown

const NAV_ITEMS: NavItem[] = [
  {
    labelKey: "nav.getStarted",
    href: "/get-started",
    external: false,
  },
  {
    labelKey: "nav.products",
    items: [
      { labelKey: "nav.buyMetals", href: "https://app.strato.nexus/dashboard/deposits", external: true },
      { labelKey: "nav.metamaskCard", href: "https://strato.nexus/blog/metamask-card-integration", external: true },
      { labelKey: "nav.vaults", href: "https://app.strato.nexus/dashboard/vault", external: true },
    ],
  },
  {
    labelKey: "nav.team",
    href: "/team",
  },
  {
    labelKey: "nav.resources",
    items: [
      { labelKey: "nav.rewards", href: "https://strato.nexus/blog/introducing-strato-rewards", external: true },
      { labelKey: "nav.buildOnStrato", href: "https://docs.strato.nexus/build-apps/overview/", external: true },
      { labelKey: "nav.faq", href: "https://docs.strato.nexus/faq/", external: true },
      { labelKey: "nav.blockexplorer", href: "https://stratoscan.strato.nexus/", external: true },
      { labelKey: "nav.blog", href: "/blog", external: false },
      { labelKey: "nav.vaults", href: "/vaults", external: false },
      { labelKey: "nav.communityPartnership", href: "/communityrewards", external: false },
    ],
  },
]

function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item
}

// ─── Dropdown item ─────────────────────────────────────────────────────────────

function DropdownItem({
  label,
  href,
  external,
}: {
  label: string
  href: string
  external: boolean
}) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  return (
    <NavigationMenuPrimitive.Link asChild>
      <a
        href={href}
        className="group/item flex w-full items-center justify-between rounded-full px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#1a2761] hover:font-semibold"
        {...linkProps}
      >
        <span>{label}</span>
        <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100" />
      </a>
    </NavigationMenuPrimitive.Link>
  )
}

// ─── Desktop nav ───────────────────────────────────────────────────────────────

function DesktopNav() {
  const { t } = useTranslation()

  return (
    <NavigationMenuPrimitive.Root className="relative hidden items-center md:flex">
      <NavigationMenuPrimitive.List className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          if (!isDropdown(item)) {
            // Plain link (Team, Get Started)
            const linkProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
              <NavigationMenuPrimitive.Item key={item.labelKey}>
                <NavigationMenuPrimitive.Link asChild>
                  <a
                    href={item.href}
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2761]"
                    {...linkProps}
                  >
                    {t(item.labelKey)}
                  </a>
                </NavigationMenuPrimitive.Link>
              </NavigationMenuPrimitive.Item>
            )
          }

          // Dropdown
          return (
            <NavigationMenuPrimitive.Item key={item.labelKey} className="relative">
              <NavigationMenuPrimitive.Trigger
                className={cn(
                  "group/trigger inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors",
                  "hover:bg-[#1a2761] data-[state=open]:bg-[#1a2761]",
                  "focus:outline-none"
                )}
              >
                {t(item.labelKey)}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/trigger:rotate-180"
                  aria-hidden
                />
              </NavigationMenuPrimitive.Trigger>

              <NavigationMenuPrimitive.Content className="absolute top-full z-50 pt-4 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out">
                <div className="w-[280px] rounded-2xl bg-[#243486] p-2 shadow-xl">
                  {item.items.map((child) => (
                    <DropdownItem key={child.labelKey} label={t(child.labelKey)} href={child.href} external={child.external} />
                  ))}
                </div>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>
          )
        })}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
}

// ─── Mobile accordion item ─────────────────────────────────────────────────────

function MobileAccordionItem({
  label,
  items,
  onClose,
}: {
  label: string
  items: { label: string; href: string; external: boolean }[]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-1 text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown
          className={cn("h-6 w-6 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="mt-4 flex flex-col gap-4 pl-2">
          {items.map((child) => {
            const linkProps = child.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
              <a
                key={child.label}
                href={child.href}
                className="text-3xl font-normal text-[#243486]/80 hover:text-[#243486]"
                onClick={onClose}
                {...linkProps}
              >
                {child.label}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── Root Navbar ────────────────��──────────────────────────────────────────────

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { t } = useTranslation()

  const scrollPositionRef = useRef(0)
  const prevThemeColorRef = useRef<string | null>(null)

  const setThemeColor = (color: string) => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", color)
  }

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

    if (mobileOpen) {
      if (meta && prevThemeColorRef.current === null) {
        prevThemeColorRef.current = meta.getAttribute("content")
      }
      setThemeColor("#ffffff")
      scrollPositionRef.current = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      const scrollY = scrollPositionRef.current
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      window.scrollTo(0, scrollY)
      if (prevThemeColorRef.current) {
        setThemeColor(prevThemeColorRef.current)
        prevThemeColorRef.current = null
      }
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

  const closeMenu = () => toggleMenu()

  return (
    <>
      <nav className="flex items-center justify-between rounded-full bg-[#243486] px-4 py-3 md:px-6 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/strato-logo.svg" alt="STRATO" className="h-6 w-auto md:h-7" />
        </Link>

        {/* Desktop nav */}
        <DesktopNav />

        {/* Desktop right side: language switcher + CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher variant="light" />
          <a
            href={EXTERNAL_LINKS.app}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#243486] transition-colors hover:bg-white/90"
          >
            {t("nav.launchApp")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="text-white md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className={`fixed left-0 top-0 z-[9998] h-[100dvh] w-screen bg-white md:hidden ${
            isClosing ? "animate-out fade-out duration-150" : "animate-in fade-in duration-150"
          }`}
        />
      )}

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          className={`fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen flex-col bg-white md:hidden
            pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
            ${
              isClosing
                ? "animate-out slide-out-to-right duration-150"
                : "animate-in slide-in-from-right duration-150"
            }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" onClick={closeMenu}>
              <img src="/strato-logo-black.svg" alt="STRATO" className="h-6 w-auto" />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher variant="dark" />
              <button
                className="-mr-2 rounded-lg p-2 text-[#1a1a2e] hover:bg-gray-100"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-8">
            {NAV_ITEMS.map((item) => {
              if (!isDropdown(item)) {
                const linkProps = item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}
                return (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    className="text-3xl font-semibold text-[#1a1a2e] hover:text-[#243486]"
                    onClick={closeMenu}
                    {...linkProps}
                  >
                    {t(item.labelKey)}
                  </a>
                )
              }
              return (
                <MobileAccordionItem
                  key={item.labelKey}
                  label={t(item.labelKey)}
                  items={item.items.map((child) => ({
                    label: t(child.labelKey),
                    href: child.href,
                    external: child.external,
                  }))}
                  onClose={closeMenu}
                />
              )
            })}

            <div className="mt-auto pt-8">
              <a
                href={EXTERNAL_LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[#243486] px-6 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#1a2761]"
                onClick={closeMenu}
              >
                {t("nav.launchApp")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}