import type { Metadata } from "next"
import { VaultsPageContent } from "@/components/vaults-page-content"

export const metadata: Metadata = {
  title: "Vaults",
  description:
    "STRATO Treasury Report and independent audit reports verifying physical precious metals backing tokenized assets.",
  alternates: {
    canonical: "/vaults",
  },
}

export default function VaultsPage() {
  return <VaultsPageContent />
}
