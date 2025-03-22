import { IoTicketOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProfileEvents = () => {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      date: "Monday, Dec 30 2024",
      ticketsSold: 20,
      image: "images/eventProfile.png",
    },
    {
      id: 2,
      title: "Tech Meetup",
      date: "Wednesday, Jan 15 2025",
      ticketsSold: 45,
      image: "images/Event 1.png",
    },
    {
      id: 3,
      title: "Startup Pitch",
      date: "Saturday, Feb 10 2025",
      ticketsSold: 35,
      image: "images/Event 2.png",
    },
    {
      id: 4,
      title: "AI Conference",
      date: "Tuesday, Mar 20 2025",
      ticketsSold: 50,
      image: "images/Event 3.png",
    },
  ];

  const navigate = useNavigate();

  const createNewEvent = () => {
    alert("New Event Created");
  };

  return (
    <main className="min-h-screen w-full mt-[124px] px-6 sm:px-10">
      <h1 className="text-2xl font-bold mb-6">My Events</h1>

      {/* Events Section */}
      {events.length === 0 ? (
        <div className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer">
          <div className="w-20 h-20 bg-[#DCDCDC] rounded-xl flex justify-center items-center">
            <FaPlus className="text-3xl text-gray-600" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Create new event</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Event Cards */}
          <div
            className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer"
            onClick={createNewEvent}
          >
            <div className="w-20 h-20 bg-[#DCDCDC] rounded-xl flex justify-center items-center">
              <FaPlus className="text-3xl text-gray-600" />
            </div>
            <p className="mt-4 text-gray-600 font-medium">Create new event</p>
          </div>

          {/* Render Existing Event */}
          {events.map((event) => (
            <div
              key={event.id}
              className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate(`/profile-event/Details/${event.id}`)}
            >
              <div>
                <img
                  src={event.image}
                  alt={`${event.title} Event`}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold">{event.title}</p>
                  <p className="flex items-center gap-2">
                    <IoTicketOutline className="text-gray-600" />
                    {event.ticketsSold}
                  </p>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <p className="text-sm font-medium">{event.date}</p>
                  <p className="text-sm">Tickets sold</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default ProfileEvents;
