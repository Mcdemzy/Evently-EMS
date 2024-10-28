// VisionSection.tsx
import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 justify-between py-8 px-4 lg:px-20 mt-16">
      <div className="flex-1">
        <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
          <div className="bg-[#624CF5] w-1 h-8"></div>
          <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold">
            Our Vision
          </h1>
        </div>
        <p className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify max-w-full lg:max-w-[600px] mt-4 leading-7 lg:leading-8">
          Our vision is to be the leading event management company known for our
          innovative approach, exceptional service, and ability to create
          meaningful experiences. We aspire to set new standards in the
          industry, where every event we manage is a benchmark for excellence
          and creativity. At Evently, we envision a world where events are not
          just gatherings but transformative experiences that bring people
          together, celebrate milestones, and create lasting memories.
        </p>
      </div>
      <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
        <img
          src="/images/event2.png"
          alt="Event Image"
          className="rounded-tl-[40px] rounded-br-[40px] w-full h-auto"
        />
      </div>
    </section>
  );
};

export default VisionSection;
