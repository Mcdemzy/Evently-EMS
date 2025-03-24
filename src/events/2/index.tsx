import { Link, useParams } from "react-router-dom";
import Progress from "./Progress";
import FreeTicket from "./FreeTicket";
import PaidTicket from "./PaidTicket";
import Socials from "./Socials";
import { useState } from "react";

export default function Event2() {
  const { eventID } = useParams();
  console.log("Event ID:", eventID);

  const [showForm, setShowForm] = useState(false);
  const [ticketType, setTicketType] = useState<"free" | "paid" | null>(null);

  const handleAddTicketClick = () => {
    setShowForm(true);
  };
  const handleTicketTypeChange = (type: "free" | "paid") => {
    setTicketType(type);
    setShowForm(false);
  };

  return (
    <main className="overflow-hidden w-full dark:bg-black">
      <h2 className="dark:text-[#EDEFFF] text-[#25194D] font-semibold text-4xl text-center mt-14">
        CREATE EVENT
      </h2>
      <p className="dark:text-[#EDEFFF] text-center mt-2 text-[#25194D]">
        Begin your journey to an unforgettable experience.
      </p>
      <Progress />
      {!showForm && !ticketType && (
        <section className="dark:bg-[#1F1F1F] mt-4 mb-10 bg-[#E9E8ED] space-y-4 flex flex-col jusitfy-center items-center w-[95%] md:w-[80%] m-auto h-[440px] rounded-md">
          <div className="mt-16 w-[100px] h-[100px]  rounded-full ">
            <img src="/images/ticket.png" width={100} height={100} alt={""} />
          </div>
          <p className="dark:text-[#EDEFFF] text-xl text-[#25194D] text-center font-semibold">
            CREATE EVENT
          </p>
          <p className="dark:text-[#EDEFFF] text-center text-[#25194D]">
            Create your first Ticket. It won’t take long.
          </p>
          <div className="flex justify-center items-center w-full">
            <button
              onClick={handleAddTicketClick}
              className="font-semibold m-auto text-[#25194D] bg-white px-4 p-1.5 border border-[#25194D] rounded-sm shadow-md"
            >
              Add ticket +
            </button>
          </div>
        </section>
      )}
      {showForm && (
        <section className="dark:bg-[#1F1F1F] mt-4 mb-10 bg-[#E9E8ED] space-y-4 flex flex-col jusitfy-center items-center w-[95%] md:w-[80%] m-auto h-[440px] rounded-md">
          <div className="mt-16 w-[100px] h-[100px]  rounded-full ">
            <img src="/images/ticket.png" width={100} height={100} alt={""} />
          </div>
          <p className="dark:text-[#EDEFFF] text-xl text-[#25194D] text-center font-semibold">
            CREATE EVENT
          </p>
          <p className="dark:text-[#EDEFFF] text-center text-[#25194D]">
            Create your first Ticket. It won’t take long.
          </p>
          <div className="flex justify-center items-center w-full">
            <form className="mt-4" action="#">
              <div className="flex flex-row justify-start items-center">
                <div className="flex items-center">
                  <label
                    htmlFor="default-radio-1"
                    className="dark:text-[#EDEFFF] text-xl font-medium text-[#25194D]  me-2"
                  >
                    Free Ticket
                  </label>
                  <input
                    checked={ticketType === "free"}
                    type="radio"
                    id="physical-event"
                    onChange={() => handleTicketTypeChange("free")}
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="default-radio-2"
                    className="dark:text-[#EDEFFF] ms-2 text-xl font-medium text-[#25194D] me-2"
                  >
                    Paid Ticket
                  </label>
                  <input
                    checked={ticketType === "paid"}
                    onChange={() => handleTicketTypeChange("paid")}
                    type="radio"
                    id="online-event"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
      <section className="w-[95%] md:w-[80%] m-auto">
        {ticketType == "free" || ticketType === "paid" ? (
          <form className="mt-14" action="#">
            <div className="flex flex-row justify-start items-center">
              <div className="flex items-center">
                <label
                  htmlFor="default-radio-1"
                  className="dark:text-[#EDEFFF] text-xl font-medium text-[#25194D]  me-2"
                >
                  Free Ticket
                </label>
                <input
                  checked={ticketType === "free"}
                  onChange={() => handleTicketTypeChange("free")}
                  type="radio"
                  id="physical-event"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="default-radio-2"
                  className="dark:text-[#EDEFFF] ms-2 text-xl font-medium text-[#25194D] me-2"
                >
                  Paid Ticket
                </label>
                <input
                  checked={ticketType === "paid"}
                  onChange={() => handleTicketTypeChange("paid")}
                  type="radio"
                  id="online-event"
                />
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
        {ticketType === "free" && <FreeTicket />}
        {ticketType === "paid" && <PaidTicket />}
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
          to="/events/preview "
          className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]"
        >
          Proceed
        </Link>
      </section>
      {/* <Footer /> */}
    </main>
  );
}
