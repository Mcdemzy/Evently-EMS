import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { FiPhone, FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import RelatedEvents from "./RelatedEvents";
import axios from "axios";

// Define the structure of the event data from the API
interface Event {
  _id: string;
  eventName: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  eventLocation: string;
  category: string;
  image?: string; // Optional field for image
}

// Define the structure of the ticket data from the API
interface Ticket {
  _id: string;
  eventId: string;
  image?: string; // Image URL for the ticket
}

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Get eventId from the URL
  const [event, setEvent] = useState<Event | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch event details and tickets
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch event details
        const eventResponse = await axios.get<Event>(
          `https://evently-ems-backend.vercel.app/api/events/${eventId}`
        );

        // Fetch all tickets
        const ticketsResponse = await axios.get<Ticket[]>(
          "https://evently-ems-backend.vercel.app/api/tickets"
        );

        if (eventResponse.status === 200 && ticketsResponse.status === 200) {
          setEvent(eventResponse.data);
          setTickets(ticketsResponse.data);
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch event details. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  // Helper function to get the image for a specific event
  const getEventImage = (eventId: string): string => {
    // Find all tickets for the event
    const eventTickets = tickets.filter((ticket) => ticket.eventId === eventId);

    // Find the first ticket with an image
    const ticketWithImage = eventTickets.find((ticket) => ticket.image);

    // Return the image or fallback
    return ticketWithImage?.image || "https://via.placeholder.com/400";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black">
        <p>Event not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-8 dark:bg-black pt-[124px]">
        <div className="w-full max-w-6xl p-4 lg:flex lg:space-x-8">
          {/* Event Image Section */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src={getEventImage(event._id)} // Get the image from the tickets
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
              {event.eventName}
            </h1>
            <div className="mt-6 flex items-center space-x-3">
              <span className="bg-[#25194D] text-[#EDEFFF] px-4 py-2 rounded-full font-bold text-base dark:text-[#DFE1FF]">
                {event.category}
              </span>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  {new Date(event.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <FaClock className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  {event.startTime}
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <FaMapMarkerAlt className="text-[#25194D] text-xl dark:text-[#DFE1FF]" />
                <span className="text-[#25194D] text-lg dark:text-[#DFE1FF]">
                  {event.eventLocation}
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#25194D] dark:text-[#DFE1FF]">
                About this event
              </h2>
              <p className="mt-6 text-[#25194D] text-lg leading-relaxed dark:text-[#DFE1FF]">
                {event.description}
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
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default EventDetails;
