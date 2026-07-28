import {
  Search,
  Rocket,
  MessageCircleQuestion,
  ShieldCheck,
  Braces,
  MapPinned,
  Tag,
  TrendingUp,
  Feather,
  BadgeCheck,
} from "lucide-react";

export const nav = [
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
];

export const navDropdowns = [
  {
    label: "Locations",
    items: [
      { label: "Louisville", href: "/louisville" },
      { label: "Nashville", href: "/nashville" },
    ],
  },
  {
    label: "Industries",
    items: [{ label: "Restaurants", href: "/industries/restaurants" }],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery call",
    body: "We learn your business — what you do well, what isn't working, and who you're actually competing against. No sales pitch, just questions.",
    icon: MessageCircleQuestion,
  },
  {
    step: "02",
    title: "Competitor & keyword audit",
    body: "We research what's already working (and what isn't) for other businesses in your space before we design anything.",
    icon: Search,
  },
  {
    step: "03",
    title: "Build to win",
    body: "We design and build a site made to outperform what's already ranking — not just look nice sitting next to it.",
    icon: Rocket,
  },
];

export const tiers = [
  {
    name: "Basic",
    price: "$500",
    cadence: "one-time build",
    monthly: "$100/mo",
    description: "A clean, professional site to get a small business online and credible.",
    bestFor: "Solo operators and brand-new businesses that just need to be found online.",
    features: [
      "Up to 5 pages",
      "Custom mobile-responsive design",
      "Contact form",
      "Basic on-page SEO with real title tags & meta descriptions",
      "SSL, hosting, uptime monitoring & minor edits",
    ],
    featured: false,
  },
  {
    name: "Standard",
    tagline: "The Foundation",
    price: "$1,000",
    cadence: "one-time build",
    monthly: "$150/mo",
    description: "Everything a growing business needs in place before spending a dollar on ads — built off a real competitor & keyword audit.",
    bestFor: "Landscapers, contractors, and home service businesses ready to actually compete on search.",
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Competitor & keyword audit built into the build",
      "Content written around real local keywords for your service area",
      "Google Business Profile setup & connection at launch",
      "Blog / content section",
      "Monthly keyword tracking & optimization",
    ],
    featured: true,
  },
  {
    name: "Custom",
    price: "Starting at $2,500",
    cadence: "custom quote",
    monthly: "Quoted with build",
    description: "For businesses that need more than a marketing site.",
    bestFor: "Businesses that need booking, e-commerce, or multi-location builds.",
    features: [
      "Client portals & booking systems",
      "E-commerce",
      "Multi-location builds",
      "Integrations with your existing tools",
      "Scoped and quoted before we start — no surprises",
    ],
    featured: false,
  },
];

export const foundationIntro =
  "Before this was an agency, it was ad spend and P&L reports. One thing held true every time: marketing dollars poured into a site with a shaky foundation get wasted. Anyone telling you to start running ads before your site's foundation is right is pointing you the wrong way.";

export const foundationScope =
  "Security and real title tags & meta descriptions come standard on every site we build, every tier. Schema markup and a true keyword-mapped structure — the ones built from the competitor & keyword audit — start at the Foundation tier and up.";

export const foundationPillars = [
  {
    title: "Security",
    body: "SSL by default and hosting that isn't held together with outdated plugins — table stakes for visitor trust and search rankings alike.",
    icon: ShieldCheck,
  },
  {
    title: "Schema markup",
    body: "Structured data that tells Google exactly what your business is, where it is, and what you offer — the difference between a plain link and a rich result.",
    icon: Braces,
  },
  {
    title: "Keyword-mapped structure",
    body: "Every page is built around real search terms your customers use — including the local, location-based searches people actually type — mapped from the competitor & keyword audit, not guessed at after launch.",
    icon: MapPinned,
  },
  {
    title: "Title tags & meta descriptions",
    body: "The unglamorous stuff that decides whether someone clicks your result or the one above it. Written on purpose, not left blank.",
    icon: Tag,
  },
];

export const realResults = [
  {
    stat: "5–7x",
    label: "Return on ad spend running marketing for a $15M company",
  },
  {
    stat: "2–3x",
    label: "More conversions after a website rebuild for a dumpster rental company",
  },
  {
    stat: "6x",
    label: "ROI on Google Ads for a plumbing company",
  },
  {
    stat: "3x",
    label: "ROI on Google Ads for an HVAC company",
  },
];

export const whyUs = [
  {
    title: "Real marketing experience, not just design",
    body: "We've run marketing for a $15M company and generated a 5–7x return on ad spend — not just built landing pages and hoped. 20+ years of combined in-house and agency experience on our team means we know what a site actually needs to do, not just how it should look.",
    icon: TrendingUp,
  },
  {
    title: "Lean by design",
    body: "No sales team, no account managers, no agency overhead. You'll talk to the same person every time. We use AI to handle production work, which is how we deliver agency-level builds for a fraction of the cost — not by cutting corners on the strategy.",
    icon: Feather,
  },
  {
    title: "Built to be checked, not just believed",
    body: "Every price on this page is real. No portfolio filler, no fake reviews, no ‘Sarah just requested a quote’ pop-ups. If we say it, it's true — and if we can't prove it yet, we won't claim it.",
    icon: BadgeCheck,
  },
];
