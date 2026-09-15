import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ProductionSection from "@/components/ProductionSection";
import FeatureSection from "@/components/FeatureSection";
import WhyChoose from "@/components/WhyChoose";
import Sponsors from "@/components/Sponsors";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <ProductionSection />
      <FeatureSection />
      <WhyChoose />
      <Sponsors />
      <BookSection />
      <Footer />
    </>
  );
}
