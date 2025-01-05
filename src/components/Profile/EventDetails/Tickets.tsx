import { useState } from "react";

const Tickets = ({}: { eventId: string | undefined }) => {
  const [tickets] = useState([
    {
      id: 1,
      name: "Regular",
      quantity: "5/Unlimited",
      stock: "Unlimited",
      price: "Free",
    },
    { id: 2, name: "VIP", quantity: "5/300", stock: "300", price: "₦10,000" },
  ]);

  const [emailContent, setEmailContent] = useState("");
  const [testEmail, setTestEmail] = useState("");

  const handleEmailSend = () => {
    alert(`Test email sent to: ${testEmail}`);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Tickets Table */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-800">
          TICKETS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] table-auto border-collapse">
            <thead>
              <tr className="bg-purple-100 text-left text-gray-600 font-medium border-b">
                <th className="p-4 text-center">ID</th>
                <th className="p-4 text-center">Ticket Name</th>
                <th className="p-4 text-center">Ticket Quantity</th>
                <th className="p-4 text-center">Ticket Stock</th>
                <th className="p-4 text-center">Ticket Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-gray-100 text-center border-b"
                >
                  <td className="p-4">{ticket.id}</td>
                  <td className="p-4">{ticket.name}</td>
                  <td className="p-4">{ticket.quantity}</td>
                  <td className="p-4">{ticket.stock}</td>
                  <td className="p-4">{ticket.price}</td>
                  <td className="p-4">
                    <button className="text-purple-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Add Ticket +
        </button>
      </div>

      {/* Customize Ticket Email */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Customize ticket e-mail
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Ticket email notification message{" "}
          <span className="text-red-600">*</span>
        </p>
        <textarea
          className="w-full border rounded p-3 mb-4"
          rows={5}
          placeholder="Customize your confirmation message..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            className="border rounded p-2 flex-1"
            placeholder="E-mail address to send test"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
          <button
            onClick={handleEmailSend}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Send test
          </button>
        </div>
      </div>

      {/* Set Live Button */}
      <div className="text-center mb-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
          Set live
        </button>
      </div>

      {/* Discount Section */}
      <div className="bg-red-100 p-4 md:p-6 rounded-lg text-center shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2">
          Create discount codes
        </h3>
        <p className="text-gray-700 mb-4">Create your first discount</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Create discount +
        </button>
      </div>
    </div>
  );
};

export default Tickets;
