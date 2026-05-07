// lib/team-data.ts

export type TeamMember = {
  slug: string
  name: string
  jobTitle: string
  department: "Leadership" | "Advisors"
  summary: string
  bio: string
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
    slug: "kieren-james-lubin",
    name: "Kieren James-Lubin",
    image: "/team/kieren-james-lubin.png",
    jobTitle: "Co-Founder & CEO",
    department: "Leadership",
    summary:
      "Early Ethereum contributor, pioneered Enterprise Blockchain and left it behind, consumer DeFi & RWAs.",
    bio: "Early Ethereum contributor and co-creator of the Haskell client, one of six mainnet-compatible clients at launch. Leads STRATO with a background in mathematics and mathematical physics.",
    links: {
      x: "https://x.com/kjameslubin",
      github: "https://github.com/kjameslubin",
      linkedin: "https://linkedin.com/in/kjameslubin",
    },
  },
  {
    slug: "jim-hormuzdiar",
    name: "Jim Hormuzdiar",
    image: "/team/jim-hormuzdiar.png",
    jobTitle: "Co-Founder & CTO",
    department: "Leadership",
    summary: "Architecting enterprise-grade blockchain solutions since 2014.",
    bio: "Started building the Ethereum Haskell client in 2014, before mainnet existed. Leads STRATO's architecture, security, and smart contract systems.",
    links: {
      x: "https://x.com/JamshidHormuz",
      github: "https://github.com/jamshidh",
      linkedin: "https://linkedin.com/in/james-hormuzdiar-b276778",
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
    bio: "Early Ethereum and ConsenSys contributor who helped bring Blockchain-as-a-Service and enterprise Ethereum to market. Leads STRATO's product strategy and real-world asset platform design.",
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
    bio: "Former Ethereum Foundation core developer and EEA technical leader. Leads STRATO's open-source ecosystem and developer strategy.",
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
    bio: "Business and governance leader with experience across blockchain, data integrity, and enterprise strategy. Leads STRATO's commercial partnerships and go-to-market efforts.",
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
    bio: "Leads product innovation and client experience across the STRATO platform. Oversees roadmap execution across lending, borrowing, and asset management.",
    links: {
      github: "https://github.com/witmk",
      linkedin: "https://linkedin.com/in/maya-konaka",
    },
  },
  {
    slug: "natasha-hormuzdiar",
    name: "Natasha Hormuzdiar",
    image: "/team/natasha-hormuzdiar.png",
    jobTitle: "In-House Counsel",
    department: "Leadership",
    summary: "Guiding the Company in legal matters.",
    bio: "Advises STRATO on legal, regulatory, and governance matters across digital assets. Supports compliance and risk management as the platform grows.",
    links: {
      github: "https://github.com/nhormuzdiar",
      linkedin: "https://linkedin.com/in/natasha-hormuzdiar-617547124",
    },
  },

  // Advisors
  {
    slug: "joe-lubin",
    name: "Joe Lubin",
    image: "/team/joe-lubin.png",
    jobTitle: "Advisor",
    department: "Advisors",
    summary:
      "Co-founder of Ethereum and Founder of Consensys. Chairman of the SharpLink Gaming Ethereum digital treasury company.",
    bio: "Co-founder of Ethereum and founder of ConsenSys, the company behind MetaMask and Infura. Advises STRATO on ecosystem, strategy, and long-term infrastructure.",
    links: {
      x: "https://x.com/ethereumjoseph",
      linkedin: "https://linkedin.com/in/joseph-lubin-48406489",
      wikipedia: "https://en.wikipedia.org/wiki/Joseph_Lubin_(entrepreneur)",
    },
  },
  {
    slug: "aaron-wright",
    name: "Aaron Wright",
    image: "/team/aaron-wright.png",
    jobTitle: "Advisor",
    department: "Advisors",
    summary:
      "Professor of Law at Cardozo School of Law, co-founder of OpenLaw, now part of Tribute Labs, where he is CEO.",
    bio: "Professor at Cardozo School of Law, co-founder of OpenLaw, and co-author of Blockchain and the Law. Advises on legal, regulatory, and institutional frameworks for digital assets.",
    links: {
      x: "https://x.com/awrigh01",
      linkedin: "https://linkedin.com/in/aaron-wright",
    },
  },
]

export const departments: TeamMember["department"][] = [
  "Advisors",
  "Leadership",
]

export type TimelineMilestone = {
  quarter: string
  items: string[]
  position: "top" | "bottom"
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    quarter: "2014",
    items: ["Early Ethereum Contributors"],
    position: "top",
  },
  {
    quarter: "July 2015",
    items: ["1 of 6 mainnet-compatible clients at Frontier"],
    position: "bottom",
  },
  {
    quarter: "November 2015",
    items: ["First Blockchain-as-a-Service with Microsoft Azure"],
    position: "top",
  },
  {
    quarter: "2017",
    items: ["Co-founded the Enterprise Ethereum Alliance"],
    position: "bottom",
  },
  {
    quarter: "2017-2023",
    items: ["Enterprise infrastructure for Fortune 500 and government clients"],
    position: "top",
  },
  {
    quarter: "Incoming",
    items: ["STRATO TGE (Token Generation Event)"],
    position: "bottom",
  },
]

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug)
}

export function getMembersByDepartment(
  department: TeamMember["department"]
): TeamMember[] {
  return teamMembers.filter((m) => m.department === department)
}