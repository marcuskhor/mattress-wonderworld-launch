import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlideshow />
      <WelcomeSection />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
