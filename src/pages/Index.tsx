import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChannelCarousel from '@/components/ChannelCarousel';
import PricingSection from '@/components/PricingSection';
import PlatinumSection from '@/components/PlatinumSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Snowfall from '@/components/Snowfall';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Snowfall />
      <Header />
      <main>
        <HeroSection />
        <ChannelCarousel />
        <PricingSection />
        <PlatinumSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
