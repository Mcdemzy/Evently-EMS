import { HiX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBarProps } from "./types";
import AuthButtons from "./components/shared/AuthButtons";
import NavLinks from "./components/shared/NavLinks";
import ProfileMenu from "./components/shared/ProfileMenu";
import useOutsideClick from "./components/shared/OutsideClick/useOutsideClick";

function NavBar({ isDarkMode, toggleDarkMode }: NavBarProps) {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarRef = useOutsideClick(() => {
    setMobileMenuOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar fixed top-0 w-full z-10 flex items-center justify-between md:p-10 p-7
          ${
            hasShadow
              ? "backdrop-blur-lg backdrop-brightness-90 border-b border-white/20 shadow-md"
              : ""
          }
          ${isDarkMode ? "bg-black/40 text-white" : "bg-white/40 text-black"}`}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <span className="ml-2 lg:text-3xl text-xl font-bold">Evently</span>
        </Link>

        <NavLinks
          links={[
            { path: "/events/all", label: "Events" },
            { path: "/pricing", label: "Pricing" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
            { path: "/profile", label: "My Profile" },
          ]}
          orientation="horizontal"
        />

        <div className="flex items-center gap-6">
          <ProfileMenu />

          <AuthButtons isBigScreen={true} />

          {/* Light and dark modes */}
          <div
            onClick={toggleDarkMode}
            className="relative hidden w-9 h-9 bg-slate-200 dark:bg-black rounded-full p-1 transition-all duration-500 lg:flex items-center justify-between overflow-hidden cursor-pointer"
          >
            <button
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                isDarkMode ? "translate-x-[-150%]" : "translate-x-[30%]"
              }`}
            >
              <IoMdMoon size={18} className="text-[#0D0C00]" />
            </button>

            <button
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                isDarkMode ? "translate-x-[-70%]" : "translate-x-[1500%]"
              }`}
            >
              <IoMdSunny size={18} className="text-[#4F81EC]" />
            </button>
          </div>

          <div className="block lg:hidden ">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={sidebarRef}
          className={`
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            fixed lg:hidden top-0 right-0 h-full w-2/3 max-w-xs dark:text-white text-center flex flex-col items-center lg:pt-20 pt-16 space-y-6 text-lg border-l transform transition-transform duration-300 z-[9999] backdrop-blur-lg border-white/20 shadow-md dark:bg-black/50 bg-white/50
      `}
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center justify-between w-full absolute lg:top-10 top-7 right-0 px-7 lg:pr-10 pr-7 ">
            <div
              onClick={toggleDarkMode}
              className="relative lg:hidden w-9 h-9 bg-slate-200 dark:bg-black rounded-full p-1 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer border border-gray-50"
            >
              <button
                className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                  isDarkMode ? "translate-x-[-150%]" : "translate-x-[30%]"
                }`}
              >
                <IoMdMoon size={18} className="text-[#0D0C00]" />
              </button>

              <button
                className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                  isDarkMode ? "translate-x-[-70%]" : "translate-x-[1500%]"
                }`}
              >
                <IoMdSunny size={18} className="text-[#4F81EC]" />
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl focus:outline-none dark:text-white"
            >
              <HiX />
            </button>
          </div>

          <NavLinks
            links={[
              { path: "/events/all", label: "Events" },
              { path: "/pricing", label: "Pricing" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/profile", label: "My Profile" },
            ]}
            orientation="vertical"
            onClick={() => setMobileMenuOpen(false)}
          />

          <AuthButtons isBigScreen={false} />
        </div>
      )}
    </>
  );
}

export default NavBar;
