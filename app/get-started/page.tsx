import type { Metadata } from "next"
import { GetStartedPageContent } from "@/components/get-started-page-content"

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "The easiest way to enable gold and silver to work for you. Start your DeFi journey with STRATO.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get Started - STRATO",
    description: "The easiest way to enable gold and silver to work for you. Start your DeFi journey with STRATO.",
  },
}

export default function GetStartedPage() {
  return <GetStartedPageContent />
}