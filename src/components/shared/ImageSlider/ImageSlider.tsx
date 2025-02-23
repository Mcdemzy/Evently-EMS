import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "images/Event 1.png",
    caption: "Dream big, plan bigger, and make magic happen.",
  },
  {
    image: "images/Event 2.png",
    caption: "Create unforgettable moments.",
  },
  {
    image: "images/Event 3.png",
    caption: "Plan events that matter.",
  },
];

const ImageSlider = () => {
  const location = useLocation();

  return (
    <div className="hidden md:block w-1/2 relative min-h-[140vh]">
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full flex items-center justify-center relative">
              <img
                src={slide.image}
                alt={`Event ${index + 1}`}
                className="h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 p-8 text-white z-20">
                <h2 className="text-[1.5rem] font-semibold text-center">
                  {slide.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        to={location.pathname === "/login" ? "/signup" : "/login"}
        className="absolute top-4 right-8 text-white bg-opacity-30 bg-black p-2 border border-white border-solid flex items-center gap-1 rounded-3xl z-30 hover:bg-opacity-50"
      >
        {location.pathname === "/login" ? "Sign up" : "Sign in"}
        <FaArrowRight className="ml-1" />
      </Link>
    </div>
  );
};

export default ImageSlider;
