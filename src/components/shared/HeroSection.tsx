import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { DarkModeProps } from '../../types';

const HeroSection: React.FC<DarkModeProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const textColor = darkMode ? '#DFE1FF' : '#25194D';

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-4 pt-10 md:mb-20 mb-8 transition-all duration-500"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ color: textColor }}
        className="text-[30px] leading-[38px] lg:leading-[100px] md:text-6xl md:leading-[80px] lg:text-[80px] font-bold mb-8"
      >
        Turning Dreams into<br />Extraordinary Events
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        style={{ color: textColor }}
        className="font-normal text-sm md:text-xl max-w-2xl md:mb-14 mb-8"
      >
        Evently is your trusted partner in creating unforgettable events, from intimate
        gatherings to large celebrations. We bring your vision to life with meticulous
        detail, creative flair, and expert coordination, ensuring a seamless, stress-free
        experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        className="flex sm:gap-10 gap-4"
      >
        <button
          style={{ color: textColor }}
          className={`md:px-20 px-8 md:py-4 py-2 border border-[#624CF5] text-[#6440EB] rounded-md ${darkMode ?  "hover:bg-gray-900" : "hover:bg-gray-50"} transition-colors`}
        >
          Find Event
        </button>
        <Link
          to="/events/create"
          className="md:px-20 px-8 md:py-4 py-2 bg-gradient-to-r from-[#624CF5] to-[#6440EB] text-white rounded-md hover:bg-gradient-to-l hover:from-[#5a4cb1] hover:to-[#5536c4] transition-colors"
        >
          Create Event
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
