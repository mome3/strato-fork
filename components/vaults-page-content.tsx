import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, Download, ArrowRight } from "lucide-react"

const ETHERSCAN = "https://etherscan.io/address/0x8c458F866e603335ef179A63a2528F357732f5d5"
const BASESCAN = "http://basescan.org/address/0x8c458F866e603335ef179A63a2528F357732f5d5"
const LINEASCAN = "https://lineascan.build/address/0x8c458F866e603335ef179A63a2528F357732f5d5"

const AUDIT_PDF = "/blog/blockapps-vaulting-letter-april-2026.pdf"

type ProofLink = { label: string; href: string }

interface TreasuryRow {
  token: string
  stratoSupply: string
  collateralHeld: string
  proof: ProofLink[]
}

const TREASURY_DATA: TreasuryRow[] = [
  {
    token: "ETH",
    stratoSupply: "319.860000",
    collateralHeld: "330.663940",
    proof: [
      { label: "Etherscan", href: ETHERSCAN },
      { label: "Basescan", href: BASESCAN },
      { label: "Lineascan", href: LINEASCAN },
    ],
  },
  {
    token: "WBTC",
    stratoSupply: "3.750000",
    collateralHeld: "3.755916",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "sUSDS",
    stratoSupply: "41,910.000000",
    collateralHeld: "41,911.205993",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "syrupUSDC",
    stratoSupply: "20,480.000000",
    collateralHeld: "20,484.467333",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "USDC",
    stratoSupply: "22,500.000000",
    collateralHeld: "478,880.880079",
    proof: [
      { label: "Etherscan", href: ETHERSCAN },
      { label: "Basescan", href: BASESCAN },
      { label: "Lineascan", href: LINEASCAN },
    ],
  },
  {
    token: "USDT",
    stratoSupply: "10,020.000000",
    collateralHeld: "18,458.075151",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "wstETH",
    stratoSupply: "7.240000",
    collateralHeld: "7.257444",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "rETH",
    stratoSupply: "2.400000",
    collateralHeld: "2.418630",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "XAUt/XAUT",
    stratoSupply: "1.820000",
    collateralHeld: "1.839590",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "PAXG",
    stratoSupply: "0.001000",
    collateralHeld: "0.001470",
    proof: [{ label: "Etherscan", href: ETHERSCAN }],
  },
  {
    token: "GOLDST",
    stratoSupply: "714.200000",
    collateralHeld: "759.00 Troy Ounces",
    proof: [{ label: "Audit Letter (PDF)", href: AUDIT_PDF }],
  },
  {
    token: "SILVST",
    stratoSupply: "44,800.000000",
    collateralHeld: "45,613.00 Troy Ounces",
    proof: [{ label: "Audit Letter (PDF)", href: AUDIT_PDF }],
  },
]

const AUDITS = [
  {
    title: "BA Gold Vaulting Letter",
    date: "April 7, 2026",
    type: "Vaulting Confirmation",
    description:
      "BA Gold Enterprises Inc. confirms 759 ounces of gold bars and coins and 45,613 ounces of silver bars held in vaults at 43 West 47th St and 64 West 47th St, New York City.",
    href: "/blog/blockapps-vaulting-letter-april-2026.pdf",
  },
  {
    title: "BA Gold Vaulting Letter",
    date: "March 4, 2026",
    type: "Vaulting Confirmation",
    description:
      "BA Gold Enterprises Inc. confirms 711 ounces of gold coins and 46,082 ounces of silver bars held as collateral for digital tokens on STRATO at 43 West 47th Street, New York City.",
    href: "/blog/blockapps-vaulting-letter-march-2026.pdf",
  },
  {
    title: "Independent CPA Vault Audit",
    date: "December 31, 2025",
    type: "CPA Audit",
    description:
      "Certified Public Accountant Frank J. Pasatieri conducted a physical audit of precious metal holdings in two vaults controlled by BA Gold Enterprises Inc., confirming gold bars, coins, and silver bars attributable to the STRATO vaulting program.",
    href: "/blog/ba-gold-vault-audit-dec-2025.pdf",
  },
]

export function VaultsPageContent() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Background artwork */}
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

      <div className="relative flex-1 mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-12">
        <div className="pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        {/* Header */}
        <div className="mt-12 mb-10">
          <h1 className="text-5xl font-bold text-[#243486] md:text-6xl text-balance">
            Vaults
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#555]">
            Every tokenized ounce of gold and silver on STRATO is backed by physical metal in
            secured vaults. Below is the latest treasury report and independent audit documents
            that verify our reserves.
          </p>
        </div>

        {/* ── Treasury Report ──────────────────────────────────── */}
        <section className="mb-16 rounded-2xl border border-[#e0e4f0] bg-white p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            STRATO Treasury Report - April 2026
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#555] max-w-3xl">
            On April 7, 2026, the total number of STRATO tokens had an estimated market value of
            US$8.41 million with 815,230 USDST minted against these tokens as collateral.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#555] max-w-3xl">
            The STRATO tokens were backed by the following collateral held by the treasury.
          </p>

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-[#243486] text-left">
                  <th className="py-3 pr-4 font-semibold text-[#243486]">Token</th>
                  <th className="py-3 pr-4 text-right font-semibold text-[#243486]">STRATO Supply</th>
                  <th className="py-3 pr-4 text-right font-semibold text-[#243486]">Collateral Held</th>
                  <th className="py-3 font-semibold text-[#243486]">Proof of Collateral</th>
                </tr>
              </thead>
              <tbody>
                {TREASURY_DATA.map((row) => (
                  <tr key={row.token} className="border-b border-[#e0e4f0]">
                    <td className="py-3 pr-4 font-medium text-[#1a1a2e]">{row.token}</td>
                    <td className="py-3 pr-4 text-right tabular-nums text-[#444]">
                      {row.stratoSupply}
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums text-[#444]">
                      {row.collateralHeld}
                    </td>
                    <td className="py-3">
                      {row.proof.map((link, i) => (
                        <span key={link.label + link.href}>
                          {i > 0 && <span className="text-[#999]">, </span>}
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#243486] underline decoration-[#243486]/30 underline-offset-2 transition-colors hover:text-[#1a1a2e] hover:decoration-[#1a1a2e]"
                          >
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Audit Documents ─────────────────────────────────── */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#243486] md:text-3xl">
            Audit Documents
          </h2>
        </section>

        <div className="flex flex-col gap-5 pb-12">
          {AUDITS.map((audit) => (
            <a
              key={audit.href}
              href={audit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-[#e0e4f0] bg-white p-6 transition-all hover:border-[#243486]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#243486]/10 text-[#243486] transition-colors group-hover:bg-[#243486] group-hover:text-white">
                <FileText className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#1a1a2e]">
                    {audit.title}
                  </h3>
                  <span className="rounded-full bg-[#243486]/10 px-2.5 py-0.5 text-xs font-medium text-[#243486]">
                    {audit.type}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-[#243486]">{audit.date}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">
                  {audit.description}
                </p>
              </div>

              <div className="hidden shrink-0 self-center sm:flex items-center gap-1.5 rounded-full border border-[#243486]/20 px-4 py-2 text-sm font-medium text-[#243486] transition-all group-hover:bg-[#243486] group-hover:text-white group-hover:border-[#243486]">
                <Download className="h-4 w-4" />
                PDF
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-24">
          <a
            href="/blog/precious-metals-audit-march-2026"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#243486] transition-colors hover:text-[#1a1a2e]"
          >
            Read the full Q1 2026 audit blog post
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
