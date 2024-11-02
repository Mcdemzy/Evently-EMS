// IntroSection.tsx
import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="px-4 py-8 flex flex-col lg:flex-row gap-8 justify-center items-center">
      <div className="w-full lg:w-1/2">
        <img
          src="/images/event.png"
          alt="Event Image"
          className="rounded-tl-[40px] rounded-br-[40px] w-full h-auto"
        />
      </div>
      <div className="text-center lg:text-left px-5 lg:px-8 max-w-full lg:max-w-[50%]">
        <h2 className="text-[#624CF5] text-2xl lg:text-3xl font-medium dark:text-white">
          Welcome to Evently
        </h2>
        <h3 className="text-[#1C1C1C] font-medium text-xl lg:text-2xl leading-10 my-4 dark:text-white">
          Turning dreams into Extraordinary Events.
        </h3>
        <p className="text-[#1C1C1C] font-light text-base lg:text-lg leading-7 lg:leading-8 text-justify dark:text-white">
          At Evently, we believe that every event tells a story—your story.
          Whether you’re celebrating a milestone, launching a product, or
          hosting a corporate gala, our mission is to bring your vision to life
          with creativity, precision, and a touch of magic. From intimate
          gatherings to large-scale celebrations, we handle every detail with
          care, ensuring that your event is not only successful but truly
          memorable.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
