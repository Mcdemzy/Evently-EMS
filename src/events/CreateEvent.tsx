import Footer from "../components/shared/Footer";
import CreateEventForm from "./1/CreateEventForm";

export default function CreateEvent() {
  return (
    <main className="overflow-hidden w-full  dark:bg-black">
      <h2 className="dark:text-[#EDEFFF] text-[#25194D] font-semibold text-4xl text-center mt-14">
        CREATE EVENT
      </h2>
      <p className="text-center mt-2 text-[#25194D] dark:text-[#EDEFFF]">
        Begin your journey to an unforgettable experience.
      </p>
      {/* progress bars */}
      <section className="my-6 w-[90%] m-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="dark:text-[#000000] w-[48px] h-[48px] rounded-full dark:bg-[#EDEFFF] bg-[#25194D] text-white flex justify-center items-center">
            1
          </span>
          <p className="dark:text-[#EDEFFF]">DETAILS</p>
        </div>
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="dark:text-[#624CF5] w-[48px] h-[48px] rounded-full bg-[#EDEFFF] text-[#25194D] flex justify-center items-center">
            2
          </span>
          <p className="dark:text-[#EDEFFF]">TICKETS</p>
        </div>
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="dark:text-[#624CF5] w-[48px] h-[48px] rounded-full bg-[#EDEFFF] text-[#25194D] flex justify-center items-center">
            3
          </span>
          <p className="dark:text-[#EDEFFF]">APPEARANCE</p>
        </div>
      </section>
      <section className="w-[80%] m-auto h-full">
        <h2 className="dark:text-[#EDEFFF] text-[#25194D] text-2xl font-semibold">
          EVENT DETAILS
        </h2>
        <CreateEventForm />
      </section>
      <Footer />
    </main>
  );
}
