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

const Guestlist = () => {
  return (
    <main className="px-6 md:px-16 lg:px-24 py-10 bg-[#F9F9FB] min-h-screen pt-[160px]">
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
      <section>
        <div className="flex items-center mb-6 justify-between">
          <h2 className="text-[#25194D] text-xl font-semibold mb-4">
            Guest List
          </h2>
          {/* Export Button */}

          <button
            className="bg-[#FA776C] text-white py-3 px-6 rounded-lg mt-6 block ml-auto hover:bg-[#e8645a] transition-all"
            onClick={exportToCSV}
          >
            Export
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-[#EDEFFF] text-[#25194D] text-left">
                <th className="px-4 py-3">Ticket Name</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Purchased By</th>
                <th className="px-4 py-3">Order Number</th>
                <th className="px-4 py-3">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {guestData.map((guest, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#F9F9FB]" : "bg-white"
                  } text-[#25194D]`}
                >
                  <td className="px-4 py-3">{guest.ticketName}</td>
                  <td className="px-4 py-3">{guest.quantity}</td>
                  <td className="px-4 py-3">{guest.purchasedBy}</td>
                  <td className="px-4 py-3">{guest.orderNumber}</td>
                  <td className="px-4 py-3">{guest.orderDate}</td>
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
