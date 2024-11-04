import { EventData } from './Cards/data';
import Card from './Cards/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewEvents: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className={`pt-20 dark:bg-black dark:text-white`}
    >
      <motion.h2
        className="text-[30px] lg:text-[40px] font-bold text-center leading-[60px] md:mb-2 mb-1 uppercase"
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        NEW EVENTS
      </motion.h2>
      <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] mx-auto border-gray-800 dark:border-white"></div>
      <motion.p
        className="text-center font-normal text-base md:text-xl mt-2 leading-5 md:leading-[60px]"
        variants={paragraphVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Check out events, festivals and parties that are coming up so you don’t
        miss out
      </motion.p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2, centeredSlides: true },
          1280: { slidesPerView: 3, centeredSlides: true },
        }}
        className="max-w-screen-xl mx-auto mt-5"
      >
        {EventData.map((event, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                title={event.title}
                price={event.price}
                description={event.description}
                date={event.date}
                time={event.time}
                organizer={event.organizer}
                imageUrl={event.imageUrl}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewEvents;
