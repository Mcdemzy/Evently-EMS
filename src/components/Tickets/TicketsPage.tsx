import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Define the structure of a ticket
interface Ticket {
  _id: string;
  ticketName: string;
  ticketType: string;
  ticketPrice?: number; // Make ticketPrice optional
  benefits: string[];
  ticketDescription: string;
  image?: string; // Image URL for the ticket
}

const TicketsPage = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Get eventId from the URL
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [event, setEvent] = useState<any>(null); // Replace 'any' with the correct event type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTickets, setSelectedTickets] = useState<
    Record<string, number>
  >({});
  const navigate = useNavigate();

  // Fetch tickets and event details
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tickets for the event
        const ticketsResponse = await axios.get<{ tickets: Ticket[] }>(
          `https://evently-ems-backend.vercel.app/api/tickets/event/${eventId}`
        );

        // Fetch event details
        const eventResponse = await axios.get(
          `https://evently-ems-backend.vercel.app/api/events/${eventId}`
        );

        if (ticketsResponse.status === 200 && eventResponse.status === 200) {
          setTickets(ticketsResponse.data.tickets);
          setEvent(eventResponse.data);
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tickets. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  const handleChange = (ticketId: string, value: number) => {
    setSelectedTickets({ ...selectedTickets, [ticketId]: value });
  };

  const calculateTotalPrice = () => {
    return tickets.reduce((total: number, ticket: Ticket) => {
      const quantity = selectedTickets[ticket._id] || 0;
      const price = ticket.ticketPrice || 0; // Fallback to 0 if ticketPrice is undefined
      return total + price * quantity;
    }, 0);
  };

  const isAnyTicketSelected = () => {
    return Object.values(selectedTickets).some((quantity) => quantity > 0);
  };

  const handleProceed = () => {
    navigate("/get-tickets/contact", { state: { selectedTickets, event } });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black">
        <p>Loading tickets...</p>
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

  return (
    <main className="min-h-screen dark:bg-[#000000] dark:text-white pt-[100px] md:pt-[124px]">
      <div className="w-full max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Choose Tickets</h2>
            {tickets.map((ticket: Ticket) => (
              <div
                key={ticket._id}
                className="flex items-center justify-between border-b py-4 gap-[100px]"
              >
                <div>
                  <h3 className="font-bold">{ticket.ticketName}</h3>
                  <p className="text-sm text-gray-600 dark:text-[#656565]">
                    <span className="dark:text-[#F24F41]">
                      {`₦${(ticket.ticketPrice || 0).toLocaleString()}`}{" "}
                      {/* Fallback to 0 if ticketPrice is undefined */}
                    </span>
                  </p>
                  <p className="text-sm dark:text-[#656565]">
                    {ticket.ticketDescription}
                  </p>
                </div>
                <select
                  className="border rounded-md p-2 dark:text-[#3D3D3D]"
                  value={selectedTickets[ticket._id] || 0}
                  onChange={(e) =>
                    handleChange(ticket._id, Number(e.target.value))
                  }
                >
                  {[...Array(11)].map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="mb-6">
              <h3 className="font-bold">{event?.eventName}</h3>
              {calculateTotalPrice() === 0 ? (
                <p className="text-sm text-gray-600">
                  Please choose a ticket type to continue
                </p>
              ) : (
                <ul className="text-sm space-y-2">
                  {tickets
                    .filter((ticket: Ticket) => selectedTickets[ticket._id] > 0)
                    .map((ticket: Ticket) => (
                      <li key={ticket._id}>
                        {selectedTickets[ticket._id]} x {ticket.ticketName} = ₦
                        {(
                          (ticket.ticketPrice || 0) *
                          selectedTickets[ticket._id]
                        ).toLocaleString()}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>₦{calculateTotalPrice().toLocaleString()}</span>
            </div>
            <button
              onClick={handleProceed}
              disabled={!isAnyTicketSelected()} // Disable only if no tickets are selected
              className={`mt-4 w-full py-2 px-4 rounded-lg ${
                isAnyTicketSelected()
                  ? "bg-purple-600 text-white hover:bg-purple-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Proceed to Contact
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TicketsPage;
