import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ImageCarousel from '@/components/sections/ImageCarousel';
import IntroSection from '@/components/sections/IntroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PainPointSection from '@/components/sections/PainPointSection';
import ConsultingSection from '@/components/sections/ConsultingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ImageCarousel />
        <ServicesSection />
        <PortfolioSection />
        <PainPointSection />
        <ConsultingSection />
      </main>
      <Footer />
    </div>
  );
}
