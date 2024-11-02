// QuestionSection.tsx
import React from "react";
import { Link } from "react-router-dom";

const QuestionSection: React.FC = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="text-2xl lg:text-[3.5rem] lg:leading-[60px] font-semibold text-[#1C1C1C] mb-4 dark:text-[#EDEFFF]">
        Any question on your mind?
      </h2>
      <p className="lg:text-[2.5rem] font-medium dark:text-[#EDEFFF]">
        <Link to="/contact" className="text-[#FA776C]">
          Contact us
        </Link>{" "}
        here so we can help
      </p>
    </section>
  );
};

export default QuestionSection;
