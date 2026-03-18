"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Copy, Check, ShieldAlert } from "lucide-react"

const EMAIL = "info@blockapps.net"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Background artwork — same as hero / team */}
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

      {/* Content */}
      <div className="relative flex-1 mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Navbar */}
        <div className="pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        {/* Title — full width, above the two columns */}
        <h1 className="mt-12 text-5xl font-bold text-[#243486] md:text-6xl mb-8">
          Contact Us
        </h1>

        {/* Two-column layout */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Left: paragraph, security notice */}
          <div className="max-w-lg">
            <p className="text-base leading-relaxed text-[#555]">
              For support, partnerships, and general inquiries, email us. We
              typically respond within 1–2 business days.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-[#db3a03]">
              <ShieldAlert size={16} className="mt-0.5 shrink-0" />
              <span>
                <span className="font-semibold">Security notice:</span> Never
                share your seed phrase or private keys. Our support team will
                never ask for them.
              </span>
            </p>
          </div>

          {/* Right: email button + address */}
          <div className="flex flex-col items-start gap-5">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#243486] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a1a2e]"
            >
              <Mail size={16} />
              Email us
            </a>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium text-[#243486] underline underline-offset-4 hover:text-[#1a1a2e] transition-colors"
              >
                {EMAIL}
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="flex items-center gap-1.5 rounded-full border border-[#243486]/20 px-3 py-1 text-xs font-medium text-[#243486] transition-all hover:bg-[#243486]/10"
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        <div className="pb-24" />
      </div>

      {/* Footer */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
