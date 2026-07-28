import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ShoesSection } from "@/components/ShoesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { FoundationSection } from "@/components/FoundationSection";
import { OwnershipSection } from "@/components/OwnershipSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { LocationSection } from "@/components/LocationSection";
import { FoundingClientSection } from "@/components/FoundingClientSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection
        eyebrow="Websites for small business owners"
        headline="A website built to beat your competition — not just have one."
        subhead="Even Ground Co. builds professional small business websites for a fraction of what agencies charge. No sales team, no lock-in contracts — just real marketing experience and AI-powered production."
      />
      <ShoesSection />
      <ResultsSection />
      <ProcessSection />
      <PricingSection />
      <FoundationSection />
      <OwnershipSection />
      <WhyUsSection />
      <LocationSection
        eyebrow="Now serving Louisville and Nashville"
        heading="Louisville-born. Now serving Nashville too."
        body="We started Even Ground Co. in Louisville, built on real relationships and referrals — not a city-page list, and not a sales pitch read from a call center in another state. We're bringing that same audit-first, no-lock-in approach to Nashville next."
        links={[
          { label: "See Louisville", href: "/louisville" },
          { label: "See Nashville", href: "/nashville" },
        ]}
      />
      <FoundingClientSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter location="Louisville, KY · Nashville, TN" />
    </div>
  );
}
