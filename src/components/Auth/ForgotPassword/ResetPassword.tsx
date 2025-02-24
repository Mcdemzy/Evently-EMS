import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const email = state?.email; // Get email from the previous page
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/reset-password",
        { email, newPassword: password }
      );

      if (response.status === 200) {
        navigate("/login"); // Redirect to login page
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

      {/* Right side - Reset Password form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Reset Password Heading */}
        <div className="mt-[40px] md:mt-[100px] mb-[40px] md:mb-[80px]">
          <h1 className="text-4xl font-semibold mb-3">Set new password</h1>
          <p className="text-lg text-gray-600">
            Please create a new password for your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Password Input */}
          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full p-4 pl-10 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6440EB]"
            />
            <span
              className="absolute right-4 top-5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-5 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border w-full p-4 pl-10 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6440EB]"
            />
            <span
              className="absolute right-4 top-5 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </span>
          </div>

          {/* Error Message */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6440EB] text-white rounded-md disabled:bg-[#DCDCDC] disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Create password"}
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#6440EB] cursor-pointer">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ResetPassword;
