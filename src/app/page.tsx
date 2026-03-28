
import HeroBanner from "@/shared/components/HeroBanner";
import LogoCloudSection from "@/shared/components/LogoCloudSection";
import FeaturesSection from "@/shared/components/FeaturesSection";
import StatsSection from "@/shared/components/StatsSection";
import FaqSection from "@/shared/components/FaqSection";
import BlogSection from "@/shared/components/BlogSection";
import TestimonialsSection from "@/shared/components/TestimonialsSection";
import ContactUsSection from "@/shared/components/ContactUsSection";

export default function Home() {
  return (
    <main className="home-page">
      <HeroBanner />
      <LogoCloudSection />
      <FeaturesSection />
      <StatsSection />
      <FaqSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactUsSection />
    </main>
  );
}
