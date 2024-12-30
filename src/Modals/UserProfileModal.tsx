import { UserProfileModalProps } from "../types";
import { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-12 right-0 lg:w-80 w-auto shadow-xl rounded-lg p-6 border border-white/20 space-y-7  ${
        hasShadow
          ? "backdrop-blur-lg backdrop-brightness-90 shadow-md dark:bg-black/90 bg-white/90"
          : "dark:bg-black dark:text-[#EFEFEF] text-[#3D3D3D] bg-white"
      }`}
    >
      <div className="flex items-center space-x-5 mb-4">
        <div className="border-gray-300 border lg:w-14 lg:h-14 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl overflow-hidden">
          <FaUserLarge className="w-10 h-full text-[#FA776C] mt-3" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold whitespace-nowrap">Adeoluwa Ademola</h3>
          <p className="text-sm font-medium whitespace-nowrap">Zion_Stella</p>
        </div>
      </div>
      <div className="space-y-6">                 
        <div className="flex items-center space-x-5">
          <IoSettingsOutline className="text-xl lg:w-14 w-12 text-[#989898]" />
          <button
            className="flex items-center hover:text-[#FA776C] space-x-5 font-medium"
            onClick={() => alert("Settings clicked")}
          >
            <span>Settings</span>
          </button>
        </div>
        <div className="flex items-center space-x-5">
          <HiLogout className="text-xl lg:w-14 w-12 text-[#989898]" />
          <button
            className="flex items-center hover:text-[#FA776C] space-x-5 font-medium"
            onClick={onClose}
          >
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
