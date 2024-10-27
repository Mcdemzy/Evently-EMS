// WhatIsEvently.tsx
import React from "react";

const WhatIsEvently: React.FC = () => {
  return (
    <section className="bg-[#EDEFFF] w-full py-10 lg:py-16 px-4 lg:px-24">
      <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold leading-8 mb-6 text-center lg:text-left">
        What is Evently?
      </h1>
      <div className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify flex flex-col gap-6 leading-7 lg:leading-8">
        <p>
          Evently is more than just an event management company; we are creators
          of experiences that leave lasting impressions. Founded on the
          principles of innovation, dedication, and excellence, Evently has
          quickly become a trusted name in the industry. Our team of seasoned
          professionals brings together expertise from various fields, including
          event planning, design, logistics, and entertainment, to deliver a
          seamless and stress-free experience for our clients.
        </p>
        <p>
          We pride ourselves on our ability to take your ideas and transform
          them into reality. Whether you have a clear vision or just the
          beginning of an idea, we work closely with you to design and execute
          an event that reflects your personality, brand, and goals. Our
          holistic approach ensures that every element, from venue selection to
          vendor coordination, is perfectly orchestrated, allowing you to relax
          and enjoy the moment.
        </p>
      </div>
    </section>
  );
};

export default WhatIsEvently;
