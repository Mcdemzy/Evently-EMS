import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

const ImageSlider = () => {
  return (
    <>
      {/* Image slider */}
      <div className="hidden md:block w-1/2 relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center">
              <img
                src="images/event.png"
                alt="Event 1"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Dream big, plan bigger, and make magic happen.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center">
              <img
                src="images/event2.png"
                alt="Event 2"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Create unforgettable moments.
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full flex items-center justify-center">
              <img
                src="images/event3.png"
                alt="Event 3"
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  Plan events that matter.
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link
          to="/login"
          className="absolute top-4 right-4 text-white bg-opacity-30 bg-black p-2 border border-white border-solid w-20 flex justify-center rounded-3xl z-[10000]"
        >
          Sign in
        </Link>
      </div>
    </>
  );
};

export default ImageSlider;
