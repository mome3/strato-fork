"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { locale, setLocale, locales, localeNames } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const isLight = variant === "light"

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
          isLight
            ? "text-white hover:bg-[#1a2761]"
            : "text-[#1a1a2e] hover:bg-gray-100"
        )}
      >
        {localeNames[locale]}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2 min-w-[100px] rounded-xl p-1 shadow-xl",
            isLight ? "bg-[#243486]" : "bg-white"
          )}
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                isLight
                  ? locale === loc
                    ? "bg-[#1a2761] text-white"
                    : "text-white/80 hover:bg-[#1a2761] hover:text-white"
                  : locale === loc
                    ? "bg-gray-100 text-[#1a1a2e]"
                    : "text-[#555] hover:bg-gray-50 hover:text-[#1a1a2e]"
              )}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
