import React, { useEffect, useState } from "react";
import { ModalProps } from "../types";
import Security from "./Security";
import { HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import "./checkbox.css";
import "./customScrollbar.css";

const SettingsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"Account" | "Security">("Account");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-black/40 lg:rounded-3xl rounded-none w-full lg:max-w-4xl lg:h-[680px] h-full backdrop-blur-lg backdrop-brightness-90 border border-white/20 shadow-md relative overflow-hidden">
        {/* Close Button */}
        <div className="absolute right-6 top-6 z-[10000] cursor-pointer">
          <button
            onClick={onClose}
            className="text-xl font-bold dark:text-gray-500 text-black dark:hover:text-white/50 hover:text-black/50"
          >
            <HiX />
          </button>
        </div>

        <div className="flex h-full">
          {/* Tab Navigation */}
          <div className="flex flex-col gap-4 my-16 w-auto lg:mx-8 mx-auto">
            <button
              className={`px-4 py-2 flex items-center gap-5 ${
                activeTab === "Account"
                  ? "dark:text-[#EDEFFF] text-black font-semibold text-base"
                  : "dark:text-gray-500 text-[#575757]"
              }`}
              onClick={() => setActiveTab("Account")}
            >
              <AiOutlineUser className="w-5 h-5" />
              <span className="hidden lg:block">Account</span>{" "}
            </button>
            <button
              className={`px-4 py-2 flex items-center gap-5 ${
                activeTab === "Security"
                  ? "dark:text-[#EDEFFF] text-black font-semibold text-base"
                  : "dark:text-gray-500 text-[#575757]"
              }`}
              onClick={() => setActiveTab("Security")}
            >
              <BsShieldLock className="w-5 h-5" />
              <span className="hidden lg:block">Security</span>{" "}
            </button>
          </div>

          {/* Divider */}
          <div className="border dark:border-[#464646] border-[#DCDCDC] lg:h-[680px]"></div>

          {/* Modal Header and Content (Scrollable) */}
          <div className="w-full overflow-auto overflow-x-hidden custom-scrollbar">
            <div className="w-full py-16 lg:px-6 px-3 lg:mr-9 mr-0">
              <div className="flex justify-between items-center mb-6">
                <div className="font-semibold lg:text-2xl text-base whitespace-nowrap">
                  {activeTab === "Account" ? (
                    <h2>Account details</h2>
                  ) : (
                    <h2>Security</h2>
                  )}
                </div>

                {activeTab === "Account" ? (
                  <button className="bg-[#F73F3C] hover:bg-[#ff5350] lg:text-base text-xs text-white lg:px-4 lg:py-2 px-2 py-1 rounded-lg">
                    Delete account
                  </button>
                ) : null}
              </div>

              {activeTab === "Account" ? (
                <div>
                  {/* Account Details Section */}
                  <form className="space-y-4 border dark:border-[#464646] border-[#DCDCDC] rounded-xl lg:p-6 p-3">
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-[#DCDCDC] text-[#454545]">
                        Firstname
                      </label>
                      <input
                        type="text"
                        defaultValue="Admin"
                        className="block w-full border-[#E7E7E7] border dark:border-none dark:bg-[#1F1F1F] bg-white bg-opacity-0 dark:text-[#989898] text-[#5D5D5D] rounded-md p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-[#DCDCDC] text-[#454545]">
                        Lastname
                      </label>
                      <input
                        type="text"
                        defaultValue="Sec"
                        className="block w-full border-[#E7E7E7] border dark:border-none dark:bg-[#1F1F1F] bg-white bg-opacity-0 dark:text-[#989898] text-[#5D5D5D] rounded-md p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-[#DCDCDC] text-[#454545]">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="AdminSec"
                        className="block w-full border-[#E7E7E7] border dark:border-none dark:bg-[#1F1F1F] bg-white bg-opacity-0 dark:text-[#989898] text-[#5D5D5D] rounded-md p-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-[#DCDCDC] text-[#454545]">
                        Email address
                      </label>
                      <input
                        type="email"
                        defaultValue="adminsec@gmail.com"
                        className="block w-full border-[#E7E7E7] border dark:border-none dark:bg-[#1F1F1F] bg-white bg-opacity-0 dark:text-[#989898] text-[#5D5D5D] rounded-md p-2 text-xs"
                      />
                    </div>
                  </form>

                  <div className="text-right">
                    <button className="dark:bg-[#DCDCDC] bg-[#000000] dark:hover:bg-white/80 hover:bg-black/80 text-white dark:text-[#3D3D3D] px-4 py-2 rounded-lg font-medium text-xs mt-4">
                      Save Changes
                    </button>
                  </div>

                  {/* Session Management Section */}
                  <div className="mt-6">
                    <h3 className="ont-semibold lg:text-xl text-sm whitespace-nowrap">
                      Session Management
                    </h3>

                    <div className="lg:mt-6 mt-3 lg:p-6 p-3 rounded-xl dark:bg-[#0D0D0D] bg-white bg-opacity-0 border-[#DCDCDC] border dark:border-none">
                      <div className="mt-2 lg:space-y-2 space-y-1">
                        <label className="block lg:text-base text-sm font-semibold">
                          Timeouts
                        </label>
                        <div className="flex items-center justify-between gap-5">
                          <p className="font-medium lg:text-sm text-xs dark:text-[#989898] text-[#474059]">
                            Set time intervals between sessions
                          </p>
                          <select className="block w-auto dark:bg-[#0D0D0D] bg-white bg-opacity-0 dark:text-[#989898] text-[#474059] text-xs lg:text-base p-1 border-b dark:border-[#464646] border-[#DCDCDC]">
                            <option>5mins</option>
                            <option>10mins</option>
                            <option>15mins</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-5 lg:space-y-2 space-y-2">
                        <label className="block lg:text-base text-sm font-semibold">
                          Concurrent sessions
                        </label>
                        <div className="flex items-center justify-between gap-5">
                          <p className="font-medium lg:text-sm text-xs dark:text-[#989898] text-[#474059]">
                            Allow login sessions on multiple devices at once
                          </p>
                          <label>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="hidden"
                            />
                            <span className="toggleSwitch"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Security />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
