import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { TeamHighlightSection } from "@/components/team-highlight-section"
import { StratoNewsSection } from "@/components/strato-news-section"
import { getNonVideoPosts } from "@/lib/posts"
import { HardestAssetsSection } from "@/components/hardest-assets-section"
import { StratoRewardsSection } from "@/components/strato-rewards-section"
import { RealYieldSection } from "@/components/real-yield-section"
import { JoinCommunitySection } from "@/components/join-community-section"
import { StatsSection } from "@/components/stats-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo"

export default function Home() {
  const latestPosts = getNonVideoPosts().slice(0, 3)
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      {/* Hero + Stats + Partners share a single rounded block with the hero background artwork */}
      <div className="relative z-[5] w-full overflow-hidden rounded-b-[32px] bg-[#f9f9f9]">
        {/* Background Artwork — covers the full block */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-auto overflow-hidden opacity-100">
          <img
            src="/background-artwork-mobile.svg"
            alt=""
            className="h-full w-auto object-cover md:hidden"
          />
          <img
            src="/background-artwork.svg"
            alt=""
            className="hidden h-full w-auto object-cover md:block"
          />
        </div>
        <HeroSection />
        <StatsSection />
        <PartnersSection />
      </div>
      <WelcomeSection />
      <TeamHighlightSection />
      <StratoNewsSection posts={latestPosts} />
      <HardestAssetsSection />
      <StratoRewardsSection />
      <RealYieldSection />
      <JoinCommunitySection />
      <Footer />
    </div>
  )
}
