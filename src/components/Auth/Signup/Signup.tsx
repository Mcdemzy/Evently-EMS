import { Link } from "react-router-dom";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Signup form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Get Started Heading */}
        <div className="mt-[40px] mb-[40px] md:mb-[80px]">
          <h1 className="text-4xl font-semibold mb-3">Get Started</h1>
          <p className="text-lg text-gray-600">
            Welcome to Evently - Let’s create your account
          </p>
        </div>

        {/* Form Section */}
        <form action="">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-x-2 mb-6">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                placeholder="First Name"
                className="border w-full p-4 pl-10 rounded-md"
              />
            </div>
            <div className="relative w-full md:w-1/2">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                placeholder="Last Name"
                className="border w-full p-4 pl-10 rounded-md"
              />
            </div>
          </div>

          {/* Username Field */}
          <div className="relative mb-4">
            <FaUser className="absolute left-4 top-5 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="border w-full p-4 pl-10 pr-10 rounded-md"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border w-full p-4 pl-10 pr-10 rounded-md"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute right-4 top-5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" id="terms" className="w-5 h-5" />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Auth */}
          <div className="relative w-full border rounded-md flex items-center justify-center py-3 cursor-pointer hover:bg-gray-200 mb-6">
            <FcGoogle className="mr-2 text-xl" />
            <p className="text-gray-700">Continue with Google</p>
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-3 bg-gray-400 text-white rounded-md cursor-not-allowed"
            disabled
          >
            Continue
          </button>

          {/* Sign-in Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer">
              Sign in
            </Link>
          </p>
        </form>
      </main>
      {/* Right side - Image slider */}
      <ImageSlider />
    </div>
  );
};

export default Signup;
