import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/"
                alt="Delar"
                className="w-12 h-12"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-600 hover:text-blue-500"
                >
                  
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/request-demo"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals & Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legals</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-gray-900 mt-8 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/documentation"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Documentation
                </Link>
              </li>
              
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-600 hover:text-blue-500"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Delar.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
