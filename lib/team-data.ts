// lib/team-data.ts

export type TeamMember = {
  slug: string
  name: string
  jobTitle: string
  department: "Leadership" | "Team Members" | "Advisors"
  summary: string
  image?: string
  links?: {
    website?: string
    x?: string
    github?: string
    linkedin?: string
    wikipedia?: string
  }
}

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    slug: "jim-hormuzdiar",
    name: "Jim Hormuzdiar",
    image: "/team/jim-hormuzdiar.png",
    jobTitle: "Co-Founder & CTO",
    department: "Leadership",
    summary: "Architecting enterprise-grade blockchain solutions since 2014.",
    links: {
      x: "https://x.com/JamshidHormuz",
      github: "https://github.com/jamshidh",
      linkedin: "https://linkedin.com/in/james-hormuzdiar-b276778",
    },
  },
  {
    slug: "kieren-james-lubin",
    name: "Kieren James-Lubin",
    image: "/team/kieren-james-lubin.png",
    jobTitle: "Co-Founder & CEO",
    department: "Leadership",
    summary:
      "Early Ethereum contributor, pioneered Enterprise Blockchain and left it behind, consumer DeFi & RWAs.",
    links: {
      x: "https://x.com/kjameslubin",
      github: "https://github.com/kjameslubin",
      linkedin: "https://linkedin.com/in/kjameslubin",
    },
  },
  {
    slug: "victor-wong",
    name: "Victor Wong",
    image: "/team/victor-wong.png",
    jobTitle: "Co-Founder & CPO",
    department: "Leadership",
    summary:
      "Designing innovative DeFi products that bridge traditional and digital assets.",
    links: {
      x: "https://x.com/vic4wong",
      github: "https://github.com/vic4wong",
      linkedin: "https://linkedin.com/in/vic4wong",
    },
  },
  {
    slug: "bob-summerwill",
    name: "Bob Summerwill",
    image: "/team/bob-summerwill.png",
    jobTitle: "Head of Ecosystem",
    department: "Leadership",
    summary: 'Grizzled blockchain veteran and "Decentralization Czar"',
    links: {
      website: "https://bobsummerwill.com/",
      x: "https://x.com/bobsummerwill",
      github: "https://github.com/bobsummerwill",
      linkedin: "https://linkedin.com/in/bobsummerwill",
    },
  },
  {
    slug: "jeffry-powell",
    name: "Jeffry Powell",
    image: "/team/jeffry-powell.png",
    jobTitle: "VP, Head of Business Development",
    department: "Leadership",
    summary:
      "Seasoned technology executive with deep expertise in scaling go-to-market strategies for cutting-edge platforms at the intersection of blockchain, data integrity, and governance.",
    links: {
      x: "https://x.com/jeffryrpowell",
      linkedin: "https://linkedin.com/in/jeffry-powell",
    },
  },
  {
    slug: "maya-konaka",
    name: "Maya Konaka",
    image: "/team/maya-konaka.png",
    jobTitle: "VP, Product & Client Services",
    department: "Leadership",
    summary:
      "Ensuring exceptional user experiences and driving product innovation in digital asset finance.",
    links: {
      github: "https://github.com/witmk",
      linkedin: "https://linkedin.com/in/maya-konaka",
    },
  },
  {
    slug: "natasha-hormuzdiar",
    name: "Natasha Hormuzdiar",
    image: "/team/natasha-hormuzdiar.png",
    jobTitle: "In House Counsel",
    department: "Leadership",
    summary: "Guiding the Company in legal matters.",
    links: {
      github: "https://github.com/nhormuzdiar",
      linkedin: "https://linkedin.com/in/natasha-hormuzdiar-617547124",
    },
  },

  // Team Members
  {
    slug: "adrian-self",
    name: "Adrian Self",
    image: "/team/adrian-self.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary: "Building usable and cryptographically secure tech for hard money.",
    links: {
      github: "https://github.com/AdnanSlef",
      linkedin: "https://linkedin.com/in/adrian-self",
    },
  },
  {
    slug: "ariya-amarjargal",
    name: "Ariya Amarjargal",
    image: "/team/ariya-amarjargal.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary:
      "Developing innovative blockchain solutions and building secure infrastructure for digital asset finance.",
    links: {
      github: "https://github.com/aariya50",
      linkedin: "https://linkedin.com/in/ariya-amarjargal",
    },
  },
  {
    slug: "dustin-norwood",
    name: "Dustin Norwood",
    image: "/team/dustin-norwood.png",
    jobTitle: "Director of Engineering",
    department: "Team Members",
    summary: "Building the blockchain core that powers STRATO.",
    links: {
      github: "https://github.com/dustinnorwood",
    },
  },
  {
    slug: "hasan-alqassab",
    name: "Hasan Alqassab",
    image: "/team/hasan-alqassab.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary: "Building blockchain infrastructure to bring assets on chain.",
    links: {
      website: "https://www.hasanalqassab.com/",
      github: "https://github.com/hasanalqassab",
      linkedin: "https://linkedin.com/in/hasan-alqassab",
    },
  },
  {
    slug: "maxim-voyevoda",
    name: "Maxim Voyevoda",
    image: "/team/maxim-voyevoda.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary:
      "Developing core DeFi protocols on STRATO with an emphasis on security, scalability, and UX.",
    links: {
      github: "https://github.com/mvoyevoda",
      linkedin: "https://linkedin.com/in/mvoyevoda",
    },
  },
  {
    slug: "michael-tan",
    name: "Michael Tan",
    image: "/team/michael-tan.png",
    jobTitle: "Director of RWA Tokenization",
    department: "Team Members",
    summary:
      "Leads the strategy, development, and execution of initiatives to bring RWAs onchain.",
    links: {
      website: "https://www.michaelbtan.com/",
      github: "https://github.com/michaelbtan",
      linkedin: "https://linkedin.com/in/michaelbtan",
    },
  },
  {
    slug: "nikita-mendelbaum",
    name: "Nikita Mendelbaum",
    image: "/team/nikita-mendelbaum.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary:
      "Building and scaling blockchain infrastructure and developer tooling so others can focus on the fun stuff.",
    links: {
      github: "https://github.com/nikitamendelbaum",
      linkedin: "https://linkedin.com/in/nikita-mendelbaum-a646b9bb",
    },
  },
  {
    slug: "tanuj-soni",
    name: "Tanuj Soni",
    image: "/team/tanuj-soni.png",
    jobTitle: "Software Engineer",
    department: "Team Members",
    summary:
      "Developing innovative blockchain solutions and building secure infrastructure for digital asset finance.",
    links: {
      github: "https://github.com/Tanooj0902",
    },
  },

  // Advisors
  {
    slug: "aaron-wright",
    name: "Aaron Wright",
    image: "/team/aaron-wright.png",
    jobTitle: "Advisor",
    department: "Advisors",
    summary:
      "Professor of Law at Cardozo School of Law, co-founder of OpenLaw, now part of Tribute Labs, where he is CEO.",
    links: {
      x: "https://x.com/awrigh01",
      linkedin: "https://linkedin.com/in/aaron-wright",
    },
  },
  {
    slug: "joe-lubin",
    name: "Joe Lubin",
    image: "/team/joe-lubin.png",
    jobTitle: "Advisor",
    department: "Advisors",
    summary:
      "Co-founder of Ethereum and Founder of Consensys. Chairman of the SharpLink Gaming Ethereum digital treasury company.",
    links: {
      x: "https://x.com/ethereumjoseph",
      linkedin: "https://linkedin.com/in/joseph-lubin-48406489",
      wikipedia: "https://en.wikipedia.org/wiki/Joseph_Lubin_(entrepreneur)",
    },
  },
]

export const departments: TeamMember["department"][] = [
  "Leadership",
  "Team Members",
  "Advisors",
]

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug)
}

export function getMembersByDepartment(
  department: TeamMember["department"]
): TeamMember[] {
  return teamMembers.filter((m) => m.department === department)
}
