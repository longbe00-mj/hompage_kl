import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import PainPointSection from "./components/PainPointSection";
import ServicesSection from "./components/ServicesSection";
import ConsultingSection from "./components/ConsultingSection";
import InterviewSection from "./components/InterviewSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <PainPointSection />
        <ServicesSection />
        <ConsultingSection />
        <InterviewSection />
      </main>
      <Footer />
    </div>
  );
}
