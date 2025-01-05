// Dummy Data
const salesData = [
  {
    ticketName: "Regular",
    ticketPrice: "₦0.00",
    ticketsSold: 20,
    totalRevenue: "₦0.00",
  },
  {
    ticketName: "VIP",
    ticketPrice: "₦0.00",
    ticketsSold: 5,
    totalRevenue: "₦0.00",
  },
];

// Function to export sales as CSV
// const exportSalesToCSV = () => {
//   const csvHeaders = "Ticket Name,Ticket Price,Tickets Sold,Total Revenue\n";
//   const csvRows = salesData
//     .map((sale) =>
//       [
//         sale.ticketName,
//         sale.ticketPrice,
//         sale.ticketsSold,
//         sale.totalRevenue,
//       ].join(",")
//     )
//     .join("\n");

//   const csvContent = `data:text/csv;charset=utf-8,${csvHeaders}${csvRows}`;
//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement("a");
//   link.setAttribute("href", encodedUri);
//   link.setAttribute("download", "sales.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

const Sales = ({}: { eventId: string | undefined }) => {
  return (
    <main className="px-6 md:px-16 lg:px-24 py-10 bg-[#F9F9FB] min-h-screen">
      {/* Sales Overview */}
      <section className="flex justify-between items-center bg-[#FFF5F5] p-6 rounded-lg mb-8">
        <div className="flex flex-col text-center">
          <span className="text-3xl font-bold text-[#FA776C]">25</span>
          <span className="text-lg text-[#25194D]">Tickets Sold</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-3xl font-bold text-[#FA776C]">₦0.00</span>
          <span className="text-lg text-[#25194D]">Sales Revenue</span>
        </div>
      </section>

      {/* Sales Table */}
      <section>
        <h2 className="text-[#25194D] text-xl font-semibold mb-4">Sales</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-[#FFF5F5] text-[#25194D] text-left">
                <th className="px-4 py-3">Ticket Name</th>
                <th className="px-4 py-3">Ticket Price</th>
                <th className="px-4 py-3">Total Tickets Sold</th>
                <th className="px-4 py-3">Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#F9F9FB]" : "bg-white"
                  } text-[#25194D]`}
                >
                  <td className="px-4 py-3">{sale.ticketName}</td>
                  <td className="px-4 py-3">{sale.ticketPrice}</td>
                  <td className="px-4 py-3">{sale.ticketsSold}</td>
                  <td className="px-4 py-3">{sale.totalRevenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Export Button */}
        {/* <button
          onClick={exportSalesToCSV}
          className="bg-[#FA776C] text-white py-3 px-6 rounded-lg mt-6 block ml-auto hover:bg-[#e8645a] transition-all"
        >
          Export
        </button> */}
      </section>
    </main>
  );
};

export default Sales;
