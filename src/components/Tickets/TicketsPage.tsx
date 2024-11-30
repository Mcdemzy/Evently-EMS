import { useState } from "react";

// Define the type for ticket keys
type TicketType = "standard" | "vip" | "vvip" | "group";

const TicketsPage = () => {
  // Define the state for selected tickets
  const [tickets, setTickets] = useState<Record<TicketType, number>>({
    standard: 0,
    vip: 0,
    vvip: 0,
    group: 0,
  });

  // Define details for each ticket type
  const ticketDetails: Record<
    TicketType,
    { price: number; description: string; fee: number }
  > = {
    standard: {
      price: 5200,
      description: "Grants access to the event",
      fee: 200,
    },
    vip: {
      price: 15400,
      description:
        "Grants access to the event, a special sit, and a complementary cocktail.",
      fee: 400,
    },
    vvip: {
      price: 25600,
      description:
        "Comes with VIP benefits, backstage pass, complimentary meal, and a complementary cocktail.",
      fee: 600,
    },
    group: {
      price: 80900,
      description:
        "Comes with VIP benefits, a table for 5 people, backstage pass, complimentary meal, and a complementary cocktail.",
      fee: 900,
    },
  };

  // Calculate total price
  const totalPrice = Object.entries(tickets).reduce(
    (total, [key, quantity]) =>
      total + ticketDetails[key as TicketType].price * quantity,
    0
  );

  // Handle dropdown value changes
  const handleChange = (ticketType: TicketType, value: number) => {
    setTickets({ ...tickets, [ticketType]: value });
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Choose Tickets</h2>
          {Object.keys(ticketDetails).map((key) => (
            <div
              key={key}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h3 className="font-bold">{key.toUpperCase()}</h3>
                <p className="text-sm text-gray-600">
                  {`₦${ticketDetails[
                    key as TicketType
                  ].price.toLocaleString()} includes ₦${ticketDetails[
                    key as TicketType
                  ].fee.toLocaleString()} fee`}
                </p>
                <p className="text-sm">
                  {ticketDetails[key as TicketType].description}
                </p>
              </div>
              <select
                className="border rounded-md p-2"
                value={tickets[key as TicketType]}
                onChange={(e) =>
                  handleChange(key as TicketType, Number(e.target.value))
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
            <h3 className="font-bold">PARTY W ZEIGHT</h3>
            {totalPrice === 0 ? (
              <p className="text-sm text-gray-600">
                Please choose a ticket type to continue
              </p>
            ) : (
              <ul className="text-sm space-y-2">
                {Object.entries(tickets)
                  .filter(([_, quantity]) => quantity > 0)
                  .map(([key, quantity]) => (
                    <li key={key}>
                      {quantity} x {key.toUpperCase()} = ₦
                      {(
                        ticketDetails[key as TicketType].price * quantity
                      ).toLocaleString()}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
          <button
            disabled={totalPrice === 0}
            className={`mt-4 w-full py-2 px-4 rounded-lg ${
              totalPrice > 0
                ? "bg-purple-600 text-white hover:bg-purple-800"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Proceed to Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
