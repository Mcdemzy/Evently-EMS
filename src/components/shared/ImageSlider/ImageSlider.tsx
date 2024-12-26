import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link, useLocation } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

const ImageSlider = () => {
  const location = useLocation();

  return (
    <>
      {/* Image slider */}
      <div className="hidden md:block w-1/2 relative">
        {/* Solid dark overlay */}
        <div className="inset-0 bg-black bg-opacity-50 absolute z-10"></div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center relative">
              <img
                src="images/Event 1.png"
                alt="Event 1"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white z-20">
                {' '}
                {/* Place text above overlay */}
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Dream big, plan bigger, and make magic happen.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center relative">
              <img
                src="images/Event 2.png"
                alt="Event 2"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white z-20">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Create unforgettable moments.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center relative">
              <img
                src="images/Event 3.png"
                alt="Event 3"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white z-20 ">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Plan events that matter.
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Link
          to={location.pathname === '/login' ? '/signup' : '/login'}
          className="absolute top-4 right-4 text-white bg-opacity-30 bg-black p-2 border border-white border-solid flex items-center gap-1 rounded-3xl z-30"
        >
          {location.pathname === '/login' ? 'Sign up' : 'Sign in'}
          <FaArrowRight className="ml-1" />
        </Link>
      </div>
    </>
  );
};

export default ImageSlider;
