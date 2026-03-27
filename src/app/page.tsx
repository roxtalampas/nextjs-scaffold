
import HeroBanner from "@/shared/components/HeroBanner";
import LogoCloudSection from "@/shared/components/LogoCloudSection";
import FeaturesSection from "@/shared/components/FeaturesSection";
import StatsSection from "@/shared/components/StatsSection";
import FaqSection from "@/shared/components/FaqSection";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <LogoCloudSection />
      <FeaturesSection />
      <StatsSection />
      <FaqSection />
    </main>
  );
}
