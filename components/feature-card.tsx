"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
  type MotionValue,
} from "framer-motion"
import Lottie from "lottie-react"
import { useEffect, useMemo, useRef, useState } from "react"

interface FeatureCardProps {
  title: string
  subtitle: string
  bgColor: string
  textColor?: string
  illustration?: string
  illustrationScale?: number
  /** Path to the "intro" lottie JSON (optional) */
  lottieIn?: string
  /** Path to the looping lottie JSON */
  lottieLoop?: string

  // NEW: optional scroll input (for touch devices)
  carouselScrollX?: MotionValue<number>
  // NEW: optional index to slightly vary motion per card
  index?: number
}

export function FeatureCard({
  title,
  subtitle,
  bgColor,
  textColor = "rgba(0, 0, 0, 0.8)",
  illustration,
  illustrationScale = 1,
  lottieIn,
  lottieLoop,
  carouselScrollX,
  index = 0,
}: FeatureCardProps) {
  // Desktop hover tracking (original behavior)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 1 })

  // Detect touch devices (no hover, coarse pointer)
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)")
    const update = () => setIsTouch(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  // Mobile: derive subtle motion from carousel scroll velocity
  const fallbackScroll = useMotionValue(0)
  const scrollX = carouselScrollX ?? fallbackScroll

  const scrollVelocity = useVelocity(scrollX)
  const scrollVelocitySpring = useSpring(scrollVelocity, {
    stiffness: 120,
    damping: 30,
    mass: 1,
  })

  const dir = useMemo(() => (index % 2 === 0 ? 1 : -1), [index])

  const mobileX = useTransform(scrollVelocitySpring, (v) => {
    const clamped = Math.max(-1200, Math.min(1200, v))
    return dir * (clamped / 1200) * 10
  })

  const mobileY = useTransform(scrollVelocitySpring, (v) => {
    const clamped = Math.max(-1200, Math.min(1200, v))
    return (clamped / 1200) * -4
  })

  // --- Lottie logic (inline, same as reference) ---
  const lottieRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [lottieData, setLottieData] = useState<any>(null)
  const [lottieLoopData, setLottieLoopData] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false)
  const [showLoop, setShowLoop] = useState(false)

  // Pre-fetch both animation JSONs
  useEffect(() => {
    if (lottieIn) {
      fetch(lottieIn)
        .then((res) => res.json())
        .then((data) => setLottieData(data))
        .catch((err) => console.error("Failed to load Lottie animation:", err))
    }
    if (lottieLoop) {
      fetch(lottieLoop)
        .then((res) => res.json())
        .then((data) => setLottieLoopData(data))
        .catch((err) =>
          console.error("Failed to load Lottie loop animation:", err)
        )
    }
  }, [lottieIn, lottieLoop])

  // Observe visibility to trigger intro playback
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedIntro) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(containerRef.current)

    // Check if already visible on mount
    const rect = containerRef.current.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (isInViewport && !hasPlayedIntro) {
      setIsVisible(true)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasPlayedIntro])

  // Play intro when card becomes visible
  useEffect(() => {
    if (isVisible && lottieRef.current && !hasPlayedIntro) {
      lottieRef.current.play()
      setHasPlayedIntro(true)
    }
  }, [isVisible, hasPlayedIntro])

  // When intro completes, swap to loop
  const handleComplete = () => {
    if (!showLoop && lottieLoopData) {
      setShowLoop(true)
    }
  }

  // Determine which animation data to show
  const hasIntro = !!lottieIn && !!lottieData
  const hasLoop = !!lottieLoop && !!lottieLoopData

  return (
    <motion.div
      ref={containerRef}
      className="flex h-[448px] w-[320px] shrink-0 flex-col overflow-hidden rounded-4xl p-6 font-sans md:h-[512px] md:w-[406px] md:p-8"
      style={{
        backgroundColor: bgColor,
        x: isTouch ? mobileX : springX,
        y: isTouch ? mobileY : springY,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
        willChange: "transform",
      }}
      onMouseMove={(e) => {
        if (isTouch) return
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const maxMove = 30

        const moveX =
          Math.round(
            ((e.clientX - centerX) / rect.width) * maxMove * 100
          ) / 100
        const moveY =
          Math.round(
            ((e.clientY - centerY) / rect.height) * maxMove * 100
          ) / 100

        mouseX.set(moveX)
        mouseY.set(moveY)
      }}
      onMouseLeave={() => {
        if (isTouch) return
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={
        isTouch
          ? undefined
          : { scale: 1.01, transition: { duration: 0.15, ease: "easeOut" } }
      }
      transition={{
        scale: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
    >
      <div className="shrink-0">
        <h3
          className="font-sans text-[32px] font-bold leading-[1.1] md:text-[48px]"
          style={{ color: textColor }}
        >
          {title}
        </h3>

        <p
          className="mt-3 font-sans text-[18px] font-normal leading-[1.4] md:text-[20px]"
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
      </div>

      <div
        className="pointer-events-none relative min-h-0 flex-1"
        style={{ overflow: "visible" }}
      >
        {(hasIntro || hasLoop) ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={
              hasIntro
                ? showLoop
                  ? lottieLoopData
                  : lottieData
                : lottieLoopData
            }
            loop={hasIntro ? showLoop : true}
            autoplay={hasIntro ? showLoop : true}
            onComplete={hasIntro ? handleComplete : undefined}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${illustrationScale})`,
              transformOrigin: "center center",
              height: "100%",
              width: "100%",
              overflow: "visible",
            }}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
          />
        ) : illustration ? (
          <img
            src={illustration}
            alt=""
            className="h-full w-full object-contain object-bottom origin-bottom"
            style={{ transform: `scale(${illustrationScale})` }}
          />
        ) : (
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full opacity-50 md:h-12 md:w-12"
                style={{
                  backgroundColor: textColor,
                  transform: `translateY(${i % 2 === 0 ? -5 : 5}px)`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
