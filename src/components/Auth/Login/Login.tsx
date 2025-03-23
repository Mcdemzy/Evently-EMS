import { Link, useNavigate, useLocation } from "react-router-dom";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import axios from "axios";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../../../types/validationSchemas";
import Loader from "../../shared/Loader/Loader";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://evently-ems-backend.vercel.app/api/users/login",
        data
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        // Redirect logic
        const from = location.state?.from?.pathname || "/"; // Get the intended route or default to home
        navigate(from, { replace: true });
      }
    } catch (err: any) {
      if (
        err.response?.data?.message ===
        "Please verify your email before logging in."
      ) {
        navigate("/check-email", { state: { email: data.email } });
      } else {
        setError(err.response?.data?.message || "Invalid email or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {loading && <Loader />}
      <ImageSlider />
      <main className="pt-8 min-h-screen w-full lg:w-1/2 px-4 lg:px-10 overflow-y-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Welcome Back Heading */}
        <div className="mt-[40px] mb-[40px]">
          <h1 className="text-4xl font-semibold mb-3">Welcome back</h1>
          <p className="text-lg text-gray-600">
            Glad to have you back - Login to your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Error Message */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

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
              placeholder="Password"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-5 h-5" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-blue-600">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6440EB] text-white rounded-md hover:bg-[#5b3ad2]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign in"}
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

          {/* Sign-up Link */}
          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 cursor-pointer">
              Sign up
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
