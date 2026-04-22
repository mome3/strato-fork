import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Rocket, Lock, Trophy, ArrowRight } from "lucide-react"

const NAVY = "#1B2559"
const ACCENT = "#5B6CF9"
const TEAL = "#00D4AA"

const benefits = [
  {
    icon: Rocket,
    title: "Buying Pressure",
    body:
      "Holders put assets to work in DeFi on STRATO, generating organic demand. BOOE outperformed BTC and ETH within the first week of their partnership.",
  },
  {
    icon: Lock,
    title: "Reduced Sell Pressure",
    body:
      "Holders keep your token on STRATO to maintain their 2x boost. Tokens stay bridged instead of getting sold, reducing circulating supply on the open market.",
  },
  {
    icon: Trophy,
    title: "2x Points Boost",
    body:
      "Partner community holders earn double Reward Points on qualifying activities. Points map to STRATO tokens at TGE, giving holders a stake in the ecosystem.",
  },
]

const steps = [
  {
    n: 1,
    title: "We list your token",
    body: "STRATO adds your community token as a supported bridging asset.",
  },
  {
    n: 2,
    title: "Holders bridge in",
    body: "Community members bridge their meme token from Base or Ethereum to STRATO.",
  },
  {
    n: 3,
    title: "Earn 2x points",
    body:
      "Holders participate in activities on STRATO and earn double Reward Points as long as they hold your token on the platform.",
  },
]

const glance = [
  { val: "App Chain", lbl: "Purpose-built for RWAs + DeFi" },
  { val: "ETH Veterans", lbl: "Building since 2015" },
  { val: "~$0.01 / tx", lbl: "Low-cost transactions" },
  { val: "GOLDST · SILVST", lbl: "Vault-backed precious metals" },
  { val: "USDST", lbl: "Native stablecoin" },
  { val: "Simple UX", lbl: "Bridge, earn, and track in one app" },
]

export function CommunityRewardsPageContent() {
  return (
    <div className="relative min-h-screen bg-[#F4F5FB] flex flex-col">
      {/* Decorative radial gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-40 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(91,108,249,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[600px] -left-52 h-[450px] w-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(91,108,249,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative flex-1 mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-12">
        <div className="pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        <div className="mx-auto max-w-[860px] py-12 md:py-16">
          {/* Top label */}
          <div className="mb-10 flex items-center justify-end">
            <span
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                color: ACCENT,
                background: "rgba(91,108,249,0.08)",
              }}
            >
              Community Partnership
            </span>
          </div>

          {/* Hero */}
          <section className="mb-10">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Partnership Program
            </p>
            <h1
              className="mb-4 max-w-[600px] text-4xl font-extrabold leading-[1.15] md:text-5xl"
              style={{ color: NAVY }}
            >
              Bridge your token. Your holders earn 2x.
            </h1>
            <p className="max-w-[620px] text-base leading-[1.65] text-[#5A6178]">
              Your holders bridge their meme token to STRATO and earn double
              Reward Points on every qualifying activity during Season 2. Your
              token benefits from reduced sell pressure and organic buying
              pressure.
            </p>
          </section>

          {/* Boost banner */}
          <section
            className="relative mb-9 flex items-center gap-6 overflow-hidden rounded-2xl px-7 py-6 text-white"
            style={{
              background: "linear-gradient(135deg, #1B2559, #2D3680)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(91,108,249,0.35) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative z-10 shrink-0 text-5xl font-extrabold"
              style={{ color: TEAL }}
            >
              2x
            </div>
            <div className="relative z-10">
              <h2 className="mb-1 text-xl font-bold">
                Points Boost for Partner Communities
              </h2>
              <p className="text-sm leading-[1.5] text-white/70">
                Holders who bridge your token to STRATO get double Reward
                Points on qualifying activities during Season 2. Points map to
                STRATO tokens at TGE.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <SectionLabel>What your community gets</SectionLabel>
          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-[rgba(91,108,249,0.12)] bg-white p-6 shadow-[0_2px_20px_rgba(27,37,89,0.06)]"
              >
                <div
                  className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[rgba(91,108,249,0.12)]"
                  style={{ background: "rgba(91,108,249,0.08)" }}
                >
                  <Icon size={20} color={ACCENT} />
                </div>
                <h4
                  className="mb-1.5 text-[15px] font-bold"
                  style={{ color: NAVY }}
                >
                  {title}
                </h4>
                <p className="text-[13px] leading-[1.5] text-[#5A6178]">
                  {body}
                </p>
              </div>
            ))}
          </section>

          {/* Steps */}
          <section className="mb-10">
            <SectionLabel>How it works</SectionLabel>
            <div className="flex flex-col md:flex-row">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className={[
                    "flex-1 border border-[rgba(91,108,249,0.12)] bg-white p-5 shadow-[0_2px_20px_rgba(27,37,89,0.06)]",
                    // Mobile: stacked, rounded progressively
                    i === 0 ? "rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl" : "",
                    i === steps.length - 1
                      ? "rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
                      : "",
                    i !== 0 ? "border-t-0 md:border-t md:border-l-0" : "",
                  ].join(" ")}
                >
                  <div
                    className="mb-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: ACCENT }}
                  >
                    {s.n}
                  </div>
                  <h4
                    className="mb-1 text-sm font-bold"
                    style={{ color: NAVY }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-xs leading-[1.45] text-[#5A6178]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Case study */}
          <section
            className="relative mb-9 overflow-hidden rounded-2xl p-7 text-white"
            style={{ background: "#0F1629" }}
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-[200px] w-[200px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(91,108,249,0.2) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold">
                Case Study: Book of Ethereum (BOOE)
              </h3>
              <span
                className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: TEAL, background: "rgba(0,212,170,0.1)" }}
              >
                Live Partner
              </span>
            </div>
            <p className="relative z-10 mb-5 text-sm leading-[1.55] text-white/65">
              BOOE holders bridged their tokens to STRATO and participated in
              Season 2 activities. Within 7 days, BOOE outperformed both BTC
              and ETH as locked tokens reduced circulating supply and generated
              sustained buying pressure.
            </p>

            <div className="relative z-10 mb-5 grid grid-cols-2 gap-3">
              <Stat value="+10%" label="BOOE vs BTC (7 days)" />
              <Stat value="+8%" label="BOOE vs ETH (7 days)" />
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <Chart src="/images/booe-chart-1.jpg" label="BOOE vs BTC (7 day)" />
              <Chart src="/images/booe-chart-2.jpg" label="BOOE vs ETH (7 day)" />
            </div>
          </section>

          {/* Glance */}
          <section className="mb-9">
            <SectionLabel>STRATO at a glance</SectionLabel>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {glance.map((g) => (
                <div
                  key={g.val}
                  className="rounded-[10px] border border-[rgba(91,108,249,0.12)] bg-white p-4 text-center shadow-[0_2px_20px_rgba(27,37,89,0.06)]"
                >
                  <span
                    className="block text-sm font-bold"
                    style={{ color: NAVY }}
                  >
                    {g.val}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-[#8B92A8]">
                    {g.lbl}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8 rounded-2xl border border-[rgba(91,108,249,0.12)] bg-white p-7 shadow-[0_2px_20px_rgba(27,37,89,0.06)]">
            <h3 className="text-lg font-bold" style={{ color: NAVY }}>
              Ready to partner?
            </h3>
            <p className="mb-4 text-sm text-[#5A6178]">
              We can have your community onboarded within a week. DM us on 𝕏,
              email us, or join our Telegram.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <CtaLink
                href="https://x.com/strato_net"
                className="text-white"
                style={{ background: NAVY }}
              >
                DM on 𝕏 <ArrowRight size={14} />
              </CtaLink>
              <CtaLink
                href="mailto:info@blockapps.net"
                className="text-white"
                style={{ background: ACCENT }}
              >
                Email Us <ArrowRight size={14} />
              </CtaLink>
              <CtaLink
                href="https://t.me/strato_net"
                className="border border-[rgba(91,108,249,0.12)] bg-transparent"
                style={{ color: NAVY }}
              >
                Telegram <ArrowRight size={14} />
              </CtaLink>
            </div>
          </section>

          {/* Page footer strip */}
          <div className="flex flex-col justify-between gap-2 border-t border-[rgba(91,108,249,0.12)] pt-4 text-xs text-[#8B92A8] md:flex-row">
            <span>
              <FooterLink href="https://strato.nexus">strato.nexus</FooterLink>{" "}
              ·{" "}
              <FooterLink href="https://app.strato.nexus">
                app.strato.nexus
              </FooterLink>{" "}
              ·{" "}
              <FooterLink href="https://docs.strato.nexus">
                docs.strato.nexus
              </FooterLink>
            </span>
            <FooterLink href="https://x.com/strato_net">@strato_net</FooterLink>
          </div>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/[0.06] p-4 text-center">
      <span className="block text-[28px] font-extrabold" style={{ color: "#7B8AFF" }}>
        {value}
      </span>
      <span className="mt-1 block text-[11px] text-white/50">{label}</span>
    </div>
  )
}

function Chart({ src, label }: { src: string; label: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-[10px] border border-white/10">
        <Image
          src={src}
          alt={label}
          width={800}
          height={400}
          className="block h-auto w-full"
        />
      </div>
      <p className="mt-1.5 text-center text-[11px] font-medium text-white/50">
        {label}
      </p>
    </div>
  )
}

function CtaLink({
  href,
  children,
  className,
  style,
}: {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(91,108,249,0.25)] ${className ?? ""}`}
      style={style}
    >
      {children}
    </a>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#5B6CF9] no-underline hover:underline"
    >
      {children}
    </a>
  )
}
