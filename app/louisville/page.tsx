import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ShoesSection } from "@/components/ShoesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { FoundationSection } from "@/components/FoundationSection";
import { OwnershipSection } from "@/components/OwnershipSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Louisville Website Design | Even Ground Co.",
  description:
    "Professional websites for Louisville small businesses, built by real marketers using AI-powered production. Transparent pricing, no lock-in contracts, you own your site.",
};

export default function LouisvillePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection
        eyebrow="Websites for Louisville small business owners"
        headline="A website built to beat your Louisville competition — not just have one."
        subhead="Even Ground Co. builds professional websites for Louisville small businesses for a fraction of what agencies charge. No sales team, no lock-in contracts — just real marketing experience and AI-powered production."
      />
      <ShoesSection />
      <ProcessSection />
      <PricingSection />
      <FoundationSection />
      <OwnershipSection />
      <WhyUsSection />
      <LocationSection
        eyebrow="Proudly Louisville"
        heading="Started right here, built on real relationships."
        body="Even Ground Co. started in Louisville — no city-page list, no programmatic SEO shortcut. Just real referrals and real client relationships in a city we actually know, not a sales pitch read from a call center in another state. We serve Louisville and the surrounding area, including Jeffersontown, St. Matthews, Middletown, Prospect, and New Albany and Jeffersonville across the river."
        links={[{ label: "We're also in Nashville", href: "/nashville" }]}
      />
      <ContactSection />
      <SiteFooter location="Louisville, KY" />
    </div>
  );
}
