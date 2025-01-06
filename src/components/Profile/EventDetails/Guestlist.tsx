// Dummy Data
const guestData = [
  {
    ticketName: "Regular",
    quantity: 5,
    purchasedBy: "Ademola Adeyemo",
    orderNumber: "5XVG65H9IK",
    orderDate: "Dec 20, 2024",
  },
  {
    ticketName: "VIP",
    quantity: 3,
    purchasedBy: "Adeyemo Sultan",
    orderNumber: "11Y7G09NH0",
    orderDate: "Dec 24, 2024",
  },
  {
    ticketName: "Regular",
    quantity: 2,
    purchasedBy: "Jane Doe",
    orderNumber: "2ZXC78H9IJ",
    orderDate: "Dec 25, 2024",
  },
  {
    ticketName: "VIP",
    quantity: 1,
    purchasedBy: "John Smith",
    orderNumber: "89AV56GH2O",
    orderDate: "Dec 22, 2024",
  },
  {
    ticketName: "Regular",
    quantity: 4,
    purchasedBy: "Emmanuel Olu",
    orderNumber: "44AA55GH7P",
    orderDate: "Dec 23, 2024",
  },
];

// Function to export guestlist as CSV
const exportToCSV = () => {
  const csvHeaders =
    "Ticket Name,Quantity,Purchased By,Order Number,Order Date\n";
  const csvRows = guestData
    .map((guest) =>
      [
        guest.ticketName,
        guest.quantity,
        guest.purchasedBy,
        guest.orderNumber,
        guest.orderDate,
      ].join(",")
    )
    .join("\n");

  const csvContent = `data:text/csv;charset=utf-8,${csvHeaders}${csvRows}`;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "guestlist.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Guestlist = ({}: { eventId: string | undefined }) => {
  return (
    <main className="py-6 px-4 md:px-8 min-h-screen">
      {/* Guest Count Section */}
      <section className="flex justify-between items-center bg-[#EDEFFF] p-6 rounded-lg mb-8">
        <div className="flex flex-col text-center">
          <span className="text-3xl font-bold text-[#FA776C]">5</span>
          <span className="text-lg text-[#25194D]">VIP</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-3xl font-bold text-[#FA776C]">20</span>
          <span className="text-lg text-[#25194D]">Regular</span>
        </div>
      </section>

      {/* Guestlist Table */}
      <section className="bg-white p-2 md:p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-between p-4 rounded-lg mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 md:mb-0">
            Guest List
          </h2>
          {/* Export Button */}
          <button
            className="bg-[#FA776C] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-[#e8645a] transition-all"
            onClick={exportToCSV}
          >
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] table-auto border-collapse">
            <thead>
              <tr className="bg-purple-100 text-left text-gray-600 font-medium border-b">
                <th className="p-4 text-center whitespace-nowrap min-w-[50px]">
                  Ticket Name
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Quantity
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Purchased By
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Order Number
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody>
              {guestData.map((guest, index) => (
                <tr
                  key={index}
                  className={` hover:bg-gray-100 text-center border-b ${
                    index % 2 === 0 ? "" : "bg-white"
                  } text-[#25194D]`}
                >
                  <td className="p-4">{guest.ticketName}</td>
                  <td className="p-4">{guest.quantity}</td>
                  <td className="p-4">{guest.purchasedBy}</td>
                  <td className="p-4">{guest.orderNumber}</td>
                  <td className="p-4">{guest.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Guestlist;
