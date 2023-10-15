import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaDiscord, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <div id="footer" className="mt-20 bg-black text-gray-200 ">
        <ul
          id="socials"
          className="relative flex justify-center space-x-7 text-3xl items-center"
        >
          <li>
            <a href="#" id="socialLinks">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#" id="socialLinks">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#" id="socialLinks">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="#" id="socialLinks">
              <FaTelegram />
            </a>
          </li>
        </ul>
        <ul className="flex justify-center items-center space-x-5 mt-7 font-semibold uppercase">
          <li className="hover:opacity-20">
            <a href="/">Home</a>
          </li>
          <li className="hover:opacity-20">
            <a href="/event">Event</a>
          </li>
          <li className="hover:opacity-20">
            <a href="/about">About</a>
          </li>
          <li className="hover:opacity-20">
            <a href="/register">Register</a>
          </li>
        </ul>
        <h2 className="text-center mt-7 font-bold text-lg">
          Seraph Festival &copy;{currentYear}.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
