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
  title: "Nashville Website Design | Even Ground Co.",
  description:
    "Professional websites for Nashville small businesses, built by real marketers using AI-powered production. Transparent pricing, no lock-in contracts, you own your site.",
};

export default function NashvillePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection
        eyebrow="Websites for Nashville small business owners"
        headline="A website built to beat your Nashville competition — not just have one."
        subhead="Even Ground Co. builds professional websites for Nashville small businesses for a fraction of what agencies charge. No sales team, no lock-in contracts — just real marketing experience and AI-powered production."
      />
      <ShoesSection />
      <ProcessSection />
      <PricingSection />
      <FoundationSection />
      <OwnershipSection />
      <WhyUsSection />
      <LocationSection
        eyebrow="Now in Nashville"
        heading="Bringing the same experience-first approach to Nashville."
        body="We built Even Ground Co. in Louisville on real relationships and an audit-first process — no city-page shortcuts. We're bringing that same approach to Nashville: same team, same direct access, no big-agency overhead, and no remote sales rep reading from a script. That includes Nashville and the surrounding area — Franklin, Brentwood, Murfreesboro, Hendersonville, and Mount Juliet."
        links={[{ label: "We're also in Louisville", href: "/louisville" }]}
      />
      <ContactSection />
      <SiteFooter location="Nashville, TN" />
    </div>
  );
}
