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
} from "@/lib/team-data"
import type { TeamMember } from "@/lib/team-data"
import { useTranslation } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/translations"

const departmentKeys: Record<TeamMember["department"], TranslationKey> = {
  Leadership: "team.leadership",
  "Team Members": "team.teamMembers",
  Advisors: "team.advisors",
}

function FadeIn({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
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
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
        ...style,
      }}
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
          <p className="text-base font-semibold text-[#1a1a2e]">
            {member.name}
          </p>
          <p className="text-sm font-medium text-[#243486]">
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FadeIn className="hidden flex-col md:flex">
          <div className="flex aspect-square w-full items-end">
            <h2 className="text-3xl font-bold text-[#243486] md:text-4xl">
              {t(departmentKeys[department])}
            </h2>
          </div>
        </FadeIn>

        <FadeIn className="flex flex-col md:hidden">
          <h2 className="text-3xl font-bold text-[#243486]">
            {t(departmentKeys[department])}
          </h2>
        </FadeIn>

        {firstRowCards.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>

      {remainingRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {row.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      ))}
    </div>
  )
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const startVideo = async () => {
      try {
        video.muted = true
        video.playsInline = true
        await video.play()
      } catch {
        // Autoplay may fail on some devices. Native controls remain available.
      }
    }

    const timeout = window.setTimeout(startVideo, 250)

    return () => window.clearTimeout(timeout)
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
          loop
          playsInline
          preload="metadata"
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

function ScrollDebugProbe() {
  useEffect(() => {
    let lastScrollY = window.scrollY
    let gestureCount = 0

    const getPageInfo = () => ({
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
      bodyHeight: document.body.scrollHeight,
      canScroll:
        document.documentElement.scrollHeight > window.innerHeight + 1,
      htmlOverflow: window.getComputedStyle(document.documentElement).overflow,
      bodyOverflow: window.getComputedStyle(document.body).overflow,
    })

    const logGesture = (type: string, event: Event) => {
      const gestureId = ++gestureCount
      const target = event.target as HTMLElement | null

      const before = {
        gestureId,
        type,
        defaultPreventedAtCapture: event.defaultPrevented,
        targetTag: target?.tagName,
        targetClass:
          typeof target?.className === "string" ? target.className : undefined,
        page: getPageInfo(),
      }

      window.setTimeout(() => {
        const afterScrollY = window.scrollY

        console.log("[scroll-debug]", {
          ...before,
          defaultPreventedAfterEvent: event.defaultPrevented,
          changed: afterScrollY !== lastScrollY,
          previousScrollY: lastScrollY,
          nextScrollY: afterScrollY,
          delta: afterScrollY - lastScrollY,
          pageAfter: getPageInfo(),
        })

        lastScrollY = afterScrollY
      }, 120)
    }

    const handleWheel = (event: WheelEvent) => {
      logGesture("wheel", event)
    }

    const handleTouchMove = (event: TouchEvent) => {
      logGesture("touchmove", event)
    }

    const handleScroll = () => {
      console.log("[scroll-debug:scroll-event]", {
        scrollY: window.scrollY,
      })
    }

    window.addEventListener("wheel", handleWheel, { capture: true })
    window.addEventListener("touchmove", handleTouchMove, { capture: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true })
      window.removeEventListener("touchmove", handleTouchMove, {
        capture: true,
      })
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

function TimelineSection() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
      <div className="flex min-h-[720px] items-center justify-center rounded-2xl border border-[#243486]/15 bg-[#e8eaf5]/70 px-6 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#4866f7]">
            Timeline temporarily disabled
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#555] md:text-base">
            This block is here only to test whether the first-scroll issue still
            happens when the timeline interaction is fully removed.
          </p>
        </div>
      </div>
    </div>
  )
}

export function TeamPageContent() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      <ScrollDebugProbe />

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
                Strato didn&apos;t start with a whitepaper and a token sale. It
                started in 2014, when our founders joined the Ethereum project
                and began writing one of its six original mainnet-compatible
                clients in Haskell, because they were mathematicians and
                physicists, not hype merchants. Over the years, the team went on
                to build enterprise blockchain infrastructure for Fortune 500
                companies and governments, and has poured that experience into
                Strato.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mb-16 mt-16 md:mb-24 md:mt-24">
          <TimelineSection />
        </div>

        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-20 pb-24">
            {departments.map((dept) => (
              <DepartmentSection key={dept} department={dept} />
            ))}
          </div>
        </div>
      </div>

      <FadeIn className="relative">
        <Footer />
      </FadeIn>
    </div>
  )
}