import { useEffect, useState } from "react";
import { IoTicketOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Define the structure of an event
interface Event {
  _id: string;
  eventName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  eventLocation: string;
  description: string;
  createdBy: string;
}

// Define the structure of a ticket
interface Ticket {
  _id: string;
  eventId: string;
  image?: string; // Image URL for the ticket
}

const ProfileEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch events and tickets from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the logged-in user's ID from localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = loggedInUser._id;

        if (!userId) {
          throw new Error("User ID not found in localStorage.");
        }

        // Fetch events created by the user
        const eventsResponse = await axios.get<Event[]>(
          `https://evently-ems-backend.vercel.app/api/events/user/${userId}`
        );

        // Fetch all tickets
        const ticketsResponse = await axios.get<Ticket[]>(
          "https://evently-ems-backend.vercel.app/api/tickets"
        );

        // Check if the responses are successful
        if (eventsResponse.status === 200 && ticketsResponse.status === 200) {
          setEvents(eventsResponse.data);
          setTickets(ticketsResponse.data);
        }

        setLoading(false);
      } catch (err) {
        // Only set error if the request fails (e.g., network error or server error)
        setError(
          "Failed to fetch events. Please refresh the page or try again later."
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to get the image for a specific event
  const getEventImage = (eventId: string): string => {
    // Find all tickets for the event
    const eventTickets = tickets.filter((ticket) => ticket.eventId === eventId);

    // Find the first ticket with an image
    const ticketWithImage = eventTickets.find((ticket) => ticket.image);

    // Return the image or fallback
    return ticketWithImage?.image || "https://via.placeholder.com/400";
  };

  const createNewEvent = () => {
    navigate("/events/create");
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full mt-[124px] px-6 sm:px-10 flex justify-center items-center">
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full mt-[124px] px-6 sm:px-10 flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full mt-[124px] px-6 sm:px-10">
      <h1 className="text-2xl font-bold mb-6">My Events</h1>

      {/* Events Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default "Create New Event" Card */}
        <div
          className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer"
          onClick={createNewEvent}
        >
          <div className="w-20 h-20 bg-[#DCDCDC] rounded-xl flex justify-center items-center">
            <FaPlus className="text-3xl text-gray-600" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Create new event</p>
        </div>

        {/* Render Existing Events */}
        {events.map((event) => (
          <div
            key={event._id}
            className="w-full h-[22.5rem] border border-[#DCDCDC] rounded-lg shadow-md cursor-pointer"
            onClick={() => navigate(`/profile-event/Details/${event._id}`)}
          >
            <div>
              <img
                src={getEventImage(event._id)} // Get the image from the tickets
                alt={`${event.eventName} Event`}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-semibold">{event.eventName}</p>
                <p className="flex items-center gap-2">
                  <IoTicketOutline className="text-gray-600" />
                  {/* Replace with actual tickets sold if available */}0
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <p className="text-sm font-medium">
                  {new Date(event.startDate).toLocaleDateString()}
                </p>
                <p className="text-sm">Tickets sold</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProfileEvents;
