import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { FiPhone, FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import RelatedEvents from "./RelatedEvents";
import Footer from "../../shared/Footer";

const EventDetails = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-8 dark:bg-black pt-[124px]">
        <div className="w-full max-w-6xl p-4 lg:flex lg:space-x-8">
          {/* Event Image Section */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src="images/details1.png"
              alt="Event Poster"
              className="w-full rounded-lg shadow-2xl"
            />
            <Link
              to="/get-tickets"
              className="w-full text-center bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg mt-6 text-lg"
            >
              Get Tickets
            </Link>
          </div>

          {/* Event Details Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl text-[#25194D] font-bold dark:text-[#DFE1FF]">
              PARTY W ZEIGHT
            </h1>
            <div className="mt-6 flex items-center space-x-3">
              <span className="bg-[#25194D] text-[#EDEFFF] px-4 py-2 rounded-full font-bold text-base dark:text-[#DFE1FF]">
                Free
              </span>
              <span className="text-base text-[#25194D] dark:text-[#DFE1FF]">
                Pool Party
              </span>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  Sep 13, 2024
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <FaClock className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  1:00 PM
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <FaMapMarkerAlt className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  The Zone, Gbagada
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#25194D] dark:text-[#DFE1FF]">
                About this event
              </h2>
              <p className="mt-6 text-[#25194D] text-lg leading-relaxed dark:text-[#DFE1FF]">
                Dive into a day of non-stop fun at Party w/ Zeight! Splash
                around, groove to the freshest beats, and sip on cool drinks as
                we take over the pool for an unforgettable experience! 🏖️
                <br />
                <br />
                Expect: 🔥🔥 Epic music to keep you moving! 🎵 Refreshing
                cocktails and cool vibes! 🍹 The best poolside energy you’ve
                been waiting for!
                <br />
                <br />
                Dress Code: Swimwear, sunnies, and your best party mood. Come
                for the water, stay for the fun. 🌊😎
                <br />
                <br />
                Don’t miss out—this is the event of the season! 🎉✨
              </p>
            </div>
          </div>
        </div>

        {/* Directions Section */}
        <div className="w-full max-w-6xl p-4 mt-16">
          <h2 className="text-2xl font-bold text-[#25194D] dark:text-[#DFE1FF]">
            Directions
          </h2>
          <div className="mt-6">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Map"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-6xl p-4 mt-16 place-items-center">
          <h2 className="text-2xl font-bold text-[#25194D] dark:text-[#DFE1FF]">
            Contact Us
          </h2>
          <div className="mt-6 flex space-x-8 text-[#FA776C] text-2xl">
            <FiInstagram className="cursor-pointer" />
            <MdEmail className="cursor-pointer" />
            <FiPhone className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="dark:bg-black">
        <RelatedEvents />
        <Footer />
      </div>
    </>
  );
};

export default EventDetails;
