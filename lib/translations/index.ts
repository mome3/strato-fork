import en from "./en"
import zh from "./zh"
import ja from "./ja"
import ko from "./ko"
import fr from "./fr"
import es from "./es"

export type Locale = "en" | "zh" | "ja" | "ko" | "fr" | "es"
export type TranslationKey = keyof typeof en

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  zh,
  ja,
  ko,
  fr,
  es,
}

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  fr: "FR",
  es: "ES",
}

export const locales: Locale[] = ["en", "es", "fr", "zh", "ja", "ko"]
