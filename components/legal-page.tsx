import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface LegalPageProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
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

        <div className="mt-12 mb-10">
          <h1 className="text-5xl font-bold text-[#243486] md:text-6xl text-balance">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[#6b6b7b]">Last updated: {lastUpdated}</p>
        </div>

        <div className="max-w-3xl pb-24">
          <div className="prose prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-[#1a1a2e]
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-[#444] prose-p:leading-relaxed prose-p:my-3
            prose-a:text-[#243486] prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-[#1a1a2e]
            prose-ul:text-[#444] prose-ul:my-3 prose-li:my-1
            prose-ol:text-[#444]
            prose-strong:text-[#1a1a2e]
            prose-hr:border-[#e0e4f0] prose-hr:my-8">
            {children}
          </div>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
