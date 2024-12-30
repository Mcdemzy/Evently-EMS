import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import UserProfileModal from "../../Modals/UserProfileModal";
import useOutsideClick from "./OutsideClick/useOutsideClick";

const ProfileMenu: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileModalOpen((prev) => !prev);
  };

  const ref = useOutsideClick(() => {
    setIsProfileModalOpen(false);
  });

  return (
    <div className="relative block" ref={ref}>
      {/* Profile Button */}
      <div
        className="border-gray-300 border w-10 h-10 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={handleProfileClick}
      >
        <FaUserLarge className="w-6 h-6 text-[#FA776C]" />
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <UserProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileMenu;
