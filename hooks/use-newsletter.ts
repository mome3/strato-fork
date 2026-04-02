"use client"

import { useState, useCallback } from "react"
import { NEWSLETTER_CONFIG, type NewsletterMode } from "@/lib/newsletter-config"

export function useNewsletter() {
  const [mode, setMode] = useState<NewsletterMode>("cta")
  const [email, setEmail] = useState("")

  const reset = useCallback(() => {
    setMode("cta")
    setEmail("")
  }, [])

  const cancel = useCallback(() => {
    if (mode === "input" || mode === "error") {
      setMode("cta")
      setEmail("")
    }
  }, [mode])

  const submit = useCallback(async () => {
    if (!email || !email.includes("@")) return

    setMode("loading")

    try {
      const response = await fetch(NEWSLETTER_CONFIG.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Subscription failed")
      }

      setMode("success")
    } catch {
      setMode("error")
    }
  }, [email])

  const retry = useCallback(() => {
    setMode("input")
  }, [])

  return {
    mode,
    setMode,
    email,
    setEmail,
    submit,
    cancel,
    reset,
    retry,
    isNewsletterMode: NEWSLETTER_CONFIG.newsletterMode,
    messages: NEWSLETTER_CONFIG.messages,
  }
}
