import { Facebook, Globe, Instagram, Twitter, Send } from "lucide-react";
import { BiParty } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuTicket } from "react-icons/lu";
import { MdOutlineCardGiftcard } from "react-icons/md";
export default function Socials() {
  return (
    <>
      <section className="mt-4 w-[95%] md:w-[80%] m-auto  py-10">
        <h2 className="dark:text-[#EDEFFF] text-[#25194D] text-2xl font-semibold">
          SOCIAL LINKS
        </h2>
        <div className="mt-2 w-full flex flex-col lg:flex-row gap-x-5 jusitfy-between items-center">
          <div className="w-full lg:w-[50%] space-y-4">
            {/* website */}
            <div className="mt-4 flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border  border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Globe className="text-[#25194D] dark:text-[#FFFFFF]" />
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* twitter */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Twitter className="text-[#25194D] dark:text-[#FFFFFF]" />
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* instagram */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Instagram className="text-[#25194D] dark:text-[#FFFFFF]" />
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* whatsapp */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-[#25194D] dark:text-[#FFFFFF] bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* facebook */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Facebook className="text-[#25194D] dark:text-[#FFFFFF]" />
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* telegram */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="dark:bg-[#1F1F1F] dark:border-r-[#FFFFFF] w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Send className="text-[#25194D] dark:text-[#FFFFFF]" />
              </div>
              <input
                className="dark:bg-[#1F1F1F] w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="mt-14 hidden md:w-[50%] py-40  md:flex items-center justify-center relative">
            {/* Evently Logo Section */}
            <div className="flex items-center justify-center w-[200px] h-[200px] gap-3 shadow-2xl rounded-full px-[13px] py-[50px] z-[1] bg-white dark:text-black">
              <img
                src="/images/logo.svg"
                width={30}
                height={50}
                alt="Event Image"
                className=""
              />
              <span className="md:text-2xl text-xl font-bold">Evently</span>
            </div>

            {/* Icon and Line Section */}
            <section className="absolute flex flex-col items-center">
              <div className="bg-[#FEF3F2] w-[20px] h-[20px] rounded-full p-4 flex justify-center items-center">
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
                  <BiParty />
                </span>
              </div>
            </section>
          </div>
        </div>
        {/* buttons */}
      </section>
    </>
  );
}
