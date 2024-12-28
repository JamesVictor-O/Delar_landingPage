import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Frame 37142.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t-2" id="contact">
      <div className="mx-10 py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex flex-row items-center text-3xl">
              <img
                src={Logo}
                alt="Delar"
                className="w-12 h-12"
              />
               <span className="text-blue-500 ml-3 hidden  md:block">DE</span>LAR
            </div>
            <div className="flex space-x-4">
              <a
                href="https://x.com/delarproject"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-500"
              >
             
                <FaXTwitter  size={30} />
              </a>
              <a
                href="https://instagram"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-500"
              >
             
             <FaInstagram  size={30}/>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088954730570"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-500"
              >
               <FaFacebookF size={30} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className=" hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className=" hover:text-blue-500"
                >
                  
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/testimonials"
                  className=" hover:text-blue-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className=" hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="t hover:text-blue-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/request-demo"
                  className="t hover:text-blue-500"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals & Resources */}
          <div>
            <h4 className="font-bold  mb-4">Legals</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className=" hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className=" hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className=" hover:text-blue-500"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            <h4 className="font-bold  mt-8 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/documentation"
                  className=" hover:text-blue-500"
                >
                  Documentation
                </Link>
              </li>
              
              <li>
                <Link
                  to="/faqs"
                  className=" hover:text-blue-500"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-sm ">
          Copyright © {new Date().getFullYear()} Delar.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
