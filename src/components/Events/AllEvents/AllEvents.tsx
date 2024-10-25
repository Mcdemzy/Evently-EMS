import {
  // FaCalendarAlt,
  // FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import TrendingEvents from "../../shared/TrendingEvents";
import { useState } from "react";

// const eventsData = [
//   {
//     id: 1,
//     image: "/path-to-image/party-zeight.png",
//     title: "PART W ZEIGHT",
//     price: "Free",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "The zone, Gbagada",
//     venue: "Elepe, Ikorodu",
//   },
//   {
//     id: 2,
//     image: "/path-to-image/summer-party.png",
//     title: "SUMMER BEACH HOUSE PARTY",
//     price: "Free",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "Elegushi beach, ikate, Lagos",
//   },
//   {
//     id: 3,
//     image: "/path-to-image/bioskys-playhouse.png",
//     title: "BIOSKY’S PLAYHOUSE",
//     price: "NGN 5,000",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "The zone, Gbagada",
//   },
//   // Duplicate data to match what was shown in the image
//   {
//     id: 4,
//     image: "/path-to-image/party-zeight.png",
//     title: "PART W ZEIGHT",
//     price: "Free",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "The zone, Gbagada",
//     venue: "Elepe, Ikorodu",
//   },
//   {
//     id: 5,
//     image: "/path-to-image/summer-party.png",
//     title: "SUMMER BEACH HOUSE PARTY",
//     price: "Free",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "Elegushi beach, ikate, Lagos",
//   },
//   {
//     id: 6,
//     image: "/path-to-image/bioskys-playhouse.png",
//     title: "BIOSKY’S PLAYHOUSE",
//     price: "NGN 5,000",
//     category: "Pool Party",
//     date: "Sep 13, 2024 1:00 PM",
//     location: "The zone, Gbagada",
//   },
// ];

const AllEvents = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className=" py-10">
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
            {/* Dropdown options (hidden by default, visible on click if implementing interactivity) */}
            {/* Add dropdown functionality later if needed */}
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

      {/* <div className="">
        <h2 className="text-[30px] lg:text-[40px] font-bold text-center text-[#1C1C1C] dark:text-[#EDEFFF] leading-[60px] md:mb-5 mb-1 uppercase">
          TRENDING EVENTS
        </h2>
        <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
        <p className="text-center font-normal text-base md:text-xl md:mt-5 mt-2 leading-5 md:leading-[60px]">
          Elevating Experiences, One Event at a Time
        </p>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-purple-600 text-white py-1 px-3 rounded-lg">
                  {event.price}
                </span>
                <span className="text-gray-600">{event.category}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <TrendingEvents darkMode={darkMode} />

      <div onClick={toggleDarkMode}></div>
    </main>
  );
};

export default AllEvents;
