import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        { email }
      );

      if (response.status === 200) {
        navigate("/forgot-password/email-code", { state: { email } }); // Pass email to the next page
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
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email Field */}
          <div className="relative mb-6">
            <FaRegEnvelope className="absolute left-4 top-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full p-4 pl-10 rounded-md"
              required
            />
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
