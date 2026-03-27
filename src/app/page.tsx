
import HeroBanner from "@/shared/components/HeroBanner";
import LogoCloudSection from "@/shared/components/LogoCloudSection";
import FeaturesSection from "@/shared/components/FeaturesSection";
import StatsSection from "@/shared/components/StatsSection";
import FaqSection from "@/shared/components/FaqSection";
import BlogSection from "@/shared/components/BlogSection";
import TestimonialsSection from "@/shared/components/TestimonialsSection";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <LogoCloudSection />
      <FeaturesSection />
      <StatsSection />
      <FaqSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}
