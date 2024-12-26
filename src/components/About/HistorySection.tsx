// HistorySection.tsx
import React from "react";
import SectionTitle from "./SectionTitle";

const HistorySection: React.FC = () => {
  return (
    <section className="mt-16 py-8 px-4 lg:px-24">
      <SectionTitle title="Our History" />
      <div className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify flex flex-col gap-6 leading-7 lg:leading-8 dark:text-[#DFE1FF]">
        <p>
          Evently was born out of a deep passion for creating memorable
          experiences. Founded by a team of event enthusiasts with diverse
          backgrounds in event planning, hospitality, and design, Evently began
          as a small boutique agency focused on delivering personalized service
          to a select group of clients. Our founders, who each brought years of
          industry experience to the table, shared a common vision: to redefine
          what it means to create an event by focusing on the details that
          matter most.
        </p>
        <p>
          From our humble beginnings, we quickly gained a reputation for our
          creativity, reliability, and dedication to our clients. Word of mouth
          spread, and Evently began to grow, taking on larger projects and
          expanding our team of talented professionals. Despite our growth, we
          have remained true to our core values of personalized service and
          attention to detail. Every event, no matter how big or small, is
          treated with the same level of care and commitment.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
