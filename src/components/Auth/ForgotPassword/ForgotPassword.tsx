import { FaRegEnvelope } from "react-icons/fa6";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Image slider */}
      <ImageSlider />

      {/* Right side - Forgot Password form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Forgot Password Heading */}
        <div className="mt-[40px] mb-[40px] md:mb-[80px]">
          <h1 className="text-4xl font-semibold mb-3">Forgot Password</h1>
          <p className="text-lg text-gray-600">
            Please input your email address to reset your password
          </p>
        </div>

        {/* Form Section */}
        <form className="w-full">
          {/* Email Field */}
          <div className="relative mb-6">
            <FaRegEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="border w-full p-4 pl-10 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white rounded-md cursor-not-allowed"
            disabled
          >
            Get Code
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 cursor-pointer">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
}

export default ForgotPassword;
