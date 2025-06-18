import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ForCreatorsSection } from '@/components/ForCreatorsSection';
import { ForFansSection } from '@/components/ForFansSection';
import { FeaturedExperiencesSection } from '@/components/FeaturedExperiencesSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <ForCreatorsSection />
      <ForFansSection />
      <FeaturedExperiencesSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default IndexPage;
