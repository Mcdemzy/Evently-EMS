export default function FreeTicket() {
  return (
    <>
      <div className="mt-4 grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-[#25194D]"
          >
            Ticket Name <span className="text-[#FA776C]">*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className=" border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-[#25194D]"
          >
            Ticket Stock <span className="text-[#FA776C]">*</span>
          </label>
          <div className="flex flex-row gap-x-2">
            <select className="border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=""></option>
            </select>
            <select className="border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-[#25194D]"
          >
            Ticket Purchase Limit <span className="text-[#FA776C]">*</span>
          </label>
          <select className="border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value=""></option>
          </select>
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
                className="text-[#25194D] lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <input
              placeholder="Benefits of this ticket"
              type="text"
              id="online-location"
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="col-span-2 mt-4 relative">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-[#25194D]"
          >
            Ticket Description <span className="text-[#FA776C]">*</span>
          </label>
          <textarea
            cols={4}
            rows={5}
            className="border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </>
  );
}
