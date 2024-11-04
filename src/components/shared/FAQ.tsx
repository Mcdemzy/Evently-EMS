import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useOutsideClick from './OutsideClick/useOutsideClick';
import { FAQItem } from '../../types';
import { faqData } from './FAQ/data';

const FaqItem: React.FC<{
  item: FAQItem;
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}> = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  const ref = useOutsideClick(() => {
    if (isOpen) setOpenIndex(null);
  });

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<string | number>(0);

  React.useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`mb-4 rounded-2xl ${
        isOpen ? 'bg-[#624CF5] text-white' : 'bg-[#EDEFFF] dark:bg-[#624CF5]'
      }`}
    >
      <button
        className="w-full p-4 bg-lavender-50 hover:bg-lavender-100 rounded-lg flex justify-between items-center"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="text-left font-normal md:text-xl text-base">
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`faq-answer ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div className="px-4 pb-4 bg-[#624CF5] text-white font-normal text-sm rounded-lg">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.8 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          type: 'spring',
          stiffness: 50,
          ease: 'easeOut',
        },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.8,
          type: 'spring',
          stiffness: 50,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="md:max-w-7xl w-full mx-auto p-6 pt-20 dark:bg-black dark:text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
    >
      <h2 className="text-[30px] lg:text-[40px] font-bold text-center leading-[60px] md:mb-2 mb-1 uppercase">
        FAQ
      </h2>
      <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
      <p className="text-center font-normal text-base md:text-xl mt-2 mb-10 leading-5 md:leading-[60px]">
        Our most frequently asked questions and answers
      </p>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          item={item}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </motion.div>
  );
};

export default FAQ;