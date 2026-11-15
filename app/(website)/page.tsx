import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyLapsaSection from "@/components/home/WhyLapsaSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import InsightsSection from "@/components/home/InsightsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyLapsaSection />
      <ProjectsSection />
      <InsightsSection />
    </>
  );
}