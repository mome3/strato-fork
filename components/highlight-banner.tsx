"use client"

import { Fragment, useEffect, useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, X, Loader2, RotateCcw } from "lucide-react"
import { useNewsletter } from "@/hooks/use-newsletter"

/* ─── Banner Configuration ──────────────────────────────────────────────
 *  Edit the values below to control the banner content and visibility.
 *  Set `enabled` to false to hide the banner entirely.
 * ────────────────────────────────────────────────────────────────────── */
const BANNER_CONFIG = {
  enabled: true,
  title: "TGE upcoming. Join the whitelist and latest news.",
  subtitle: "",

  /** The URL the entire banner links to (used when newsletterMode is false) */
  href: "https://app.strato.nexus/",
  openInNewTab: true,

  /**
   * Optional countdown target date (ISO string).
   * Set to `null` to hide the countdown and show the subtitle only.
   * Example: countdownTarget: "2026-04-01T00:00:00Z",
   * Disabled: countdownTarget: null as string | null,
   */
  countdownTarget: null as string | null,
}

/* ─── Countdown Hook ───────────────────────────────────────────────── */

function useCountdown(target: string | null) {
  const [remaining, setRemaining] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    if (!target) return

    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now())
      setRemaining({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      })
    }

    tick()
    const id = setInterval(tick, 1_000)
    return () => clearInterval(id)
  }, [target])

  return remaining
}

function getCountdownUnits(
  remaining: { days: number; hours: number; minutes: number; seconds: number } | null
) {
  if (!remaining) return null

  if (remaining.days > 0) {
    return [
      { value: remaining.days, label: "d" },
      { value: remaining.hours, label: "h" },
    ]
  }

  if (remaining.hours > 0) {
    return [
      { value: remaining.hours, label: "h" },
      { value: remaining.minutes, label: "m" },
    ]
  }

  return [
    { value: remaining.minutes, label: "m" },
    { value: remaining.seconds, label: "s" },
  ]
}

/* ─── Component ────────────────────────────────────────────────────── */

export function HighlightBanner() {
  const { enabled, title, subtitle, href, openInNewTab, countdownTarget } =
    BANNER_CONFIG
  const countdown = useCountdown(countdownTarget)
  const units = getCountdownUnits(countdown)
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    mode,
    setMode,
    email,
    setEmail,
    submit,
    cancel,
    retry,
    isNewsletterMode,
    messages,
  } = useNewsletter()

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (mode === "input" && inputRef.current) {
      inputRef.current.focus()
    }
  }, [mode])

  if (!enabled || dismissed) return null

  const linkProps = openInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  const handleCtaClick = (e: React.MouseEvent) => {
    if (isNewsletterMode) {
      e.preventDefault()
      setMode("input")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  const handleClose = () => {
    if (mode === "input" || mode === "error") {
      cancel()
    } else {
      setDismissed(true)
    }
  }

  return (
    <div
      className="absolute bottom-8 left-4 right-4 z-20 flex items-center justify-center md:left-8 md:right-8 lg:left-12 lg:right-12 transition-all duration-500"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <div className="flex w-fit items-center gap-2 rounded-full bg-white/90 py-2 pl-5 pr-2 shadow-lg backdrop-blur-md md:gap-3 md:pl-6 md:pr-3">

        {/* CTA Mode — default clickable banner */}
        {mode === "cta" && (
          <a
            href={isNewsletterMode ? "#" : href}
            {...(isNewsletterMode ? {} : linkProps)}
            onClick={handleCtaClick}
            className="group flex min-w-0 flex-1 items-center gap-3 md:gap-4"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-center md:text-left md:flex-row md:items-center md:gap-3">
              <span
                className="shrink-0 text-sm font-semibold"
                style={{
                  background: "linear-gradient(90deg, #243486, #3ecfb2, #243486)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 4s linear infinite",
                }}
              >
                {title}
              </span>
              <span className="truncate text-xs text-[#243486]/50 md:text-sm">
                {subtitle}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              {units && (
                <div className="hidden items-center gap-1.5 text-xs font-medium tabular-nums text-[#243486]/80 sm:flex">
                  {units.map((u, idx) => (
                    <Fragment key={u.label}>
                      <CountdownUnit value={u.value} label={u.label} />
                      {idx === 0 && <span className="text-[#243486]/30">:</span>}
                    </Fragment>
                  ))}
                </div>
              )}
              <ArrowRight
                size={16}
                className="text-[#243486]/40 transition-transform group-hover:translate-x-0.5"
              />
            </div>
          </a>
        )}

        {/* Input Mode — email form */}
        {mode === "input" && (
          <form onSubmit={handleSubmit} className="flex min-w-0 flex-1 items-center gap-2">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={messages.placeholder}
              className="min-w-0 flex-1 bg-transparent text-base text-[#243486] placeholder:text-[#243486]/40 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#243486] text-white transition-colors hover:bg-[#1d2e6e]"
              aria-label="Subscribe"
            >
              <ArrowUpRight size={14} />
            </button>
          </form>
        )}

        {/* Loading Mode */}
        {mode === "loading" && (
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-sm text-[#243486]/60">
            <Loader2 size={16} className="animate-spin" />
            <span>Subscribing...</span>
          </div>
        )}

        {/* Success Mode */}
        {mode === "success" && (
          <div className="flex min-w-0 flex-1 items-center justify-center text-sm font-medium text-emerald-600">
            {messages.success}
          </div>
        )}

        {/* Error Mode */}
        {mode === "error" && (
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
            <span className="text-sm text-red-500">{messages.error}</span>
            <button
              type="button"
              onClick={retry}
              className="flex h-7 items-center gap-1 rounded-full bg-red-100 px-3 text-xs font-medium text-red-600 transition-colors hover:bg-red-200"
            >
              <RotateCcw size={12} />
              Retry
            </button>
          </div>
        )}

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#243486]/30 transition-colors hover:bg-[#243486]/5 hover:text-[#243486]/60"
          aria-label={mode === "input" || mode === "error" ? "Cancel" : "Dismiss banner"}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <span>
      {String(value).padStart(2, "0")}
      <span className="text-[#243486]/40">{label}</span>
    </span>
  )
}
