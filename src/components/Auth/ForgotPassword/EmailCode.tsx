import { useState, useEffect } from "react";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailCodeSchema,
  EmailCodeFormData,
} from "../../../types/validationSchemas";

const EmailCode = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailCodeFormData>({
    resolver: zodResolver(emailCodeSchema),
  });

  const [timeLeft, setTimeLeft] = useState<number>(300);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const email = state?.email;
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const onSubmit = async (data: EmailCodeFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://evently-ems-backend.vercel.app/api/users/verify-otp",
        { email, otp: data.code.join("") } // Join the array into a single string
      );

      if (response.status === 200) {
        navigate("/reset-password", { state: { email } });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left side - Image slider */}
      <ImageSlider />
      {/* Right side - Email verification form */}
      <main className="pt-8 min-h-screen w-full lg:w-1/2 px-4 lg:px-10 overflow-y-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Email Verification Heading */}
<<<<<<< HEAD
        <div className="mt-[40px] mb-[40px] lg:mb-[80px]">
=======
        <div className="mt-[40px] mb-[40px] lg:mb-[80px]">
>>>>>>> 8be86a179be12c7950467c6205b45ee189b818c7
          <h1 className="text-4xl font-semibold mb-3">Email Verification</h1>
          <p className="text-lg text-gray-600">
            We’ve sent a 6-digit code to{" "}
            <span className="font-medium">{email}</span>
          </p>
        </div>

        {/* Code Input Fields */}
        <div className="flex justify-between max-w-xs mb-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              {...register(`code.${index}`)} // Register each input as part of the `code` array
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:border-[#6440EB] outline-none"
            />
          ))}
        </div>
        {errors.code && (
          <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
        )}

        {/* Error Message */}
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        {/* Countdown and Resend Code */}
        <p className="text-sm text-gray-600 mb-6">
          Code expires in{" "}
          <span className="font-bold">{`${Math.floor(timeLeft / 60)}:${(
            timeLeft % 60
          )
            .toString()
            .padStart(2, "0")}`}</span>
          <span className="ml-4 text-[#6440EB] cursor-pointer hover:underline">
            Resend code
          </span>
        </p>

        {/* Confirm Code Button */}
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="w-full p-3 rounded-md text-white font-bold text-xs leading-4 disabled:opacity-50"
          style={{
            backgroundColor: errors.code ? "#DCDCDC" : "#6440EB",
          }}
          disabled={!!errors.code || loading}
        >
          {loading ? "Verifying..." : "Confirm code"}
        </button>

        {/* Sign-up Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#6440EB] font-medium cursor-pointer hover:underline"
          >
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default EmailCode;
