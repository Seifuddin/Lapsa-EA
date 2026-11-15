import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
    </>
  );
}