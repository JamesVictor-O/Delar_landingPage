import React, { useState } from "react";
import { Link } from 'react-scroll'
import Logo from "../../public/Frame 37142.png"
import { useTheme } from "next-themes"; 
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme(); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center   justify-between py-4 px-8 bg-transparent  shadow-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-bold px-16">
        <Link className="flex flex-row items-center cursor-pointer" to="/">
         <img src={Logo} alt=""  />
          <span className="text-blue-500 ml-3  md:block">DE</span>LAR


        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-8`}
      >
        <ul className="flex flex-col md:flex-row items-center  p-2 md:mx-40 rounded-xl md:space-x-8 space-y-4 md:space-y-0">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="benefit"
              className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
            How it Works
            </Link>
          </li>
          <li>
            <Link
              to="why-us"
              className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="faqs"
              className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
              FAQs
            </Link>
          </li>

         
        </ul>
        <li>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-200"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-900" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
            </button>
          </li>
      </nav>
    </header>
  );
};

export default Navbar;
