import About from "@/components/About";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/InstagramFeed";
import InstagramGrid from "@/components/InstagramGrid";
import ProductionSection from "@/components/ProductionSection";
import Raagam from "@/components/Raagam";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import WhatsApp from "@/components/Whatsapp";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <ProductionSection/>
      <WhyChoose/>
      <Raagam/>
      <Sponsors/>
      <Testimonials/>
      
      <FeatureSection/>
      <Footer/>
      <WhatsApp/>
    </>
  );
}
