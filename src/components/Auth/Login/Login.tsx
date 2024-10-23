import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

const Login = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Right side - Image slider */}
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

      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 h-fit pt-5 bg-white flex justify-center items-center">
        <div className="w-4/5 lg:w-2/3">
          <div className="mb-8">
            <div className="flex gap-4">
              <img
                src="images/logo.svg"
                width={30}
                height={50}
                alt="Event Image"
              />
              <span className="md:text-2xl text-xl font-bold">Evently</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Get Started
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome to Evently - Let’s create your account
          </p>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="text-blue-600">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gray-400 rounded-md text-white"
            >
              Continue
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
