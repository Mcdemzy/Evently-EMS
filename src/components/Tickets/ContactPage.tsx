import { useState } from "react";

const ContactPage = () => {
  // State to track the ticket option selection
  const [sendToDifferentEmail, setSendToDifferentEmail] = useState(false);

  const handleOptionChange = (event: any) => {
    setSendToDifferentEmail(event.target.value === "yes");
  };

  return (
    <main className="dark:bg-black dark:text-white">
      <div className="w-full max-w-7xl mx-auto p-6 ">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-6">
                Contact Information
              </h2>
              <p className="text-sm bg-purple-100 text-purple-700 px-4 py-2 rounded-lg mb-6">
                We’ve reserved your tickets. Please complete checkout to secure
                your tickets.
              </p>
              {/* Contact Form */}
              <form>
                {/* First Name */}
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Ajewole"
                    className="mt-1 p-2 w-full border rounded-md dark:text-black"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Ibitalayo"
                    className="mt-1 p-2 w-full border rounded-md dark:text-black"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ajewoleibitalayo@gmail.com"
                    className="mt-1 p-2 w-full border rounded-md dark:text-black"
                    required
                  />
                </div>

                {/* Confirm Email */}
                <div className="mb-4">
                  <label
                    htmlFor="confirmEmail"
                    className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                  >
                    Confirm Email address
                  </label>
                  <input
                    type="email"
                    id="confirmEmail"
                    placeholder="ajewoleibitalayo@gmail.com"
                    className="mt-1 p-2 w-full border rounded-md dark:text-black"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                  >
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <select
                      className="border rounded-md p-2 dark:text-black"
                      defaultValue="+234"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="9135161905"
                      className="flex-1 p-2 border rounded-md dark:text-black"
                      required
                    />
                  </div>
                </div>

                {/* Ticket Options */}
                <fieldset className="mb-6">
                  <legend className="block text-sm font-medium text-gray-700 mb-2">
                    Send ticket to different email addresses?
                  </legend>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ticketOptions"
                        value="yes"
                        className="border-gray-300 focus:ring-purple-500"
                        onChange={handleOptionChange}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ticketOptions"
                        value="no"
                        className="border-gray-300 focus:ring-purple-500"
                        onChange={handleOptionChange}
                        defaultChecked
                      />
                      <span>No</span>
                    </label>
                  </div>
                </fieldset>

                {/* Ticket Details - Conditional Rendering */}
                {sendToDifferentEmail &&
                  ["STANDARD", "VIP", "Table for 5"].map((ticket, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Ticket {index + 1} - {ticket}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor={`attendeeFirstName${index}`}
                            className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                          >
                            Attendee First name
                          </label>
                          <input
                            type="text"
                            id={`attendeeFirstName${index}`}
                            placeholder="First name"
                            className="mt-1 p-2 w-full border rounded-md dark:text-black"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`attendeeLastName${index}`}
                            className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                          >
                            Attendee Last name
                          </label>
                          <input
                            type="text"
                            id={`attendeeLastName${index}`}
                            placeholder="Last name"
                            className="mt-1 p-2 w-full border rounded-md dark:text-black"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`attendeeEmail${index}`}
                            className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                          >
                            Attendee Email address
                          </label>
                          <input
                            type="email"
                            id={`attendeeEmail${index}`}
                            placeholder="Email address"
                            className="mt-1 p-2 w-full border rounded-md dark:text-black"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`confirmAttendeeEmail${index}`}
                            className="block text-sm font-medium text-gray-700 dark:text-[#656565]"
                          >
                            Confirm Attendee Email address
                          </label>
                          <input
                            type="email"
                            id={`confirmAttendeeEmail${index}`}
                            placeholder="Confirm Email address"
                            className="mt-1 p-2 w-full border rounded-md dark:text-black"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="border p-4 rounded-lg shadow-lg h-fit">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="mb-6">
              <h3 className="font-bold">PARTY W ZEIGHT</h3>
              <ul className="text-sm space-y-2">
                <li>1 x STANDARD = ₦5,000</li>
                <li>1 x VIP = ₦15,000</li>
                <li>1 x Table for 5 = ₦80,000</li>
              </ul>
            </div>
            <div className="flex justify-between items-center font-bold mb-4">
              <span>Fees:</span>
              <span>₦1,500</span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>₦101,500</span>
            </div>
            <button className="mt-6 w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-800">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
