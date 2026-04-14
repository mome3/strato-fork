import type { Metadata } from "next"
import { TeamPageContent } from "@/components/team-page-content"

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind STRATO — building DeFi powered by precious metals.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team - STRATO",
    description: "Meet the team behind STRATO — building DeFi powered by precious metals.",
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}
