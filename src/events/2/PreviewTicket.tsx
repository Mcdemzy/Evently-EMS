import { Dot, EllipsisVertical, Plus } from "lucide-react";
import Progress from "./Progress";
import Socials from "./Socials";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function PreviewTicket() {
  const { eventID } = useParams();
  const eventId = eventID;
  const location = useLocation();
  const { ticketType, ticketData } = location.state || {};

  useEffect(() => {
    console.log("Previewing Ticket Data:", ticketType, ticketData);
    console.log("Event id :", eventId);
  }, [ticketType, ticketData]);
  return (
    <main className="overflow-hidden w-full dark:bg-black">
      <h2 className="dark:text-[#EDEFFF] text-[#25194D] font-semibold text-4xl text-center mt-14">
        CREATE EVENT
      </h2>
      <p className="dark:text-[#EDEFFF] text-center mt-2 text-[#25194D]">
        Begin your journey to an unforgettable experience.
      </p>
      <Progress />
      <section className="mt-20 mb-10 w-[80%] m-auto">
        <div className="flex flex-wrap gap-y-4 justify-between items-center">
          <h2 className="dark:text-[#EDEFFF] text-xl font-medium text-[#25194D]  me-2">
            TICEKTS
          </h2>
          <Link
            to="/events/create/2"
            className="dark:text-[#EDEFFF] dark:dark:border-[#EDEFFF] flex justify-start items-center gap-x-2 text-[#25194D] border-2 px-2.5 py-1 rounded-md border-[#25194D]"
          >
            Add Ticket <Plus />
          </Link>
        </div>

        <div className="w-full mt-4 relative overflow-x-auto">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="dark:text-[#EDEFFF] border-b text-xs text-[#25194D] text-[20px] uppercase">
              <tr>
                <th scope="" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-ticket-perforated"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                      <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                    </svg>
                    <h2 className="font-semibold">TICKET NAME</h2>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-ticket-perforated"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                      <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                    </svg>

                    <h2 className="font-semibold">TICKET QUANTITY</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-basket3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                    </svg>
                    <h2 className="font-semibold">TICKET STOCK</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cash-coin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                      />
                      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                    </svg>

                    <h2 className="font-semibold">TICKET PRICE</h2>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="font-semibold flex justify-start items-center gap-x-3"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-primary text-[16px]">
              <tr className="dark:border-b-primary dark:text-white border-b border-b-[#E4E5E9]">
                <th
                  scope="row"
                  className="dark:text-white px-6 py-4 font-medium text-primary whitespace-nowrap"
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
                  <button className="dark:border-white border border-primary px-0.5 py-1 rounded-md">
                    <EllipsisVertical size={20} />
                  </button>
                </td>
              </tr>
              <tr className="dark:border-b-primary dark:text-white border-b border-b-[#E4E5E9]">
                <th
                  scope="row"
                  className="dark:text-white px-6 py-4 font-medium text-primary whitespace-nowrap"
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
                  <button className="dark:border-white border border-primary px-0.5 py-1 rounded-md">
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
          className="dark:border flex justify-center items-center shaodw-md w-[240px] h-[48px] rounded-md dark:text-[#DFE1FF] text-primary text-md dark:bg-black bg-[#624CF50D]"
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
      {/* <Footer /> */}
    </main>
  );
}
