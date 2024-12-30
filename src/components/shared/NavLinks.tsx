import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinksProps } from "../../types";

    
const NavLinks: React.FC<NavLinksProps> = ({ links, orientation, onClick }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#FA776C] font-semibold"
      : "text-lg font-normal transition duration-200 hover:text-[#FA776C]";

  const containerClass =
    orientation === "horizontal"
      ? "space-x-10 lg:block hidden"
      : "flex flex-col space-y-8";

  return (
    <div className={containerClass}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={linkClass}
          onClick={onClick}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
