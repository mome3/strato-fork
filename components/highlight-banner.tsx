"use client"

import { Fragment, useEffect, useState } from "react"
import { ArrowRight, X } from "lucide-react"

/* ─── Banner Configuration ──────────────────────────────────────────────
 *  Edit the values below to control the banner content and visibility.
 *  Set `enabled` to false to hide the banner entirely.
 * ────────────────────────────────────────────────────────────────────── */
const BANNER_CONFIG = {
  enabled: true,

  title: "STRATO Nexus is Live",
  subtitle: "Explore and experience the future of DeFi",

  /** The URL the entire banner links to */
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

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!enabled || dismissed) return null

  const linkProps = openInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <div
      className="absolute bottom-8 left-4 right-4 z-20 flex items-center justify-center md:left-8 md:right-8 lg:left-12 lg:right-12 transition-all duration-500"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <div className="flex w-full max-w-xl items-center gap-2 rounded-full bg-white/90 py-2 pl-5 pr-2 shadow-lg backdrop-blur-md md:gap-3 md:pl-6 md:pr-3">
        {/* Clickable CTA area */}
        <a
          href={href}
          {...linkProps}
          className="group flex min-w-0 flex-1 items-center gap-3 md:gap-4"
        >
          {/* Text content */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 md:flex-row md:items-center md:gap-3">
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

          {/* Countdown or arrow */}
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

        {/* Close button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#243486]/30 transition-colors hover:bg-[#243486]/5 hover:text-[#243486]/60"
          aria-label="Dismiss banner"
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