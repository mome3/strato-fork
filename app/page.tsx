import { HeroSection } from "@/components/hero-section"
import { HardMoneySection } from "@/components/hard-money-section"
import { StatsSection } from "@/components/stats-section"
import { PeaceOfMindSection } from "@/components/peace-of-mind-section"
import { PartnersSection } from "@/components/partners-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <HeroSection />
      <PartnersSection />
      <HardMoneySection />
      <StatsSection />
      <PeaceOfMindSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}
