import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateEvent() {
  const [physicalEvent, setPhysicalEvent] = useState(false);
  const [onlineEvent, setOnlineEvent] = useState(false);

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
        {/* form */}
        <form className="mt-5" action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium dark:text-[#EDEFFF] text-[#25194D]"
              >
                Event Name <span className="text-[#FA776C]">*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="dark:bg-[#1F1F1F] bg-white border border-[#1C1C1C] dark:text-[#ffff] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium dark:text-[#EDEFFF] text-[#25194D]"
              >
                Category Event <span className="text-[#FA776C]">*</span>
              </label>
              <select className="dark:bg-[#1F1F1F] border border-[#1C1C1C] dark:text-[#FFFFFF] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Select Category</option>
                <option value="">Category 1</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium dark:text-[#EDEFFF] text-[#25194D]"
              >
                Description of event <span className="text-[#FA776C]">*</span>
              </label>
              <textarea
                cols={4}
                rows={5}
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          <h2 className="mt-6 text-[#25194D] dark:text-[#EDEFFF] text-2xl font-semibold">
            EVENT DATE & TIME
          </h2>
          <div className="mt-6 grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
              >
                Start Date <span className="text-[#FA776C]">*</span>
              </label>
              <input
                type="date"
                name="start-date"
                id="start-date"
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
              >
                End Date <span className="text-[#FA776C]">*</span>
              </label>
              <input
                type="date"
                name="end-date"
                id="end-data"
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mt-6 grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
              >
                Start Time <span className="text-[#FA776C]">*</span>
              </label>
              <input
                type="time"
                name="start-time"
                id="time"
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
              >
                End Time <span className="text-[#FA776C]">*</span>
              </label>
              <input
                type="time"
                name="end-time"
                id="end-time"
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <h2 className="mt-6 text-[#25194D] text-2xl font-semibold dark:text-[#EDEFFF]">
            EVENT LOCATION
          </h2>
          <div className="flex flex-row justify-start items-center">
            <div className="mt-6 flex items-center">
              <Checkbox
                required
                checked={physicalEvent}
                onCheckedChange={() => setPhysicalEvent(!physicalEvent)}
              />
              <label
                htmlFor="physical-event"
                className="ms-1.5 text-md font-medium text-[#25194D] dark:text-[#EDEFFF] me-2"
              >
                Physical Event
              </label>
            </div>
            <div className="mt-6 flex items-center">
              <Checkbox
                required
                checked={onlineEvent}
                onCheckedChange={() => setOnlineEvent(!onlineEvent)}
              />
              <label
                htmlFor="online-event"
                className="ms-2 text-md font-medium text-[#25194D] dark:text-[#EDEFFF] me-2"
              >
                Online Event
              </label>
            </div>
          </div>
          {/* Physical Event */}
          {physicalEvent && (
            <div className="mb-10 mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
                >
                  Country <span className="text-[#FA776C]">*</span>
                </label>
                <select className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Select Country</option>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-[#25194D] dark:text-[#EDEFFF]"
                >
                  State <span className="text-[#FA776C]">*</span>
                </label>
                <select className="dark:text-[#ffff] dark:bg-[#1F1F1F] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Select State</option>
                </select>
              </div>
              <div className="col-span-2 mt-4 relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="dark:text-[#DFE1FF] text-[#25194D] lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="online-location"
                  className="dark:text-[#ffff] dark:bg-[#1F1F1F] block w-full p-2.5 ps-10 text-sm text-gray-900 border border-[#1C1C1C] rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
          )}
          {/* Online Event */}
          {onlineEvent && (
            <div className="mt-4 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:text-[#DFE1FF] text-[#25194D] lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <input
                type="url"
                id="online-location"
                className="dark:text-[#ffff] dark:bg-[#1F1F1F] block w-full p-2.5 ps-10 text-sm text-gray-900 border border-[#1C1C1C] rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter online event URL"
                required
              />
            </div>
          )}
          <section className="mt-20 my-6 mb-10 w-full flex flex-row justify-center gap-x-8 items-center">
            <Link
              to="/"
              className="dark:border flex justify-center items-center shaodw-md w-[240px] h-[48px] rounded-md dark:text-[#DFE1FF] text-primary text-md dark:bg-black bg-[#624CF50D]"
            >
              Cancel
            </Link>
            <Link
              to="/events/create/2"
              className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]"
            >
              Proceed
            </Link>
          </section>
        </form>
      </section>
      <Footer />
    </main>
  );
}
