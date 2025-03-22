import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RelatedEvents = () => {
  const events = [
    {
      id: 1,
      title: "PARTY W ZEIGHT",
      price: "Free",
      category: "Pool Party",
      date: "Sep 13, 2025",
      time: "1:00 PM",
      location: "The Zone, Gbagada",
      image: "images/details1.png",
    },
    {
      id: 2,
      title: "SUMMER BEACH HOUSE PARTY",
      price: "Free",
      category: "Pool Party",
      date: "Sep 13, 2025",
      time: "1:00 PM",
      location: "Elegushi Beach, Ikate, Lagos",
      image: "images/details2.png",
    },
    {
      id: 3,
      title: "BIOSKY'S PLAYHOUSE",
      price: "NGN 5,000",
      category: "Pool Party",
      date: "Sep 13, 2025",
      time: "1:00 PM",
      location: "The Zone, Gbagada",
      image: "images/details3.png",
    },
  ];

  return (
    <div className="w-full p-4  flex flex-col justify-center items-center dark:bg-black">
      <h2 className="text-2xl font-bold text-[#25194D] dark:bg-black dark:text-[#EDEFFF]">
        Other Events You May Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-black dark:border dark:border-solid dark:border-[#25194D]"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#25194D] dark:text-[#EDEFFF]">
                {event.title}
              </h3>
              <div className="mt-3 flex items-center space-x-3">
                <span className="bg-[#25194D] text-[#EDEFFF] px-3 py-1 rounded-full text-sm font-semibold dark:text-[#EDEFFF]">
                  {event.price}
                </span>
                <span className="text-sm text-[#25194D] dark:text-[#EDEFFF]">
                  {event.category}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-[#25194D] dark:text-[#EDEFFF]" />
                  <span className="text-sm text-[#25194D] dark:text-[#EDEFFF]">
                    {event.date}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaMapMarkerAlt className="text-[#25194D] dark:text-[#EDEFFF]" />
                  <span className="text-sm text-[#25194D] dark:text-[#EDEFFF]">
                    {event.location}
                  </span>
                </div>
              </div>
              <Link
                to={`/event-details/${event.id}`}
                className="block bg-purple-600 hover:bg-purple-800 text-white text-center font-bold py-2 px-4 rounded-lg mt-4 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedEvents;
