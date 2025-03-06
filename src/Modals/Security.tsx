import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { IoAtSharp } from "react-icons/io5";
import { PiCalculatorThin } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import "./checkbox.css";

const Security: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [checkedState, setCheckedState] = useState<string | null>(null);

  const methods = [
    {
      id: "email",
      label: "Email & Password",
      description:
        "Users are prompted to input their email address and password on log in to verify their identity. ",
      icon: <IoAtSharp className="w-5 h-5 text-[#6D6D6D]" />,
    },
    {
      id: "phone",
      label: "Phone number & Password",
      description:
        "Users are prompted to input their phone number and password on log in to verify their identity. ",
      icon: <PiCalculatorThin className="w-5 h-5 text-[#6D6D6D]" />,
    },
    {
      id: "google",
      label: "Google SSO Login",
      description:
        "Use Google account to verify user identity anf log in details",
      icon: <FcGoogle className="w-5 h-5" />,
    },
  ];

  const toggleMethod = (id: string) => {
    setActiveMethod((prev) => (prev === id ? null : id));
  };

  const toggleCheckbox = (id: string) => {
    setCheckedState((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="dark:bg-[#0D0D0D] bg-white bg-opacity-0 border border-[#DCDCDC] dark:border-none rounded-xl lg:p-6 p-3 w-full">
        <h3 className="lg:text-base text-sm font-semibold mb-6">Login</h3>
        <p className="font-medium text-xs dark:text-[#989898] text-[#474059] mb-6">
          Users can gain access into their new or existing accounts by using one
          of the listed authentication methods.
        </p>
        <div className="space-y-4">
          {methods.map((method, index) => (
            <div
              key={method.id}
              className={`pb-4 ${
                index !== methods.length - 1
                  ? "border-b dark:border-[#464646] border-[#E7E7E7]"
                  : ""
              }`}
              onClick={() => toggleMethod(method.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {method.icon}
                  <span className="dark:text-[#DCDCDC] text-[#1C1A24] lg:text-base text-sm font-medium">
                    {method.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMethod(method.id);
                    }}
                    className="dark:text-[#DCDCDC] text-[#1C1A24]"
                  >
                    {activeMethod === method.id ? (
                      <RxCaretUp />
                    ) : (
                      <RxCaretDown />
                    )}
                  </button>
                </div>
              </div>
              {activeMethod === method.id && (
                <div className="mt-4 ml-8" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-xs font-normal dark:text-[#989898] text-[#474059]">
                      {method.description}
                    </p>
                    <label className="relative">
                      <input
                        type="checkbox"
                        id={`cuatom-checkbox-${method.id}`}
                        className="hidden"
                        checked={checkedState === method.id}
                        onChange={() => toggleCheckbox(method.id)}
                      />
                      <span className="toggleSwitch"></span>
                    </label>
                  </div>
                  {checkedState === method.id && (
                    <button className="mt-4 dark:bg-[#DCDCDC] bg-[#000000] dark:hover:bg-white/80 hover:bg-black/80 text-white dark:text-[#3D3D3D] px-4 py-2 rounded-lg font-medium text-xs">
                      Reset password
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-right mt-4 mb-6">
        <button className="dark:bg-[#DCDCDC] bg-[#000000] dark:hover:bg-white/80 hover:bg-black/80 text-white dark:text-[#3D3D3D] px-4 py-2 rounded-lg font-medium text-xs">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Security;
