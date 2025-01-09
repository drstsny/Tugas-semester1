// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/icon/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container grid grid-cols-2 py-5 items-center ">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        {/* Navlinks section */}
        <div className="hidden md:flex items-center gap-10 md:text-base text-sm">
        <ul className="flex flex-1 gap-10">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* Button section */}
          <a href="/Login">
            <button className="rounded-full bg-gray-400 px-6 py-4 font-semibold text-white">
              {" "}
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;