"use client"

import { useRef, useEffect } from "react"
import { ArrowUpRight, Loader2, RotateCcw } from "lucide-react"
import { useNewsletter } from "@/hooks/use-newsletter"
import { EXTERNAL_LINKS } from "@/lib/external-links"

const CTA_CONFIG = {
  /** The URL the CTA links to (used when newsletterMode is false) */
  href: "https://app.strato.nexus/",
  openInNewTab: true,
  label: "Enter the Stratosphere",
}

const socialLinks = [
  {
    label: "Telegram",
    href: EXTERNAL_LINKS.telegram,
    icon: (
      <svg viewBox="0 0 62.9921 62.985" className="h-full w-full" aria-hidden="true">
        <path
          fill="currentColor"
          d="M29.5662.0605c17.4524-1.0745,32.3514,12.3042,33.3703,29.5592,1.024,17.341-12.2246,32.2692-29.557,33.3082C16.1048,63.9635,1.1876,50.8004.0665,33.5157-1.0533,16.2521,12.0978,1.136,29.5662.0605ZM31.836,32.4458c-1.5606,1.4758-3.0561,2.7717-4.4464,4.3111-.4187.4636-.6786,1.1165-.414,1.6982.2381.5235.657.9438,1.1483,1.2748l9.9005,6.6699c.8351.5626,2.0322.8634,2.9082.4235.7586-.3809,1.2433-1.3187,1.4165-2.2004,1.3323-6.7814,2.415-13.5255,3.3889-20.3839.188-1.3235.7064-4.1766-.0694-4.9293-.2698-.2618-.7824-.5108-1.2534-.428-4.1912.7369-7.9231,2.5126-11.7961,4.1979l-18.3769,7.9965c-.8018.3489-2.2738.9179-2.1179,1.906.1437.9109,1.981,1.3351,2.9074,1.6448,1.7284.5776,3.4391,1.1409,5.2964,1.2464,1.0323.0587,2.043-.2969,2.9067-.8701l13.5727-9.0076c.3365-.2233.739-.0784.8594.113.1662.2643.033.595-.1805.826-1.7919,1.9382-3.6825,3.6502-5.6503,5.511Z"
        />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: EXTERNAL_LINKS.twitter,
    icon: (
      <svg viewBox="0 0 62.9921 62.9815" className="h-full w-full" aria-hidden="true">
        <path
          fill="currentColor"
          d="M28.6888.1276c17.4272-1.5624,32.691,11.4069,34.1844,28.638,1.4983,17.2874-11.3424,32.5759-28.6195,34.0936C17.014,64.3738,1.7463,51.636.137,34.3937-1.4709,17.1673,11.2615,1.69,28.6888.1276ZM50.9782,49.7092l-15.8691-21.2215,14.0494-15.2089c-1.134-.0899-2.2294-.0553-3.3984-.0248l-12.1912,13.1589-9.8722-13.1893-11.6015.0222,15.0412,20.1291-15.1136,16.331,3.3972.0301,13.25-14.303,10.7321,14.3297,11.5761-.0535Z"
        />
        <polygon
          fill="currentColor"
          points="45.9275 47.1718 40.641 47.2046 17.1489 15.7898 22.4227 15.7423 45.9275 47.1718"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: EXTERNAL_LINKS.youtube,
    icon: (
      <svg viewBox="0 0 62.9921 62.9929" className="h-full w-full" aria-hidden="true">
        <path
          fill="currentColor"
          d="M62.9305,29.5486c1.1676,18.8539-14.4415,34.4469-33.1873,33.3939C12.8541,61.9938-.2302,47.8851.0031,31.0479.2365,14.2051,13.7544.5005,30.5897.0133c16.8772-.4884,31.2859,12.5007,32.3408,29.5353ZM38.9691,45.526c2.4888-.052,4.7658-.1917,7.172-.5281,2.1337-.2983,4.0471-1.6703,4.4752-3.8794,1.0704-5.5241,1.2176-13.3869.0979-18.9117-.4858-2.3971-2.2734-3.9157-4.6832-4.2289-6.8044-.8843-22.491-.8487-29.357-.0116-2.2625.2759-4.3424,1.5739-4.7797,3.9338-.9976,5.3832-1.2547,13.7974-.0286,19.1359.5189,2.2591,2.3188,3.6647,4.5578,3.9654,2.3842.3202,4.6827.4791,7.099.5194l8.7194.1455,6.727-.1404Z"
        />
        <polygon
          fill="currentColor"
          points="37.5971 31.4938 27.2732 37.4833 27.2542 25.4733 37.5971 31.4938"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: EXTERNAL_LINKS.github,
    icon: (
      <svg viewBox="0 0 62.9921 61.4735" className="h-full w-full" aria-hidden="true">
        <path
          fill="currentColor"
          d="M62.9921,29.5891v3.897c-.088-.0155-.0533.7036-.0898,1.1057-.4115,4.5318-1.8003,8.8849-4.1327,12.8065-1.4806,2.4895-3.2808,4.7867-5.346,6.8134-3.4223,3.3586-7.5409,5.773-12.0423,7.2618h-.935c-.584-.2257-1.0748-.7197-1.076-1.4212l-.0163-9.195c-.0663-2.0292-.5403-4.0289-2.1199-5.4302,1.516-.1894,2.9327-.3849,4.3742-.7981,1.7519-.5022,3.3894-1.2688,4.8786-2.3093,1.4812-1.0349,2.624-2.3739,3.4057-3.9954.7672-1.5914,1.2417-3.2404,1.5021-4.9904.5939-4.5283.2272-8.4099-3.0081-11.9105,1.1215-2.7854.7591-5.687-.3435-8.3964-1.5658-.5775-5.5653,1.3351-6.8548,2.1377l-1.7938,1.1165c-5.158-1.417-10.5877-1.4171-15.7514.0002-.755-.479-1.4719-.9763-2.2816-1.3987-1.1408-.5951-2.2986-1.0557-3.4973-1.5131-.9091-.2874-1.9645-.5908-2.9162-.3322-1.0743,2.7384-1.4136,5.5943-.2936,8.386-3.2504,3.5096-3.6052,7.4231-3.0005,11.9608.2689,1.7669.7639,3.425,1.5479,5.0259.8081,1.6502,1.9852,3.0201,3.5136,4.0485,2.8449,1.9144,5.5883,2.5749,9.0342,2.9657-1.2302,1.1994-1.7427,2.5521-1.9895,4.2235-1.1299.5654-2.3428.7495-3.5859.8208-1.162.0666-2.2333-.1751-3.2214-.8365-.8972-.6006-1.6375-1.3885-2.1772-2.3433-.6772-1.1982-1.5986-2.1486-2.8115-2.8103-.509-.2777-.9995-.528-1.5831-.6115-.5948-.0851-1.1858-.1508-1.7495.0784-.1169.0475-.2225.1401-.2541.2201-.0452.1147-.0241.2513.0423.3696.723,1.2898,1.5292,1.0499,2.6192,2.35.8443,1.0071,1.5167,2.0913,1.9659,3.3334.4228,1.169,1.1084,2.1355,2.1489,2.8266.8057.5352,1.6525.8894,2.6197,1.0465,1.5117.2456,3.0165.4137,4.5314.1763l1.3762-.2157.0291,5.9966c.0035.7131-.5186,1.2031-1.1151,1.4249h-.994c-7.0781-2.42-12.5482-6.6854-16.6547-12.9831C1.8501,43.7425.1884,38.2894.0166,32.6399c-.1896-6.2339,1.2421-12.0439,4.4695-17.3911,2.6679-4.4202,6.348-8.1066,10.7752-10.7734C20.8401,1.1148,26.7797-.2609,33.2687.0404c5.1505.2391,10.0989,1.7754,14.5109,4.4361,4.4603,2.6898,8.1698,6.409,10.8389,10.8836,2.3933,4.0124,3.8855,8.4688,4.277,13.1257.0327.3884.0966.7652.0966,1.1034Z"
        />
      </svg>
    ),
  },
]

export function JoinCommunitySection() {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    mode,
    setMode,
    email,
    setEmail,
    submit,
    retry,
    isNewsletterMode,
    messages,
  } = useNewsletter()

  useEffect(() => {
    if (mode === "input" && inputRef.current) {
      inputRef.current.focus()
    }
  }, [mode])

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

  const linkProps = CTA_CONFIG.openInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <section className="w-full bg-[#f9f9f9] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Panel */}
        <div className="relative overflow-hidden rounded-3xl bg-[#1d2e86] px-8 py-16 text-center md:px-16 md:py-20">

          {/* Newsletter background art — inlined SVG, top-aligned, 3x panel height, clipped */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1105.1974 1045.7997"
            className="pointer-events-none absolute left-0 top-0 h-[300%] w-auto"
            preserveAspectRatio="xMinYMin meet"
          >
            <polygon fill="white" fillOpacity="0.07" points="759.4123 734.702 910.7596 926.4972 1105.1974 438.5012 779.7999 26.106 685.5957 262.5379 859.649 483.1298 759.4123 734.702"/>
            <polygon fill="white" fillOpacity="0.07" points="241.855 599.7093 10.1532 633.4045 335.5508 1045.7997 855.3924 970.1827 710.3557 786.3793 422.2183 828.2833 241.855 599.7093"/>
            <polygon fill="white" fillOpacity="0.07" points="620.0752 236.4318 714.2794 0 194.4378 75.6169 0 563.613 241.7832 528.4573 342.02 276.8851 620.0752 236.4318"/>
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-balance text-4xl font-semibold text-white lg:text-5xl">
              Never Miss a Thing
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-blue-200">
              Whether you&apos;re ready to start using Strato or want to be the first to hear major announcements,
              sign up for the newsletter to stay up-to-date.
            </p>

            {/* CTA / Newsletter Input */}
            <div className="flex min-h-[48px] items-center">
              {/* CTA Mode */}
              {mode === "cta" && (
                <a
                  href={isNewsletterMode ? "#" : CTA_CONFIG.href}
                  {...(isNewsletterMode ? {} : linkProps)}
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2 rounded-full bg-[#3d55c5] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4a64d8]"
                >
                  {CTA_CONFIG.label} &rarr;
                </a>
              )}

              {/* Input Mode */}
              {mode === "input" && (
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 rounded-full bg-white/10 py-2 pl-5 pr-2 backdrop-blur-sm"
                >
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={messages.placeholder}
                    className="w-48 bg-transparent text-base text-white placeholder:text-white/50 focus:outline-none md:w-64"
                    required
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1d2e86] transition-colors hover:bg-white/90"
                    aria-label="Subscribe"
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}

              {/* Loading Mode */}
              {mode === "loading" && (
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm text-white/80">
                  <Loader2 size={16} className="animate-spin" />
                  <span>Subscribing...</span>
                </div>
              )}

              {/* Success Mode */}
              {mode === "success" && (
                <div className="rounded-full bg-emerald-500/20 px-6 py-3 text-sm font-medium text-emerald-300">
                  {messages.success}
                </div>
              )}

              {/* Error Mode */}
              {mode === "error" && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-red-300">{messages.error}</span>
                  <button
                    type="button"
                    onClick={retry}
                    className="flex h-8 items-center gap-1.5 rounded-full bg-white/10 px-4 text-xs font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <RotateCcw size={12} />
                    Retry
                  </button>
                </div>
              )}
            </div>

            {/* Social icon links — no background, icon is the button */}
            <div className="mt-2 flex items-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="block h-12 w-12 text-white transition-colors hover:text-white/60"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
