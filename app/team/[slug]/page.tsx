// app/team/[slug]/page.tsx

import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { getMemberBySlug, teamMembers } from "@/lib/team-data"
import { getMemberMdxBySlug } from "@/lib/team-content"
import { personJsonLd, breadcrumbJsonLd } from "@/lib/seo"
import { ArrowLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = getMemberBySlug(slug)
  if (!member) return { title: "Member Not Found" }
  return {
    title: `${member.name} - ${member.jobTitle}`,
    description: member.summary,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      type: "profile" as const,
      title: `${member.name} - ${member.jobTitle}`,
      description: member.summary,
      images: member.image ? [{ url: member.image }] : undefined,
    },
    twitter: {
      card: "summary" as const,
      title: `${member.name} - ${member.jobTitle}`,
      description: member.summary,
      images: member.image ? [member.image] : undefined,
    },
  }
}

// Social icon SVGs inline to avoid extra deps
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WikipediaIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="18"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
      >
        W
      </text>
    </svg>
  )
}

function WebsiteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const socialConfig = [
  { key: "website" as const, label: "Website", Icon: WebsiteIcon },
  { key: "x" as const, label: "X / Twitter", Icon: XIcon },
  { key: "github" as const, label: "GitHub", Icon: GitHubIcon },
  { key: "linkedin" as const, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "wikipedia" as const, label: "Wikipedia", Icon: WikipediaIcon },
]

const mdxComponents = {
  h2: (props: any) => (
    <h2
      {...props}
      className="mt-6 text-2xl font-bold leading-tight text-[#1a1a2e]"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="mt-5 text-xl font-semibold leading-tight text-[#1a1a2e]"
    />
  ),
  p: (props: any) => (
    <p {...props} className="mt-3 text-base leading-relaxed text-[#333]" />
  ),
  a: (props: any) => (
    <a
      {...props}
      className="text-[#243486] underline underline-offset-4 hover:text-[#1a276a]"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),
  ul: (props: any) => <ul {...props} className="mt-3 list-disc pl-6" />,
  ol: (props: any) => <ol {...props} className="mt-3 list-decimal pl-6" />,
  li: (props: any) => <li {...props} className="mt-1 text-base text-[#333]" />,
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = getMemberBySlug(slug)
  if (!member) notFound()

  const mdx = await getMemberMdxBySlug(slug)

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  // Don’t render placeholders like "#"
  const activeSocials = socialConfig.filter((s) => {
    const url = member.links?.[s.key]
    return url && url !== "#"
  })

  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      <JsonLd data={personJsonLd(member)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Team", url: "/team" },
        { name: member.name, url: `/team/${member.slug}` },
      ])} />
      {/* Background artwork */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-80">
        <img
          src="/background-artwork.svg"
          alt=""
          className="h-full w-full object-cover object-right-top"
        />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-[1280px] flex-1 px-4 md:px-8 lg:px-12">
          {/* Navbar */}
          <div className="pt-4 md:pt-6 lg:pt-8">
            <Navbar />
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#243486] transition-colors hover:text-[#1a276a]"
            >
              <ArrowLeft size={16} />
              Back to Team
            </Link>
          </div>

          {/* Member profile */}
          <div className="mt-10 pb-16">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="h-56 w-56 overflow-hidden rounded-3xl bg-[#e8eaf0]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="select-none text-5xl font-bold text-[#243486]/30">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex max-w-xl flex-col gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#243486]">
                    {member.department}
                  </span>
                  <h1 className="mt-1 text-4xl font-bold leading-tight text-[#1a1a2e]">
                    {member.name}
                  </h1>
                  <p className="mt-1 text-base text-[#555]">{member.jobTitle}</p>
                </div>

                <div className="h-px w-12 bg-[#243486]" />

                {/* Always show the one-line summary */}
                <p className="text-base leading-relaxed text-[#333]">
                  {member.summary}
                </p>

                {/* Full bio from MDX if present */}
                {mdx && (
                  <div className="pt-1">
                    <MDXRemote source={mdx.mdxSource} components={mdxComponents} />
                  </div>
                )}

                {/* Social links */}
                {activeSocials.length > 0 && (
                  <div className="flex items-center gap-3 pt-2">
                    {activeSocials.map(({ key, label, Icon }) => (
                      <a
                        key={key}
                        href={member.links![key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1f5] text-[#555] transition-colors hover:bg-[#e2e4eb]"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  )
}