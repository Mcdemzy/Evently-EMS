// AboutPage.tsx
import React from "react";
import PageHeader from "./PageHeader";
import IntroSection from "./IntroSection";
import WhatIsEvently from "./WhatIsEvently";
import VisionSection from "./VisionSection";
import HistorySection from "./HistorySection";
import QuestionSection from "./QuestionSection";
import NewsLetter from "../shared/NewsLetter";
import PricingSection from "../shared/PricingSection";
import Footer from "../shared/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <IntroSection />
      <WhatIsEvently />
      <VisionSection />
      <HistorySection />
      <QuestionSection />
      <PricingSection darkMode={false} />
      <NewsLetter darkMode={false} />
      <Footer darkMode={false} />
    </>
  );
};

export default AboutPage;
