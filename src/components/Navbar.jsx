import React, { useEffect, useState } from "react";
import { navbarList } from "../constant";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const menuVariant = {
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { stiffness: 20, damping: 15 },
  },
  open: { opacity: 1, x: 0, transition: { stiffness: 20, damping: 15 } },
};

function Navbar() {
  const [isClosed, setIsClosed] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNavBar(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavBar && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-secondary fixed z-50 top-0 left-0 w-full"
        >
          <header className="padding-x max-container flex justify-between items-center py-2 lg:py-4">
            <p className="text-3xl font-black z-50">RM.</p>

            <motion.div
              variants={menuVariant}
              initial={false}
              animate={isClosed ? "open" : "closed"}
              className="block lg:hidden w-full h-screen z-10 absolute left-0 top-0 bg-secondary pt-20"
            >
              <ul className="px-16 flex flex-col gap-8">
                {navbarList.map((navItem) => (
                  <li
                    key={navItem.label}
                    className="text-onSecondary font-semibold text-2xl border-b-1 border-b-primary p-4 text-center"
                    onClick={() => setIsClosed((prev) => !prev)}
                  >
                    <a href={navItem.href}>{navItem.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div
              className="block lg:hidden z-50"
              onClick={() => setIsClosed((prev) => !prev)}
            >
              {isClosed ? (
                <IoMdClose className="text-white" size={30} />
              ) : (
                <AiOutlineMenu className="text-white" size={30} />
              )}
            </div>

            <nav className="hidden lg:block">
              <ul className="flex gap-16">
                {navbarList.map((navItem) => (
                  <li key={navItem.label}>
                    <a
                      className="text-lg font-medium text-onSecondary pb-2 border-b-2 border-transparent hover:border-b-primary hover:text-white"
                      href={navItem.href}
                    >
                      {navItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
