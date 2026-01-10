import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import Benefits from '@/components/Benefits';
import WhyItMakesSense from '@/components/WhyItMakesSense';
import TargetAudience from '@/components/TargetAudience';
import Offer from '@/components/Offer';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <AppShowcase />
      <Benefits />
      <WhyItMakesSense />
      <TargetAudience />
      <Offer />
      <Security />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
