import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Countdown = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2024-12-01T23:59:59").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <>
      <main
        className={`flex flex-col items-center justify-center h-screen transition-colors ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="absolute top-5 right-5 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-bounce">
          Evently🔥🔥
        </h1>

        <div className="flex space-x-6 text-center">
          <div>
            <p className="text-5xl font-bold">{timeLeft.days}</p>
            <p className="uppercase text-sm tracking-wider">Days</p>
          </div>
          <div>
            <p className="text-5xl font-bold">{timeLeft.hours}</p>
            <p className="uppercase text-sm tracking-wider">Hours</p>
          </div>
          <div>
            <p className="text-5xl font-bold">{timeLeft.minutes}</p>
            <p className="uppercase text-sm tracking-wider">Minutes</p>
          </div>
          <div>
            <p className="text-5xl font-bold">{timeLeft.seconds}</p>
            <p className="uppercase text-sm tracking-wider">Seconds</p>
          </div>
        </div>

        <p className="mt-12 text-lg">
          Stay tuned! We are working on something amazing.
        </p>

        {/* Floating animation */}
        <div className="absolute bottom-10 w-[80px] h-[80px] bg-purple-500 rounded-full opacity-75 animate-float"></div>
      </main>

      {/* Custom Animation for Floating Effect */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Countdown;
