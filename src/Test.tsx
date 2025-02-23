import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Test = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="pt-[140px] min-h-screen w-1/2 bg-gray-100 px-10">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" width={28} alt="logo" />
        <p className="text-3xl font-bold">Evently</p>
      </div>

      {/* Get Started Heading */}
      <div className="mt-[100px] mb-[80px]">
        <h1 className="text-4xl font-semibold mb-3">Get Started</h1>
        <p className="text-lg text-gray-600">
          Welcome to Evently - Let’s create your account
        </p>
      </div>

      {/* Form Section */}
      <form action="">
        {/* Name Fields */}
        <div className="flex gap-x-2 mb-6">
          <div className="relative w-1/2">
            <FaUser className="absolute left-4 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="First Name"
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>
          <div className="relative w-1/2">
            <FaUser className="absolute left-4 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="Last Name"
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>
        </div>

        {/* Username Field */}
        <div className="relative mb-4">
          <FaUser className="absolute left-4 top-4 text-gray-500" />
          <input
            type="text"
            placeholder="Username"
            className="border w-full p-4 pl-10 rounded-md"
          />
        </div>

        {/* Email Field */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
          <input
            type="email"
            placeholder="Email address"
            className="border w-full p-4 pl-10 rounded-md"
          />
        </div>

        {/* Password Field */}
        <div className="relative mb-4">
          <FaLock className="absolute left-4 top-4 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="border w-full p-4 pl-10 pr-10 rounded-md"
          />
          {showPassword ? (
            <FaRegEyeSlash
              className="absolute right-4 top-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaRegEye
              className="absolute right-4 top-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="relative mb-4">
          <FaLock className="absolute left-4 top-4 text-gray-500" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="border w-full p-4 pl-10 pr-10 rounded-md"
          />
          {showConfirmPassword ? (
            <FaRegEyeSlash
              className="absolute right-4 top-4 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(false)}
            />
          ) : (
            <FaRegEye
              className="absolute right-4 top-4 text-gray-500 cursor-pointer"
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
          <span className="text-blue-600 cursor-pointer">Sign in</span>
        </p>
      </form>
    </main>
  );
};

export default Test;
