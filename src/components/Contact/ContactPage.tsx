import { useRef, useState } from "react";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { LuTicket } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { BiParty } from "react-icons/bi";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_v8tcnqi",
        "template_4mcbjnf",
        form.current,
        "Bv1hcOwU8VLedk5Xt"
      )
      .then(
        () => {
          toast.success("Email Sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <section className="mt-10">
        <h1 className="text-[#FA776C] text-[3rem] font-semibold text-center">
          Contact Us
        </h1>
      </section>

      <main className="p-10 mt-11 flex md:flex-row flex-col gap-9 justify-center">
        <section className="bg-[#EDEFFF] dark:bg-[#0D0D0D] h-full w-full md:w-[55%] min-h-[500px] py-10 px-[60px] rounded-tl-[40px] rounded-br-[40px]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            {/* Form fields */}
            <div>
              <label className="block text-[1.25rem] font-normal">
                First Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-[1.25rem] font-normal">
                Last Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-[1.25rem] font-normal">
                Email Address<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-[1.25rem] font-normal">
                Your Message<span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 cursor-pointer"
                required
              />
              <label
                htmlFor="agree"
                className="text-gray-700 dark:text-white cursor-pointer"
              >
                I agree to the{" "}
                <span className="text-red-500">Terms & conditions</span>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        <section className="w-[50%] flex items-center justify-center relative">
          {/* Evently Logo Section */}
          <div className="flex items-center justify-center w-[200px] h-[200px] gap-3 shadow-2xl rounded-full px-[13px] py-[50px] z-[1] bg-white dark:text-black">
            <img
              src="images/logo.svg"
              width={30}
              height={50}
              alt="Event Image"
            />
            <span className="md:text-2xl text-xl font-bold">Evently</span>
          </div>

          {/* Icon and Line Section */}
          <section className="absolute flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <FaRegCalendarXmark />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {/* Broken Line Effect */}
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <BsPersonVcard />
              </span>
            </div>
          </section>

          <section className="absolute rotate-[60deg] flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <MdOutlineCardGiftcard />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <HiOutlineMail />
              </span>
            </div>
          </section>

          <section className="absolute rotate-[-60deg] flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <LuTicket />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <BiParty />
              </span>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
