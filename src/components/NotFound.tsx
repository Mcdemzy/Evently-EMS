import { motion } from "framer-motion";
import Earth from "/assets/images/earth.svg";
import EarthL from "/assets/images/earth-l.svg";
import Astronaut from "/assets/images/Astronaut.svg";
import Oops from "/assets/images/Vector.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-center p-6 pt-20 pb-0">
      <div className="relative flex items-center justify-center md:text-[250px] text-[125px] font-bold text-gray-900">
        <span className="mr-4 font-black text-[#292929] dark:text-[#DCDCDC]">
          4
        </span>
        <div className="relative md:w-64 md:h-64 w-32 h-32 flex justify-end">
          <motion.img
            src={Astronaut}
            alt="Astronaut"
            className="absolute md:top-0 md:right-0 top-12 right-6 md:w-40 md:h-44 w-20 h-24"
            animate={{
              x: [80, 30, 80],
              y: [-150, -120, -150],
              opacity: [1, 1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={Oops}
            alt="Oops!"
            className="absolute md:top-10 md:right-10 top-5 right-5 md:w-14 md:h-12 w-7 h-7 border-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <div className="w-full h-full">
            <img
              src={Earth}
              alt="Earth"
              className="w-full h-full dark:hidden"
            />

            <img
              src={EarthL}
              alt="EarthL"
              className="w-full h-full hidden dark:block"
            />
          </div>
        </div>
        <span className="ml-4 font-black text-[#292929] dark:text-[#DCDCDC]">
          4
        </span>
      </div>
      <p className="mt-4 text-[#1C1C1C] dark:text-[#DFE1FF] md:text-xl text-sm font-medium">
        We seem to have run into a bit of a problem with this page, <br />{" "}
        kindly go back to the home page.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-[#624CF5] text-white rounded-lg shadow-lg hover:bg-[#6440EB]">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
