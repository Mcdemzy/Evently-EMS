// SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
      <div className="bg-[#624CF5] w-1 h-8"></div>
      <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
