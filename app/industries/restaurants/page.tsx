import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { RestaurantExampleSection } from "@/components/industries/RestaurantExampleSection";
import { ShoesSection } from "@/components/ShoesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { RestaurantHighlights } from "@/components/industries/RestaurantHighlights";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { FoundationSection } from "@/components/FoundationSection";
import { OwnershipSection } from "@/components/OwnershipSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { getUnsplashPhoto } from "@/lib/unsplash";

export const metadata: Metadata = {
  title: "Restaurant Website Design | Even Ground Co.",
  description:
    "Websites for restaurants in Louisville and Nashville, built mobile-first with an easy-to-update menu, map and hours up front, and real design around your food. Transparent pricing, no lock-in contracts.",
};

export default async function RestaurantsPage() {
  const photo = await getUnsplashPhoto(
    "mexican food tacos vibrant",
    "Vibrant Mexican dish, example restaurant photography"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection
        eyebrow="Websites for restaurants"
        headline="A website that gets people in the door, not just looking at your menu online."
        subhead="Even Ground Co. builds restaurant websites for a fraction of what agencies charge — mobile-first design, a menu you can actually update yourself, and hours and location that are impossible to miss. No sales team, no lock-in contracts."
      />
      <RestaurantExampleSection photo={photo} />
      <ShoesSection />
      <ResultsSection />
      <RestaurantHighlights />
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
      <ContactSection />
      <SiteFooter location="Louisville, KY · Nashville, TN" />
    </div>
  );
}
