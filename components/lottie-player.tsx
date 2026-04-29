"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

/**
 * Detects if a file path is a .lottie binary format
 */
function isDotLottie(path: string): boolean {
  return path.toLowerCase().endsWith(".lottie")
}

/**
 * Render configuration for the dotlottie binary player. The most useful knob
 * here is `devicePixelRatio` — capping it at 1 dramatically reduces canvas
 * size on retina/iOS screens, which is critical for large source animations.
 */
interface LottieRenderConfig {
  devicePixelRatio?: number
  autoResize?: boolean
  freezeOnOffscreen?: boolean
}

interface LottiePlayerProps {
  /** Path to lottie file (.json or .lottie - auto-detected) */
  src?: string
  /** @deprecated Use `src` instead - format is auto-detected */
  dotLottieSrc?: string
  /** Whether to loop the animation */
  loop?: boolean
  /** Whether to autoplay */
  autoplay?: boolean
  /** Custom className for the container */
  className?: string
  /** Custom style for the container */
  style?: React.CSSProperties
  /** Callback when animation completes (only for non-looping) */
  onComplete?: () => void
  /** Renderer settings for lottie-react */
  rendererSettings?: {
    preserveAspectRatio?: string
  }
  /** Render config passed through to the dotlottie binary player */
  renderConfig?: LottieRenderConfig
}

/**
 * Unified Lottie player component that handles both .json and .lottie formats.
 * Format is auto-detected based on file extension - just use `src` for any lottie file.
 */
export function LottiePlayer({
  src,
  dotLottieSrc,
  loop = true,
  autoplay = true,
  className,
  style,
  onComplete,
  rendererSettings,
  renderConfig,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lottieRef = useRef<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  const actualSrc = src || dotLottieSrc
  const isBinaryFormat = actualSrc ? isDotLottie(actualSrc) : false
  // When autoplay is true, only mount the player once visible. This avoids any
  // imperative play() timing issues — the player simply autoplays on mount.
  const shouldMount = !autoplay || isVisible

  // Pre-fetch JSON data on component mount regardless of visibility so the
  // animation is ready to render the moment the section enters the viewport.
  useEffect(() => {
    if (!actualSrc || isBinaryFormat) return
    fetch(actualSrc)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load Lottie animation:", err))
  }, [actualSrc, isBinaryFormat])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      // rootMargin gives us a small head-start so the animation is already
      // mounted (and loading) before the element fully enters the viewport.
      { threshold: 0, rootMargin: "100px" }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} style={style}>
      {actualSrc && isBinaryFormat && shouldMount && (
        <DotLottieReact
          src={actualSrc}
          loop={loop}
          autoplay={autoplay}
          renderConfig={renderConfig}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      {actualSrc && !isBinaryFormat && animationData && shouldMount && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          onComplete={onComplete}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={rendererSettings}
        />
      )}
    </div>
  )
}

interface LottieWithIntroProps {
  /** Path to the intro lottie animation (.json or .lottie - auto-detected) */
  introSrc?: string
  /** Path to the loop lottie animation (.json or .lottie - auto-detected) */
  loopSrc?: string
  /** Custom className */
  className?: string
  /** Custom style */
  style?: React.CSSProperties
  /** Renderer settings (lottie-react / JSON only) */
  rendererSettings?: {
    preserveAspectRatio?: string
  }
  /** Render config passed through to the dotlottie binary player */
  renderConfig?: LottieRenderConfig
  /** Threshold for intersection observer (0-1) */
  threshold?: number
}

/**
 * Lottie player with intro + loop sequence.
 *
 * Plays the intro animation when the container scrolls into view, then
 * transitions to the looping animation. Players are unmounted when the
 * container leaves the viewport so off-screen sections don't continue
 * burning CPU/GPU. The intro only plays once across the page lifetime —
 * after that, scrolling back in mounts the loop directly.
 */
export function LottieWithIntro({
  introSrc,
  loopSrc,
  className,
  style,
  rendererSettings,
  renderConfig,
  threshold = 0,
}: LottieWithIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotLottieIntroRef = useRef<any>(null)
  const [introData, setIntroData] = useState<any>(null)
  const [loopData, setLoopData] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [introCompleted, setIntroCompleted] = useState(false)

  const introIsBinary = !!introSrc && isDotLottie(introSrc)
  const loopIsBinary = !!loopSrc && isDotLottie(loopSrc)

  // Pre-fetch JSON animation data on mount, regardless of visibility
  useEffect(() => {
    if (introSrc && !introIsBinary) {
      fetch(introSrc)
        .then((res) => res.json())
        .then(setIntroData)
        .catch((err) => console.error("Failed to load intro animation:", err))
    }
    if (loopSrc && !loopIsBinary) {
      fetch(loopSrc)
        .then((res) => res.json())
        .then(setLoopData)
        .catch((err) => console.error("Failed to load loop animation:", err))
    }
  }, [introSrc, loopSrc, introIsBinary, loopIsBinary])

  // Track current visibility (both directions) so we can mount/unmount
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: "100px" }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [threshold])

  const hasIntro = !!introSrc && (introIsBinary || !!introData)
  const hasLoop = !!loopSrc && (loopIsBinary || !!loopData)

  const showIntro = isVisible && hasIntro && !introCompleted
  const showLoop = isVisible && hasLoop && (introCompleted || !hasIntro)

  return (
    <div ref={containerRef} className={className} style={style}>
      {showIntro &&
        (introIsBinary ? (
          <DotLottieReact
            src={introSrc!}
            loop={false}
            autoplay
            renderConfig={renderConfig}
            style={{ width: "100%", height: "100%" }}
            dotLottieRefCallback={(player) => {
              if (!player || dotLottieIntroRef.current === player) return
              dotLottieIntroRef.current = player
              player.addEventListener("complete", () => setIntroCompleted(true))
            }}
          />
        ) : (
          <Lottie
            animationData={introData}
            loop={false}
            autoplay
            onComplete={() => setIntroCompleted(true)}
            style={{ width: "100%", height: "100%" }}
            rendererSettings={rendererSettings}
          />
        ))}
      {showLoop &&
        (loopIsBinary ? (
          <DotLottieReact
            src={loopSrc!}
            loop
            autoplay
            renderConfig={renderConfig}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Lottie
            animationData={loopData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
            rendererSettings={rendererSettings}
          />
        ))}
    </div>
  )
}