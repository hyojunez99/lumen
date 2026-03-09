import HeroSection from "../components/sections/HeroSection";
import PricingSection from "../components/sections/PricingSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import FunctionSection from "../components/sections/FunctionSection";
import FeatureSection from "../components/sections/FeatureSection";

import './MainPage.scss'

function MainPage() {
  return (
    <main>
      <HeroSection />
      <FunctionSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

export default MainPage;
