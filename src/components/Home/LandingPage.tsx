import { Suspense, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import HeroSection from '../shared/HeroSection';
import ExploreNow from '../shared/ExploreNow';
import React from 'react';

const TrendingEvents = React.lazy(() => import('../shared/TrendingEvents'));
const NewEvents = React.lazy(() => import('../shared/NewEvents'));
const FAQ = React.lazy(() => import('../shared/FAQ'));
const Footer = React.lazy(() => import('../shared/Footer'));
const NewsLetter = React.lazy(() => import('../shared/NewsLetter'));
const PricingSection = React.lazy(() => import('../shared/PricingSection'));

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`transition-all duration-500 overflow-hidden ${
        darkMode ? 'dark' : 'light'
      }`}
    >
      <div
        className={`min-h-screen ${
          darkMode ? 'bg-black' : 'bg-white'
        } transition-all duration-500`}
        style={{ color: darkMode ? '#DFE1FF' : '#25194D' }}
      >
        <div className="flex justify-end p-4 fixed top-0 w-full z-10">
          <div
            onClick={toggleDarkMode}
            className="relative w-9 h-9 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer"
          >
            <button
              onClick={toggleDarkMode}
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                darkMode ? 'translate-x-[-150%]' : 'translate-x-[30%]'
              }`}
            >
              <FiMoon size={18} className="text-gray-300" />
            </button>
            <button
              onClick={toggleDarkMode}
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                darkMode ? 'translate-x-[-70%]' : 'translate-x-[1500%]'
              }`}
            >
              <FiSun size={18} className="text-yellow-500" />
            </button>
          </div>
        </div>

        <HeroSection darkMode={darkMode} />

        <ExploreNow darkMode={darkMode} />

        <Suspense fallback={<div>Loading TrendingEvents...</div>}>
          <TrendingEvents darkMode={darkMode} />
        </Suspense>

        <Suspense fallback={<div>Loading NewEvents...</div>}>
          <NewEvents darkMode={darkMode} />
        </Suspense>

        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<div>Loading PricingSection...</div>}>
          <PricingSection darkMode={darkMode} />
        </Suspense>

        <Suspense fallback={<div>Loading NewsLetter...</div>}>
          <NewsLetter darkMode={darkMode} />
        </Suspense>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer darkMode={darkMode} />
        </Suspense>
      </div>
    </div>
  );
}

export default LandingPage;
