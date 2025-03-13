import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "../../../types/validationSchemas";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://evently-ems-backend.vercel.app/api/users/forgot-password",
        { email: data.email }
      );

      if (response.status === 200) {
        navigate("/email-code", { state: { email: data.email } });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

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
        <div className="mt-[40px] md:mt-[100px] mb-[40px] md:mb-[80px]">
          <h1 className="text-4xl font-semibold mb-3">Forgot Password</h1>
          <p className="text-lg text-gray-600">
            Please input your email address to reset your password
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Email Field */}
          <div className="relative mb-6">
            <FaRegEnvelope className="absolute left-4 top-5 text-gray-500" />
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

          {/* Error Message */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6440EB] text-white rounded-md disabled:bg-[#DCDCDC] disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Get Code"}
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
