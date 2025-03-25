import { fetchBanks, verifyAccountNumber } from "@/data/nigerianBanks";
import { useEffect, useState } from "react";

export default function PaidTicket({ formData, setFormData }: any) {
  const [banks, setBanks] = useState<any>([]);

  useEffect(() => {
    const getBanks = async () => {
      const bankList = await fetchBanks();
      setBanks(bankList);
    };

    getBanks();
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formData.bank && formData.accountNumber.length === 10) {
      const selectedBank = banks.find((b: any) => b.name === formData.bank);
      if (!selectedBank) return;

      verifyAccountNumber(selectedBank?.code, formData.accountNumber)
        .then((accountName) => {
          if (accountName) {
            setFormData((prev: any) => ({ ...prev, accountName }));
          }
        })
        .catch(() =>
          setFormData((prev: any) => ({ ...prev, accountName: "" }))
        );
    }
  }, [formData.bank, formData.accountNumber]);

  return (
    <>
      <section>
        <div className="mt-4 grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ticketName"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Ticket Name <span className="text-[#FA776C]">*</span>
            </label>
            <input
              type="text"
              name="ticketName"
              id="ticketName"
              value={formData.ticketName}
              onChange={handleChange}
              className="dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="ticketStock"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Ticket Stock <span className="text-[#FA776C]">*</span>
            </label>
            <div className="flex flex-row gap-x-2">
              <select
                name="ticketStock"
                value={formData.ticketStock}
                onChange={(e) =>
                  setFormData({ ...formData, ticketStock: e.target.value })
                }
                className="border-[#1C1C1C] dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="limited">Limited</option>
                <option value="unlimited">Unlimited</option>
              </select>
              {formData.ticketStock == "limited" ? (
                <input
                  type="number"
                  name="availableTickets"
                  value={formData.availableTickets}
                  onChange={handleChange}
                  className="dark:bg-[#1F1F1F] dark:border-none dark:text-[#fff] border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Ticket Purchase Limit <span className="text-[#FA776C]">*</span>
            </label>
            {formData.ticketStock == "limited" ? (
              <input
                type="text"
                name="purchaseLimit"
                id="username"
                className=" dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={formData.purchaseLimit}
                onChange={handleChange}
              />
            ) : (
              <div
                id="purchaseLimit"
                className="cursor-not-allowed border-none bg-[#e8e8e8] p-5 dark:text-[#fff] dark:bg-[#0a0a0a] dark:border-none dark:border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></div>
            )}
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Ticket Price <span className="text-[#FA776C]">*</span>
            </label>
            <div className="flex flex-row gap-x-2">
              <select className="border-[#1C1C1C] dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="₦">₦</option>
              </select>
              <input
                type="number"
                name="ticketPrice"
                id="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                className=" dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
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
                className="dark:text-[#EDEFFF] text-[#25194D] lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <input
              placeholder="Benefits of this ticket"
              type="text"
              id="benefits"
              className="dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none block border-[#1C1C1C] w-full p-2.5 ps-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 mt-4 relative">
            <label
              htmlFor="ticketDescription"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Ticket Description <span className="text-[#FA776C]">*</span>
            </label>
            <textarea
              cols={4}
              rows={5}
              className=" dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="ticketDescription"
              id="ticketDescription"
              value={formData.ticketDescription}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <h2 className="dark:text-[#EDEFFF] mt-6 text-[#25194D] text-2xl font-semibold">
          Banking
        </h2>
        <div className="mt-4 grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="username"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Bank <span className="text-[#FA776C]">*</span>
            </label>
            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              className="dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select a Bank</option>
              {banks.map((bank: any) => (
                <option key={bank.id} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label
              htmlFor="accountNumber"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Account Number <span className="text-[#FA776C]">*</span>
            </label>
            <div className="flex flex-row gap-x-2">
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className=" dark:text-[#fff] dark:bg-[#1F1F1F] dark:border-none border border-[#1C1C1C] text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="col-span-2 mt-4 relative">
            <label
              htmlFor="username"
              className="dark:text-[#EDEFFF] block mb-2 text-sm font-medium text-[#25194D]"
            >
              Account Name <span className="text-[#FA776C]">*</span>
            </label>
            {formData.accountName && (
              <p className="text-green-500 border border-[#1C1C1C] block w-full p-2.5 rounded-lg">
                {formData.accountName}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
