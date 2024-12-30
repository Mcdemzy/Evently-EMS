import React from "react";
import { Link } from "react-router-dom";
import { AuthButtonsProps } from "../../types";

const AuthButtons: React.FC<AuthButtonsProps> = ({
  onCloseMenu = () => {}, 
  containerClass = "",
  isBigScreen = false,
}) => {
  const defaultContainerClass = isBigScreen
    ? "gap-x-6 lg:flex hidden items-center"
    : "mt-auto mb-10 flex gap-4 pt-4 border-t dark:border-[#3D3D3D] border-gray-300";

  const defaultButtonClass = isBigScreen
    ? "px-5 py-2 rounded-lg"
    : "px-4 py-2 rounded-lg";

  return (
    <div className={`${defaultContainerClass} ${containerClass}`}>
      <Link to="/login">
        <button
          className={`${defaultButtonClass}  ${
            isBigScreen
              ? "hover:text-[#FA776C]"
              : "bg-gray-400 hover:bg-gray-500 text-white"
          }`}
          onClick={onCloseMenu}
        >
          Login
        </button>
      </Link>
      <button
        className={`${defaultButtonClass} ${
          isBigScreen
            ? "bg-[#624CF5] hover:bg-[#4f46e5] text-white"
            : "bg-[#624CF5] hover:bg-[#4f46e5] text-white"
        }`}
        onClick={onCloseMenu}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;
