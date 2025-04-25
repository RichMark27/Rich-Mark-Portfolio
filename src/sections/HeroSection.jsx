import React, { useRef } from "react";
import profile from "../assets/profile-picture.jpg";
import { skillList } from "../constant";
import { motion } from "framer-motion";

function HeroSection() {
  const containerRef = useRef(null);
  return (
    <div className="relative">
      <section className="min-h-screen padding-x pt-16 gap-16 max-container w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className=" lg:w-1/2 h-full space-y-8">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-primary"
          >
            FRONTEND
            <br />
            DEVELOPER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg max-w-[435px]"
          >
            I am Rich Mark -
            <strong className="text-primary"> web-developer</strong> with a
            passion for creating beautiful and responsive websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.02 }}
            className="flex gap-8"
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary uppercase text-base lg:text-lg font-semibold text-white rounded-lg cursor-pointer"
              >
                Contact Me
              </motion.button>
            </a>
            <a href="#projects">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-4 py-2 bg-transparent uppercase text-base lg:text-lg font-semibold text-primary rounded-lg border-2 cursor-pointer hover:text-white hover:bg-primary transition-colors hover:border-primary"
              >
                view my work
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="h-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-[515px] w-[515px] mx-auto object-contain rounded-lg"
            src={profile}
            alt=""
          />
        </motion.div>

        <div className="absolute z-20 -bottom-[5%] left-0 py-4 bg-secondary px-8 w-full overflow-hidden">
          <motion.ul
            className="flex flex-row gap-16"
            ref={containerRef}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...skillList, ...skillList].map((item, index) => (
              <li key={index} className="text-onSecondary text-2xl font-bold">
                {item.skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
