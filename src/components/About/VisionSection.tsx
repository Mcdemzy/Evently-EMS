// VisionSection.tsx
import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 justify-between py-8 px-4 lg:px-20 mt-16">
      <div className="w-full lg:w-[45%] mt-6 lg:mt-0 relative">
        <div className="absolute inset-0 bg-[#624CF533] rounded-tl-[40px] rounded-br-[40px]"></div>
        <img
          src="/images/event3.png"
          alt="Event Image"
          className="rounded-tl-[40px] rounded-br-[40px] w-full h-auto"
        />
      </div>
      <div className="my-auto">
        <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
          <div className="bg-[#624CF5] w-1 h-8"></div>
          <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold">
            Our Vision
          </h1>
        </div>
        <p className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify max-w-full lg:max-w-[700px] mt-4 leading-7 lg:leading-8 dark:text-[#DFE1FF]">
          Our vision is to become the go-to event management and ticketing
          platform that bridges the gap between event organizers and attendees.
          We strive to foster engagement, enhance experiences, and drive
          inclusivity in event planning through cutting-edge technology, secure
          transactions, and effortless networking.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
