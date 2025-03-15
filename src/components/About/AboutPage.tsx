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
// import Footer from "../shared/Footer";
import MissionSection from "./MissionSection";

const AboutPage: React.FC = () => {
  return (
    <main className="dark:bg-black pt-[124px] pb-16">
      <PageHeader />
      <IntroSection />
      <WhatIsEvently />
      <MissionSection />
      <VisionSection />
      <HistorySection />
      <QuestionSection />
      <PricingSection />
      <NewsLetter />
      {/* <Footer /> */}
    </main>
  );
};

export default AboutPage;
