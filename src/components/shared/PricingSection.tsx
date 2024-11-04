import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`text-center mb-16 p-12 mt-10 rounded-lg flex flex-col justify-center bg-[#EDEFFF] dark:bg-[#0D0D0D] dark:text-white`}
    >
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-semibold text-center md:mb-5 mb-2"
      >
        Pricing
      </motion.h2>
      <motion.p
        variants={paragraphVariants}
        className="text-center md:text-base text-sm font-normal md:mb-10 mb-7"
      >
        Check all the pricing and features it comes with to know which suits you
        best.
      </motion.p>
      <motion.div variants={buttonVariants} className="flex justify-center">
        <button className="bg-gradient-to-r from-[#624CF5] to-[#624CF5] hover:from-[#5a4cb1] hover:to-[#5536c4] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition duration-300 max-w-[177px]">
          View Pricing
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PricingSection;
