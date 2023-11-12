import { useState } from "react";
import { logo, profile } from "../assets/export";
import { AiOutlineClose } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { navLinks } from "../utils/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  return (
    <nav className="fixed w-full bg-oxfordBlue2 md:px-12 sm:px-8 xs:px-5 py-3 z-[1000]">
      <div className="w-full relative flex justify-between items-center">
        <div className="xs:w-1/2 sm:w-full md:w-1/2 lg:w-full">
          <img src={logo} className="max-w-full" alt="navbar-logo" />
        </div>
        <ul className="w-full md:flex justify-start items-center xs:hidden">
          {navLinks.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={`sm:text-sm xs:text-xs md:text-base font-medium sm:mr-8 mr-12 cursor-pointer ${
                  isActive === title ? "text-violetBlue" : "text-white"
                } hover:text-violetBlue`}
                onClick={() => setIsActive(title)}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className="w-1/4 flex justify-start items-center ">
          <button
            type="button"
            className="bg-violetBlue xs:p-[11px] sm:p-3 sm:mr-3 rounded-full cursor-pointer"
          >
            <BiWallet size={27} className="max-w-full text-white" />
          </button>
          <button type="button">
            <img
              src={profile}
              className=" max-w-full xs:ml-1  border border-violetBlue rounded-full"
              alt="wallet-profile"
            />
          </button>
        </div>
        <div className="nav-toggle sm:ml-3 md:hidden">
          {isOpen ? (
            <AiOutlineClose
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-full h-auto absolute left-0 bg-oxfordBlue2 z-10">
          <ul className="flex flex-col justify-center items-center py-2">
            {navLinks.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  className={`text-lg py-4 font-medium cursor-pointer ${
                    isActive === title ? "text-violetBlue" : "text-white"
                  } hover:text-violetBlue`}
                  onClick={() => setIsActive(title)}
                >
                  <a href={`#${id}`} onClick={() => setIsOpen(false)}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
