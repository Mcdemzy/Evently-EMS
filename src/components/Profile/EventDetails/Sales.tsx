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
    <main className="py-6 px-4 md:px-8 min-h-screen">
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
      <section className="bg-white p-2 md:p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-between p-4 rounded-lg mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0  text-[#FA776C]">
            Sales
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] table-auto border-collapse">
            <thead>
              <tr className="bg-[#FFF5F5] text-left text-gray-600 font-medium border-b">
                <th className="p-4 text-center whitespace-nowrap min-w-[50px]">
                  Ticket Name
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Ticket Price
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Total Tickets Sold
                </th>
                <th className="p-4 text-center whitespace-nowrap min-w-[150px]">
                  Total Sales Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr
                  key={index}
                  className={` hover:bg-gray-100 text-center border-b ${
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
