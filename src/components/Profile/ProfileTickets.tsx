import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileTickets = () => {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      date: "Monday, Dec 30 2024",
      ticketsSold: "1 VIP",
      image: "images/eventProfile.png",
    },
    {
      id: 2,
      title: "Tech Meetup",
      date: "Wednesday, Jan 15 2025",
      ticketsSold: "1 VIP",
      image: "images/Event 1.png",
    },
    {
      id: 3,
      title: "Startup Pitch",
      date: "Saturday, Feb 10 2025",
      ticketsSold: "3 Regular",
      image: "images/Event 2.png",
    },
    {
      id: 4,
      title: "AI Conference",
      date: "Tuesday, Mar 20 2025",
      ticketsSold: "5 VIP",
      image: "images/Event 3.png",
    },
  ];

  const handleSubmit = () => {
    alert("Ticket Viewed");
  };

  return (
    <main className="min-h-screen w-full mt-[124px] px-6 sm:px-10">
      <div className="flex items-center mb-6 justify-between">
        <h1 className="text-2xl font-bold ">My Tickets</h1>
        <Link
          to="/events/all"
          className="w-fit px-8 py-4 bg-[#624CF5] text-white text-xl rounded-full hidden md:flex"
        >
          Explore more events
        </Link>
      </div>

      {/* Events Section */}
      {events.length === 0 ? (
        <div className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="w-fit h-20 text-2xl font-medium rounded-xl flex justify-center items-center">
            No event tickets purchased yet
          </div>
          <p className="text-gray-600 font-medium">
            No worries - plenty of exciting events to explore!
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Existing Events */}
          {events.map((event) => (
            <div
              key={event.id}
              className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md cursor-pointer"
              onClick={handleSubmit}
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
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default ProfileTickets;
