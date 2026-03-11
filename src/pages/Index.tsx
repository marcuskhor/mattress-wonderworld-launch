import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlideshow />
      <WelcomeSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
