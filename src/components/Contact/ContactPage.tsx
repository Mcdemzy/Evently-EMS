import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import PricingSection from "../shared/PricingSection";
import NewsLetter from "../shared/NewsLetter";
// import Footer from "../shared/Footer";

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
    <main className="dark:bg-black pt-[124px] pb-16">
      <ToastContainer />
      <section className="dark:bg-black pt-10">
        <h1 className="text-[#FA776C] text-3xl md:text-4xl font-semibold text-center">
          Contact Us
        </h1>
      </section>

      <main className="p-4 md:p-10 mt-11 flex flex-col md:flex-row gap-6 md:gap-9 justify-center items-center">
        {/* Form Section */}
        <section className="bg-[#EDEFFF] dark:bg-[#0D0D0D] dark:text-white w-full md:w-[55%] py-8 md:py-10 px-6 md:px-12 rounded-tl-[40px] rounded-br-[40px]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            {/* First Name */}
            <div>
              <label className="block text-lg font-normal">
                First Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-lg font-normal">
                Last Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-normal">
                Email Address<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-normal">
                Your Message<span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                className="bg-[#DFE1FF] dark:bg-[#1F1F1F] w-full px-4 py-2 mt-2 border rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
              ></textarea>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 rounded bg-red-500 text-white cursor-pointer"
                required
              />
              <label
                htmlFor="agree"
                className="ml-2 text-gray-700 dark:text-white"
              >
                I agree to the{" "}
                <span className="text-red-500 hover:underline cursor-pointer">
                  Terms & conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
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

        {/* Image Section */}
        <div className="hidden md:block w-full md:w-[35%]">
          <img
            src="/images/eventlyDesign.png"
            alt="Evently Design"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>

      <PricingSection />
      <NewsLetter />
      {/* <Footer /> */}
    </main>
  );
};

export default ContactPage;
