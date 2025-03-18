import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import axios from "axios";

const CheckEmail = () => {
  const { state } = useLocation();
  const email = state?.email;
  const navigate = useNavigate();

  const handleResendEmail = async () => {
    try {
      const response = await axios.post(
        "https://evently-ems-backend.vercel.app/api/users/resend-verification-email",
        { email }
      );

      if (response.status === 200) {
        alert("Verification email sent successfully!");
        navigate("/login");
      }
    } catch (err: any) {
      alert(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Image slider */}
      <ImageSlider />

      {/* Right side - Check Email form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Check Email Heading */}
        <div className="mt-[40px] mb-[40px]">
          <h1 className="text-4xl font-semibold mb-3">Check Your Email</h1>
          <p className="text-lg text-gray-600">
            We’ve sent a verification email to{" "}
            <span className="font-medium">{email}</span>. Please check your
            inbox and follow the instructions to verify your account.
          </p>
        </div>

        {/* Resend Email Button */}
        <button
          onClick={handleResendEmail}
          className="w-full py-3 bg-[#6440EB] text-white rounded-md hover:bg-[#5b3ad2]"
        >
          Resend Verification Email
        </button>

        {/* Sign-in Link */}
        <p className="text-center mt-4 text-gray-600">
          Already verified your email?{" "}
          <Link to="/login" className="text-blue-600 cursor-pointer">
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
};

export default CheckEmail;
