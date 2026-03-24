import type { Metadata } from "next"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the STRATO team for support, partnerships, and general inquiries.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
