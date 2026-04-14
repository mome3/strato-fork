"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { translations, localeNames, locales, type Locale, type TranslationKey } from "./translations"

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
  locales: readonly Locale[]
  localeNames: Record<Locale, string>
}

const I18nContext = createContext<I18nContextType | null>(null)

const STORAGE_KEY = "strato-locale"

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && locales.includes(stored as Locale)) return stored as Locale
  return "en"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getInitialLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      const activeLocale = mounted ? locale : "en"
      return translations[activeLocale][key] ?? translations.en[key] ?? key
    },
    [locale, mounted]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales, localeNames }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider")
  }
  return context
}
