// import "swiper/css";
// import "swiper/css/pagination";
import { Link } from "react-router-dom";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";

const Signup = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Signup form */}
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

      {/* Right side - Image slider */}
      <ImageSlider />
    </div>
  );
};

export default Signup;
