import type { Metadata } from "next"
import { AuditsPageContent } from "@/components/audits-page-content"

export const metadata: Metadata = {
  title: "Vault Audits",
  description:
    "Independent audit reports and vaulting confirmation letters verifying physical precious metals backing tokenized assets on STRATO.",
  alternates: {
    canonical: "/audits",
  },
}

export default function AuditsPage() {
  return <AuditsPageContent />
}
