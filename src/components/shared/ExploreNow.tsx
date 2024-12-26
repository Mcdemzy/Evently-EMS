import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ExploreNow: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section className="px-4 py-5 md:py-10 flex justify-center items-center dark:bg-black dark:text-white md:pt-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="font-medium text-[30px] leading-[34px] lg:text-[38px] lg:leading-[46px] xl:text-[48px] xl:leading-[60px] dark:text-[#EDEFFF]">
              Host, Connect, Celebrate:
              <br />
              <span className="font-bold">Your Events, Our Platform!</span>
            </h1>
            <p className="md:text-[24px] md:leading-[36px] text-[20px] font-normal leading-[30px] tracking-[2%] dark:text-[#EDEFFF]">
              With Evently, your event is not just planned—it’s perfectly
              orchestrated.
            </p>
            <Link to="#events">
              <button className="bg-[#6C63FF] text-white px-20 py-2 font-semibold text-base rounded-lg hover:bg-[#4f46e5] w-full sm:w-fit h-12 dark:bg-[#4f46e5] dark:hover:bg-[#3c3b9b]">
                Explore Now
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/assets/images/hero.png"
                alt="hero"
                className="w-auto h-auto 2xl:max-h-[50vh] max-h-[70vh] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExploreNow;
