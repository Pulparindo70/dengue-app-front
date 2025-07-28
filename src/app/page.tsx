import LandingHero from "@/components/landing/LandingHero";
import LandingInfo from "@/components/landing/LandingInfo";
import LandingStats from "@/components/landing/LandingStats";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingCTA from "@/components/landing/LandingCTA";

export default function HomePage() {
  return (
    <main className="space-y-20 pb-20">
      <LandingHero />
      <LandingInfo />
      <LandingStats />
      <LandingFeatures />
      <LandingCTA />
    </main>
  );
}
