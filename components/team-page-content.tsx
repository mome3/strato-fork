"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { departments, getMembersByDepartment, TeamMember } from "@/lib/team-data"
import { useTranslation } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/translations"

const departmentKeys: Record<TeamMember["department"], TranslationKey> = {
  Leadership: "team.leadership",
  "Team Members": "team.teamMembers",
  Advisors: "team.advisors",
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.slug}`} className="group block">
      <div className="aspect-square w-full overflow-hidden rounded-3xl bg-[#e8eaf0] transition-transform duration-300 ease-out group-hover:scale-[1.01]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="select-none text-4xl font-bold text-[#243486]/30">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 px-0.5">
        <p className="text-sm font-semibold text-[#1a1a2e]">{member.name}</p>
        <p className="mt-0.5 text-xs text-[#555]">{member.jobTitle}</p>
      </div>
    </Link>
  )
}

function DepartmentSection({ department }: { department: TeamMember["department"] }) {
  const members = getMembersByDepartment(department)
  const { t } = useTranslation()
  if (members.length === 0) return null

  // First row has title in col-1 + up to 3 cards; subsequent rows have up to 4 cards
  const firstRowCards = members.slice(0, 3)
  const remainingCards = members.slice(3)

  // Chunk remaining into rows of 4
  const remainingRows: TeamMember[][] = []
  for (let i = 0; i < remainingCards.length; i += 4) {
    remainingRows.push(remainingCards.slice(i, i + 4))
  }

  return (
    <div className="flex flex-col gap-6">
      {/* First row: title cell + first 3 cards */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {/* Title cell — title aligned to bottom of the picture (square) */}
        <div className="flex flex-col">
          {/* "Picture" area */}
          <div className="aspect-square w-full flex items-end">
            <h2 className="text-3xl font-bold text-[#1a1a2e] leading-tight">
              {t(departmentKeys[department])}
            </h2>
          </div>

          {/* Invisible spacer matching MemberCard text block */}
          <div className="mt-3 px-0.5 opacity-0 select-none">
            <p className="text-sm font-semibold">Spacer</p>
            <p className="mt-0.5 text-xs">Spacer</p>
          </div>
        </div>

        {firstRowCards.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>

      {/* Overflow rows: full 4-col rows */}
      {remainingRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {row.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function TeamPageContent() {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Background artwork — same as hero section */}
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
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        {/* Navbar */}
        <div className="pt-4 md:pt-6 lg:pt-8">
          <Navbar />
        </div>

        {/* Page heading */}
        <div className="mb-10 mt-12">
          <h1 className="text-5xl font-bold text-[#243486] md:text-6xl">
            {t("team.pageTitle")}
          </h1>
        </div>

        {/* Department sections */}
        <div className="flex flex-col gap-16 pb-16">
          {departments
            .filter((dept) => dept !== "Team Members")
            .map((dept) => (
              <DepartmentSection key={dept} department={dept} />
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
