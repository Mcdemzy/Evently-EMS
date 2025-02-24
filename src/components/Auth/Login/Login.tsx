import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import axios from "axios"; // Import Axios
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validate all fields
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Save the token to localStorage or context (optional)
        localStorage.setItem("token", response.data.token);

        // Redirect to profile page after successful login
        navigate("/");
      }
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message || "Invalid email or password.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Login form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
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
        <form onSubmit={handleSubmit}>
          {/* Error Message */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          {/* Email Field */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-4 pl-10 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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

      {/* Right side - Image slider */}
      <ImageSlider />
    </div>
  );
};

export default Login;
