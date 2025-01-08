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
    <main className="dark:bg-black pt-[124px]">
      <PageHeader />
      <IntroSection />
      <WhatIsEvently />
      <VisionSection />
      <HistorySection />
      <QuestionSection />
      <PricingSection />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default AboutPage;
