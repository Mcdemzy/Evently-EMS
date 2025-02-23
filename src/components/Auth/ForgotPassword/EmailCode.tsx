import { useState, useEffect } from "react";
import ImageSlider from "../../shared/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";

const EmailCode = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(300);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left side - Image slider */}
      {/* <ImageSlider /> */}
      <ImageSlider />

      {/* Right side - Email verification form */}
      <main className="pt-8 min-h-screen w-full md:w-1/2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" width={28} alt="logo" />
          <p className="text-3xl font-bold">Evently</p>
        </div>

        {/* Email Verification Heading */}
        <div className="mt-[40px] mb-[40px] md:mb-[80px]">
          <h1 className="text-4xl font-semibold mb-3">Email Verification</h1>
          <p className="text-lg text-gray-600">
            We’ve sent a 6-digit code to{" "}
            <span className="font-medium">adenijiadeoluwa05@gmail.com</span>
          </p>
        </div>

        {/* Code Input Fields */}
        <div className="flex justify-between max-w-xs mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1} // Fixed: maxLength should be a number
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:border-[#6440EB] outline-none"
            />
          ))}
        </div>

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
          className="w-full p-3 rounded-md text-white font-bold text-xs leading-4 disabled:opacity-50"
          style={{
            backgroundColor: code.every((digit) => digit)
              ? "#6440EB"
              : "#DCDCDC",
          }}
          disabled={!code.every((digit) => digit)}
        >
          Confirm code
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
