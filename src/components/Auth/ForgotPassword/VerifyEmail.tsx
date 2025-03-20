import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = decodeURIComponent(
        new URLSearchParams(location.search).get("token") || ""
      );

      console.log("Token from URL:", token); // Log the token

      if (!token) {
        setMessage("Invalid verification link.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://evently-ems-backend.vercel.app/api/users/verify-email?token=${token}`
        );

        if (response.status === 200) {
          setMessage("Email verified successfully! Redirecting to login...");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error: any) {
        setMessage(
          error.response?.data?.message ||
            "An error occurred during verification."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left side - Image slider or placeholder */}
      <ImageSlider />

      {/* Right side - Verification message */}
      <main className="pt-8 min-h-screen w-full lg:w-1/2 px-4 lg:px-10 overflow-y-auto">
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        <div className="mt-[40px] mb-[40px]">
          <h1 className="text-4xl font-semibold mb-3">Email Verification</h1>
          {loading ? (
            <p className="text-lg text-gray-600">Verifying your email...</p>
          ) : (
            <p className="text-lg text-gray-600">{message}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default VerifyEmail;
