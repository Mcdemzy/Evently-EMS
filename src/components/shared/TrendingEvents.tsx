import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Cards/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  ticketName: string;
  ticketType: string;
  ticketStock: string;
  availableTickets: number;
  purchaseLimit: number;
  benefits: string;
  ticketDescription: string;
  ticketPrice?: number;
  bank?: string;
  accountNumber?: number;
  accountName?: string;
  image?: string; // Image URL for the ticket
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const TrendingEvents: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [events, setEvents] = useState<Event[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch events and tickets from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch events
        const eventsResponse = await axios.get<Event[]>(
          "https://evently-ems-backend.vercel.app/api/events"
        );
        setEvents(eventsResponse.data);

        // Fetch tickets
        const ticketsResponse = await axios.get<Ticket[]>(
          "https://evently-ems-backend.vercel.app/api/tickets/"
        );
        setTickets(ticketsResponse.data);

        setLoading(false);
      } catch (err) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  if (loading) {
    return (
      <div className="text-center py-20 dark:bg-black dark:text-white">
        Loading events...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 dark:bg-black dark:text-white">
        {error}
      </div>
    );
  }

  return (
    <div ref={ref} className="py-20 dark:bg-black dark:text-white">
      <motion.h2
        className="text-[30px] lg:text-[40px] font-bold text-center leading-[60px] md:mb-2 mb-1 uppercase"
        variants={headingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        TRENDING EVENTS
      </motion.h2>
      <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] mx-auto border-gray-800 dark:border-white"></div>
      <motion.p
        className="text-center font-normal text-base md:text-xl mt-2 leading-5 md:leading-[60px] px-2"
        variants={paragraphVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Elevating Experiences, One Event at a Time
      </motion.p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, centeredSlides: true },
          1280: { slidesPerView: 3, centeredSlides: true },
        }}
        className="max-w-screen-xl w-auto mx-auto mt-5"
      >
        {events.map((event, index) => (
          <SwiperSlide key={event._id} className="flex justify-center">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                title={event.eventName}
                price={0} // You can update this if the API provides a price field
                description={event.description}
                date={new Date(event.startDate).toLocaleDateString()}
                time={event.startTime}
                organizer={event.eventLocation}
                imageUrl={getEventImage(event._id)} // Get the image from the tickets
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingEvents;
