import { Dot, EllipsisVertical, Plus } from "lucide-react";
import Progress from "./Progress";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/Footer";

export default function PreviewTicket() {

  return (
    <main className="w-full">
      <h2 className="text-[#25194D] font-semibold text-4xl text-center mt-14">
        CREATE EVENT
      </h2>
      <p className="text-center mt-2 text-[#25194D]">
        Begin your journey to an unforgettable experience.
      </p>
      <Progress />
      <section className="mt-20 mb-10 w-[80%] m-auto">
        <div className="flex flex-wrap gap-y-4 justify-between items-center">
          <h2 className="text-xl font-medium text-[#25194D]  me-2">TICEKTS</h2>
          <Link
            to="/events/create/2"
            className="flex justify-start items-center gap-x-2 text-[#25194D] border-2 px-2.5 py-1 rounded-md border-[#25194D]"
          >
            Add Ticket <Plus />
          </Link>
        </div>

        <div className="w-full mt-4 relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="border-b text-xs text-[#25194D] text-[20px] uppercase">
              <tr>
                <th scope="" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <img src="/images/ticket2.png" alt="ticket" />

                    <h2 className="font-semibold">TICKET NAME</h2>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <img src="/images/ticket2.png" alt="ticket" />

                    <h2 className="font-semibold">TICKET QUANTITY</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <img src="/images/cart.png" alt="ticket" />

                    <h2 className="font-semibold">TICKET STOCK</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <img src="/images/ticket2.png" alt="ticket" />

                    <h2 className="font-semibold">TICKET PRICE</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-primary text-[16px]">
              <tr className="bg-white border-b border-b-[#E4E5E9]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> Regular
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> Unlimited
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> Unlimited
                  </div>
                </td>
                <td className="px-6 py-4">Free</td>
                <td>
                  <button className="border border-primary px-0.5 py-1 rounded-md">
                    <EllipsisVertical size={20} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b border-b-[#E4E5E9]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> VIP
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> 30/300
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-start items-center">
                    <Dot /> 300
                  </div>
                </td>
                <td className="px-6 py-4">₦10,000</td>
                <td>
                  <button className="border border-primary px-0.5 py-1 rounded-md">
                    <EllipsisVertical size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Socials />
      <section className="mt-20 my-6 mb-10 w-full flex flex-row justify-center gap-x-8 items-center">
        <Link
          to="/events/create"
          className="flex justify-center items-center shaodw-md w-[240px] h-[48px] rounded-md text-primary text-md bg-[#624CF50D]"
        >
          Receed
        </Link>

        <Link
          to="/events/create/3 "
          className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]"
        >
          Proceed
        </Link>
      </section>
      <Footer />
    </main>
  );
}
