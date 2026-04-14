import en from "./en"
import zh from "./zh"
import ja from "./ja"
import ko from "./ko"

export type Locale = "en" | "zh" | "ja" | "ko"
export type TranslationKey = keyof typeof en

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  zh,
  ja,
  ko,
}

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
}

export const locales: Locale[] = ["en", "zh", "ja", "ko"]
