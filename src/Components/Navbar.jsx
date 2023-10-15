import React, { useContext } from "react";
import SeraphFestival from "../images/photo_5987639389850811976_y.jpg";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GlobalContext } from "../Context";

const Navbar = () => {
  const { hidden, setHidden } = useContext(GlobalContext);

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between w-[92%] h-[12vh]  lg:h-[20vh] md:mt-0">
        <div>
          <a href="/">
            <img
              src={SeraphFestival}
              alt="seraph-festival"
              className="w-28 mt-2 md:w-40"
            />
          </a>
        </div>
        <div
          className={`absolute md:static md:min-h-fit min-h-[30vh] bg-white mt-3 duration-500 left-0 ${
            hidden ? "top-[-100%]" : "top-[9%] "
          } w-full md:w-auto flex items-center px-5`}
        >
          <ul className=" flex flex-col md:flex-row md:items-center gap-8 md:gap-[4vw]">
            <a
              className="hover:text-purple-600 font-black text-lg md:text-2xl"
              href="/event"
            >
              Events
            </a>
            <a
              className="hover:text-purple-600 font-black text-lg md:text-2xl"
              href="/about"
            >
              About
            </a>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button>
            <a href="/register">
              <button className="bg-purple-700 font-semibold text-white md:px-5 md:py-2 px-3 py-2 rounded-sm hover:bg-pink-700 transition-all duration-200">
                Register
              </button>
            </a>
          </button>
          {hidden ? (
            <FaBars
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <FaX
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
