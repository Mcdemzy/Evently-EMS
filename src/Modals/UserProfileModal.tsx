import React, { useState, useEffect } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import SettingsModal from "./SettingsModal";
import { ModalProps } from "../types";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import useUser
import axios from "axios";

const UserProfileModal: React.FC<ModalProps> = ({ isOpen }) => {
  const { user, setUser, logout } = useUser(); // Access user data and logout function
  const [hasShadow, setHasShadow] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch user data if not available
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get("https://evently-ems-backend.vercel.app/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUser(response.data.user); // Set user data in context
          })
          .catch(() => {
            logout(); // Logout if the token is invalid
          });
      }
    }
  }, [user, setUser, logout]);

  if (!isOpen) return null;

  const handleLogout = () => {
    logout(); // Use the logout function from UserContext
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      {/* User Profile Modal */}
      <div
        className={`absolute top-12 right-0 lg:w-80 w-auto shadow-xl rounded-lg p-6 border border-white/20 space-y-7 ${
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
            <h3 className="font-bold whitespace-nowrap">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-sm font-medium whitespace-nowrap">
              {user?.username}
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-5">
            <IoSettingsOutline className="text-xl lg:w-14 w-12 text-[#989898]" />
            <button
              className="flex items-center hover:text-[#FA776C] space-x-5 font-medium"
              onClick={() => setIsSettingsOpen(true)}
            >
              <span>Settings</span>
            </button>
          </div>
          <div className="flex items-center space-x-5">
            <HiLogout className="text-xl lg:w-14 w-12 text-[#989898]" />
            <button
              className="flex items-center hover:text-[#FA776C] space-x-5 font-medium"
              onClick={handleLogout}
            >
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Render Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </>
  );
};

export default UserProfileModal;
