import { HiX, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { NavBarProps } from './types';
import useOutsideClick from './components/shared/OutsideClick/useOutsideClick';

function NavBar({ isDarkMode, toggleDarkMode }: NavBarProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarRef = useOutsideClick(() => setMobileMenuOpen(false));

  return (
    <div
      className={`navbar sticky top-0 w-full z-10 flex items-center justify-between md:p-10 p-7 bg-slate-50 ${
        isDarkMode
          ? 'dark:bg-black text-white shadow-slate-800 shadow-md'
          : 'light'
      } bg-opacity-95 shadow-lg`}
    >
      <Link to="/" className="flex items-center">
        <img src="/images/logo.svg" width={30} height={50} alt="Evently logo" />
        <span className="ml-2 text-3xl font-bold">Evently</span>
      </Link>

      <div className="space-x-10 lg:block hidden">
        <NavLink
          to="/events/all"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'text-lg font-normal transition-all duration-100 hover:text-[#FA776C]'
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'text-lg font-normal transition-all duration-100 hover:text-[#FA776C]'
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'text-lg font-normal transition-all duration-100 hover:text-[#FA776C]'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'text-lg font-normal transition-all duration-100 hover:text-[#FA776C]'
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'text-lg font-normal transition-all duration-100 hover:text-[#FA776C]'
          }
        >
          My Profile
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        <div className="gap-x-6 lg:flex hidden items-center">
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg hover:text-[#FA776C]">
              Login
            </button>
          </Link>
          <button className="px-5 py-2 rounded-lg bg-[#624CF5] hover:bg-[#4f46e5] text-white">
            Sign Up
          </button>
        </div>
        <div
          onClick={toggleDarkMode}
          className="relative w-9 h-9 bg-slate-200 dark:bg-black rounded-full p-1 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer"
        >
          <button
            className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
              isDarkMode ? 'translate-x-[-150%]' : 'translate-x-[30%]'
            }`}
          >
            <IoMdMoon size={18} className="text-[#0D0C00]" />
          </button>

          <button
            className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
              isDarkMode ? 'translate-x-[-70%]' : 'translate-x-[1500%]'
            }`}
          >
            <IoMdSunny size={18} className="text-[#4F81EC]" />
          </button>
        </div>
        <div className="block lg:hidden z-30">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-slate-50 bg-opacity-95 dark:bg-black dark:bg-opacity-95 text-center flex flex-col items-center pt-20 space-y-6 text-lg border-l border-slate-800 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-20`}
      >
        <NavLink
          to="/events/all"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'hover:text-[#FA776C] transition duration-200 '
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Events
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'hover:text-[#FA776C] transition duration-200'
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'hover:text-[#FA776C] transition duration-200'
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'hover:text-[#FA776C] transition duration-200'
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? 'text-[#FA776C] font-semibold'
              : 'hover:text-[#FA776C] transition duration-200'
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          My Profile
        </NavLink>
        <div className="mt-auto mb-10 flex gap-4 pt-4 border-t dark:border-[#3D3D3D] border-gray-300">
          <Link to="/login">
            <button
              className="px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-500 transition text-white dark:text-"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </button>
          </Link>
          <button
            className="px-4 py-2 rounded-lg bg-[#624CF5] hover:bg-[#4f46e5] text-white transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
