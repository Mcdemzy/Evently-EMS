import { Link, useNavigate } from "react-router-dom";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "../../../types/validationSchemas"; // Import Zod schema and type

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema), // Integrate Zod validation
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "https://evently-ems-backend.vercel.app/api/users/register",
        data
      );

      if (response.status === 201) {
        navigate("/check-email", { state: { email: data.email } });
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
        <div className="mt-[40px] mb-[40px]">
          <h1 className="text-4xl font-semibold mb-3">Get Started</h1>
          <p className="text-lg text-gray-600">
            Welcome to Evently - Let’s create your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Error and Success Messages */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          {success && (
            <div className="mb-4 text-green-500 text-sm">{success}</div>
          )}

          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-x-2 mb-6">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className="border w-full p-4 pl-10 rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="relative w-full md:w-1/2">
              <FaUser className="absolute left-4 top-5 text-gray-500" />
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="border w-full p-4 pl-10 rounded-md"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Username Field */}
          <div className="relative mb-4">
            <FaUser className="absolute left-4 top-5 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="border w-full p-4 pl-10 rounded-md"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              {...register("email")}
              className="border w-full p-4 pl-10 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              {...register("password")}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6440EB] text-white rounded-md hover:bg-[#5b3ad2]"
            disabled={loading}
          >
            {loading ? "Registering..." : "Continue"}
          </button>

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
