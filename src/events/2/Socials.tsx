import { Globe } from "lucide-react";
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
        <h2 className="text-[#25194D] text-2xl font-semibold">SOCIAL LINKS</h2>
        <div className="mt-2 w-full flex flex-col lg:flex-row gap-x-5 jusitfy-between items-center">
          <div className="w-full lg:w-[50%] space-y-4">
            {/* website */}
            <div className="mt-4 flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <Globe color="#25194D" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* twitter */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <img src="/images/x.png" alt="twitter" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* instagram */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <img src="/images/instagram.png" alt="instagram" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* whatsapp */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <img src="/images/whatsapp.png" alt="whatsapp" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* facebook */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <img src="/images/facebook.png" alt="facebook" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
                type="text"
                name=""
                id=""
              />
            </div>
            {/* telegram */}
            <div className="flex jusitfy-start items-center rounded-md">
              <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
                <img src="/images/telegram.png" alt="telegram" />
              </div>
              <input
                className="w-full h-[46px] border-y border-e border-[#1C1C1C] rounded-e-md"
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
