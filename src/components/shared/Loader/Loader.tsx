import React from "react";
import logo from "/images/logo.svg";
import "./Loader.css"; 

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md border-white/20 shadow-md bg-black/5 flex items-center justify-center z-50">
      <div className="loader">
        <div className="box">
          <div className="logo rounded-full bg-white">
            <img src={logo} alt="Logo" className="logo-svg" />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loader;
