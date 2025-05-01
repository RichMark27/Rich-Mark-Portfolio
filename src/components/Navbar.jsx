import React, { useState } from "react";
import { navList } from "../constants";
import { motion } from "framer-motion";
import { menuIcon, closeIcon } from "../assets";

const menuContainerVariant = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      stiffness: 20,
      damping: 15,
    },
  },
};

const menuVariant = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
};

function Navbar() {
  const [navStatus, setNavStatus] = useState(false);

  const handleNavStatus = () => setNavStatus((prev) => !prev);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary">
      <header className="relative max-container flex z-50 justify-between items-center py-4 padding-x">
        <p className="text-2xl sm:text-3xl font-black text-white">RM.</p>
        <nav>
          <ul className="hidden lg:flex gap-8">
            {navList.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-lg font-semibold text-gray-500 border-b-2 border-transparent hover:border-accent hover:text-white p-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <img
            className="block lg:hidden w-[30px] h-[25px]"
            src={navStatus ? closeIcon : menuIcon}
            onClick={handleNavStatus}
            alt="Menu Icon"
          />
        </nav>
      </header>

      {/*menu slide*/}
      <motion.div
        variants={menuContainerVariant}
        initial={false}
        animate={navStatus ? "visible" : "hidden"}
        className="absolute left-0 top-0 z-10 min-h-screen w-full bg-primary"
      >
        <ul className="pt-32 px-16">
          {navList.map((item) => (
            <motion.li
              variants={menuVariant}
              key={item.href}
              className="py-8 border-b-2 border-accent text-center"
            >
              <a href={item.href} className="text-white text-3xl font-semibold">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
