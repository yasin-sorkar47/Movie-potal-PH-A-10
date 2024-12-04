import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Website Name and Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div>
              <img
                className="h-8 mb-2 mx-auto md:mx-0 "
                src={logo}
                alt="logo"
              />
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2024 Movie Portal. All Rights Reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg mb-2">Contact Us:</p>
            <p className="text-gray-400 text-sm mb-1">
              mdyacinsorkar17@gmail.com
            </p>
            <p className="text-gray-400 text-sm">+88 01789461747</p>
          </div>

          {/* Social Media Links */}
          <div>
            <p className="text-lg mb-2 text-center">Social Media Links:</p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaFacebookSquare className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaSquareTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600"
              >
                <FaInstagramSquare className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Privacy and Terms Links */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <Link to="/privacy" className="hover:text-gray-300 mx-2">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300 mx-2">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
