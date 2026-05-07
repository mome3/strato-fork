"use client"

import Link from "next/link"
import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  departments,
  getMembersByDepartment,
  timelineMilestones,
} from "@/lib/team-data"
import type { TeamMember } from "@/lib/team-data"
import { useTranslation } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/translations"

const departmentKeys: Record<TeamMember["department"], TranslationKey> = {
  Leadership: "team.leadership",
  Advisors: "team.advisors",
}

function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 20,
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  y?: number
  style?: CSSProperties
}) {
  return (
    <div
      className={className}
      style={
        {
          "--fade-y": `${y}px`,
          "--fade-delay": `${delay}ms`,
          animation: "teamFadeIn 0.5s ease-out var(--fade-delay) both",
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function WikipediaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="18"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
      >
        W
      </text>
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#243486] text-white transition-colors hover:bg-[#1a1a2e]"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function isValidLink(url?: string) {
  return Boolean(url && url !== "#")
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <FadeIn className="flex flex-col">
      <Link href={`/team/${member.slug}`} className="group block">
        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-[#d0d0d0] transition-transform duration-300 ease-out group-hover:scale-[1.01]">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="select-none text-4xl font-bold text-[#243486]/30">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold text-[#1a1a2e] md:text-base">
            {member.name}
          </p>
          <p className="text-xs font-medium text-[#243486] md:text-sm">
            {member.jobTitle}
          </p>

          {member.bio && (
            <p className="mt-2 text-xs leading-relaxed text-[#555]">
              {member.bio}
            </p>
          )}
        </div>
      </Link>

      {member.links && (
        <div className="mt-3 flex items-center gap-2">
          {isValidLink(member.links.x) && (
            <SocialButton href={member.links.x!} label={`${member.name} on X`}>
              <XIcon className="h-3.5 w-3.5" />
            </SocialButton>
          )}

          {isValidLink(member.links.linkedin) && (
            <SocialButton
              href={member.links.linkedin!}
              label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </SocialButton>
          )}

          {isValidLink(member.links.github) && (
            <SocialButton
              href={member.links.github!}
              label={`${member.name} on GitHub`}
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </SocialButton>
          )}

          {isValidLink(member.links.wikipedia) && (
            <SocialButton
              href={member.links.wikipedia!}
              label={`${member.name} on Wikipedia`}
            >
              <WikipediaIcon className="h-3.5 w-3.5" />
            </SocialButton>
          )}
        </div>
      )}
    </FadeIn>
  )
}

function DepartmentSection({
  department,
}: {
  department: TeamMember["department"]
}) {
  const members = getMembersByDepartment(department)
  const { t } = useTranslation()

  if (members.length === 0) return null

  const isAdvisors = department === "Advisors"
  const firstRowCount = isAdvisors ? 2 : 3
  const firstRowCards = members.slice(0, firstRowCount)
  const remainingCards = members.slice(firstRowCount)

  const remainingRows: TeamMember[][] = []

  for (let i = 0; i < remainingCards.length; i += 4) {
    remainingRows.push(remainingCards.slice(i, i + 4))
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Mobile layout: simple continuous 2-column grid */}
      <div className="md:hidden">
        <FadeIn className="mb-8">
          <h2 className="text-3xl font-bold text-[#243486]">
            {t(departmentKeys[department])}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-5">
          {members.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </div>

      {/* Desktop layout: keeps the original heading-inside-grid design */}
      <div className="hidden flex-col gap-8 md:flex">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <FadeIn className="flex flex-col">
            <div className="flex aspect-square w-full items-end">
              <h2 className="text-3xl font-bold text-[#243486] md:text-4xl">
                {t(departmentKeys[department])}
              </h2>
            </div>
          </FadeIn>

          {firstRowCards.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>

        {remainingRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-8 md:grid-cols-3 lg:grid-cols-4"
          >
            {row.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

// Animation timing — shared between horizontal and vertical timelines so the
// line fill progresses in sync with the staggered milestone fade-ins.
const TL_STAGGER = 200 // ms between successive milestones
const TL_FADE_DURATION = 500 // ms for each milestone's fade-in
const dateLabelClass =
  "inline-block rounded-full bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[#1a1a2e]"

function StaticHorizontalTimeline() {
  const total = timelineMilestones.length
  const [ref, inView] = useInView<HTMLDivElement>(0.15)
  const lineDuration = Math.max(1, total - 1) * TL_STAGGER

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-[1400px] px-8 lg:px-12"
    >
      <div className="relative">
        {/* Background line (always visible, faint) */}
        <div
          className="pointer-events-none absolute h-[2px] bg-[#243486]/15"
          style={{
            left: `calc(100% / ${total * 2})`,
            right: `calc(100% / ${total * 2})`,
            top: "calc(170px + 7px)",
          }}
        />
        {/* Foreground line — fills left to right when in view */}
        <div
          className="pointer-events-none absolute h-[2px] origin-left bg-[#243486]"
          style={{
            left: `calc(100% / ${total * 2})`,
            right: `calc(100% / ${total * 2})`,
            top: "calc(170px + 7px)",
            transform: inView ? "scaleX(1)" : "scaleX(0)",
            transition: `transform ${lineDuration}ms linear`,
          }}
        />

        <div
          className="grid items-stretch"
          style={{
            gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))`,
          }}
        >
          {timelineMilestones.map((milestone, index) => {
            const isTop = milestone.position === "top"
            const delay = index * TL_STAGGER

            const fadeStyle: CSSProperties = {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(15px)",
              transition: `opacity ${TL_FADE_DURATION}ms ease-out, transform ${TL_FADE_DURATION}ms ease-out`,
              transitionDelay: `${delay}ms`,
            }

            const dotStyle: CSSProperties = {
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.4)",
              transition:
                "opacity 350ms ease-out, transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: `${delay}ms`,
            }

            return (
              <div
                key={milestone.quarter}
                className="relative flex flex-col items-center"
              >
                {/* Top slot */}
                <div className="flex min-h-[170px] w-full flex-col items-center justify-end px-2 pb-3 text-center">
                  {isTop && (
                    <div
                      className="flex flex-col items-center"
                      style={fadeStyle}
                    >
                      <span className={`${dateLabelClass} xl:text-sm`}>
                        {milestone.quarter}
                      </span>
                      <div className="mt-2 space-y-0.5">
                        {milestone.items.map((item, i) => (
                          <p
                            key={i}
                            className="text-xs leading-snug text-[#555] xl:text-sm"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Dot row */}
                <div className="relative flex h-4 w-full items-center justify-center">
                  <div
                    className="relative z-10 h-3 w-3 rounded-full bg-[#243486]"
                    style={dotStyle}
                  />
                </div>

                {/* Bottom slot */}
                <div className="flex min-h-[170px] w-full flex-col items-center justify-start px-2 pt-3 text-center">
                  {!isTop && (
                    <div
                      className="flex flex-col items-center"
                      style={fadeStyle}
                    >
                      <span className={`${dateLabelClass} xl:text-sm`}>
                        {milestone.quarter}
                      </span>
                      <div className="mt-2 space-y-0.5">
                        {milestone.items.map((item, i) => (
                          <p
                            key={i}
                            className="text-xs leading-snug text-[#555] xl:text-sm"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function StaticVerticalTimeline() {
  const total = timelineMilestones.length
  const [ref, inView] = useInView<HTMLDivElement>(0.1)
  const lineDuration = Math.max(1, total - 1) * TL_STAGGER

  return (
    <div ref={ref} className="mx-auto w-full max-w-[640px] px-6">
      <div className="relative">
        {/* Background line */}
        <div className="pointer-events-none absolute bottom-2 left-[5px] top-2 w-[2px] bg-[#243486]/15" />
        {/* Foreground line — fills top to bottom when in view */}
        <div
          className="pointer-events-none absolute bottom-2 left-[5px] top-2 w-[2px] origin-top bg-[#243486]"
          style={{
            transform: inView ? "scaleY(1)" : "scaleY(0)",
            transition: `transform ${lineDuration}ms linear`,
          }}
        />

        <div className="flex flex-col gap-6">
          {timelineMilestones.map((milestone, index) => {
            const delay = index * TL_STAGGER

            return (
              <div
                key={milestone.quarter}
                className="relative flex items-start gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity ${TL_FADE_DURATION}ms ease-out, transform ${TL_FADE_DURATION}ms ease-out`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div
                  className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#243486]"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.4)",
                    transition:
                      "opacity 350ms ease-out, transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${delay}ms`,
                  }}
                />

                <div className="flex-1">
                  <span className={dateLabelClass}>{milestone.quarter}</span>
                  <div className="mt-1.5 space-y-0.5">
                    {milestone.items.map((item, j) => (
                      <p key={j} className="text-sm leading-snug text-[#555]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TimelineSection() {
  return (
    <div className="py-12 md:py-20">
      <div className="hidden lg:block">
        <StaticHorizontalTimeline />
      </div>
      <div className="lg:hidden">
        <StaticVerticalTimeline />
      </div>
    </div>
  )
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const playAttemptedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    // Set imperatively in case React's prop-to-attribute timing missed it.
    // iOS Safari decides autoplay eligibility based on attributes at parse time.
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute("muted", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")

    const tryPlay = () => {
      if (playAttemptedRef.current) return
      playAttemptedRef.current = true

      const promise = video.play()

      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          // Likely Low Power Mode or Low Data Mode on iOS. Native controls
          // remain available so the user can start playback manually.
          playAttemptedRef.current = false
        })
      }
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true })
      video.addEventListener("canplay", tryPlay, { once: true })
    }

    return () => {
      video.removeEventListener("loadeddata", tryPlay)
      video.removeEventListener("canplay", tryPlay)
    }
  }, [])

  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-[#1a1a2e]">
      <div className="relative aspect-video w-full">
        <img
          src="/team/hero-poster.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {!videoReady && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        )}

        <video
          ref={videoRef}
          className="relative h-full w-full object-cover transition-opacity duration-700 ease-out"
          style={{
            opacity: videoReady ? 1 : 0,
          }}
          controls
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          poster="/team/hero-poster.jpg"
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/team/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export function TeamPageContent() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      <style>{`
        @keyframes teamFadeIn {
          from {
            opacity: 0;
            transform: translateY(var(--fade-y));
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="teamFadeIn"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-80">
        <img
          src="/background-artwork-mobile.svg"
          alt=""
          className="h-full w-full object-cover object-right-top md:hidden"
        />
        <img
          src="/background-artwork.svg"
          alt=""
          className="hidden h-full w-full object-cover object-right-top md:block"
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <FadeIn className="pt-4 md:pt-6 lg:pt-8" y={12}>
            <Navbar />
          </FadeIn>

          <div className="mt-12 md:mt-16">
            <FadeIn delay={50}>
              <p className="text-sm font-bold uppercase tracking-widest text-[#4866f7] md:text-base">
                SHIPPING ETHEREUM INFRASTRUCTURE SINCE 2014
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-[#243486] md:text-5xl lg:text-6xl">
                Building for Ethereum Before It
                <br className="hidden sm:block" /> Existed.
              </h1>
            </FadeIn>

            <FadeIn delay={150}>
              <HeroVideo />
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-8 text-sm leading-relaxed text-[#555] md:text-base">
                STRATO didn&apos;t start with a whitepaper and a token sale. It
                started in 2014, when our founders joined the Ethereum project
                and began writing one of its six original mainnet-compatible
                clients in Haskell, because they were mathematicians and
                physicists, not hype merchants. Over the years, the team went on
                to build enterprise blockchain infrastructure for Fortune 500
                companies and governments, and has poured that experience into
                STRATO.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mb-16 mt-16 md:mb-24 md:mt-24">
          <TimelineSection />
        </div>

        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-20">
            {departments.map((dept) => (
              <DepartmentSection key={dept} department={dept} />
            ))}
          </div>

          <FadeIn className="mt-16 flex justify-center pb-24 md:mt-20">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-[#243486] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a2761]"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>

      <FadeIn className="relative">
        <Footer />
      </FadeIn>
    </div>
  )
}