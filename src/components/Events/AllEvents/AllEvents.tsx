import {
  // FaCalendarAlt,
  // FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import TrendingEvents from "../../shared/TrendingEvents";
import { useState } from "react";
import Footer from "../../shared/Footer";

const AllEvents = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <main className=" py-10 dark:bg-black dark:text-white">
        {/* Search Bar with Filter */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-3/4 md:w-1/2 space-x-4">
            {/* Search Bar Label */}
            <label className="text-[#7F7F7F] text-[1.25rem] font-normal">
              What event are you looking for?
            </label>

            {/* Dropdown Filter */}
            <div className="relative">
              <button className="flex items-center bg-gray-200 text-gray-700 rounded-full py-2 px-4 shadow-md">
                <span>All</span>
                <FaChevronDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <div className="relative w-3/4 md:w-1/2">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-full shadow-md focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        <TrendingEvents />

        <div onClick={toggleDarkMode}></div>
      </main>
      <Footer />
    </>
  );
};

export default AllEvents;
