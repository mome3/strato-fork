import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, Download, ArrowRight } from "lucide-react"

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

export function AuditsPageContent() {
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
        <div className="mt-12 mb-4">
          <h1 className="text-5xl font-bold text-[#243486] md:text-6xl text-balance">
            Vault Audits
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#555]">
            Every tokenized ounce of gold and silver on STRATO is backed by physical metal in
            secured vaults. Below are the independent audit reports and vaulting confirmation
            letters that verify our reserves.
          </p>
        </div>

        {/* Audit cards */}
        <div className="mt-10 flex flex-col gap-5 pb-24">
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
                  <h2 className="text-lg font-semibold text-[#1a1a2e]">
                    {audit.title}
                  </h2>
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
        <div className="-mt-12 mb-24">
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
