import React from "react";
import { profile } from "../assets/index";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="py-8">
      <section className="relative max-container min-h-screen w-full flex flex-col lg:flex-row lg:justify-between lg:items-center padding-x gap-y-28">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-16 uppercase text-accent text-shadow-black text-shadow-sm"
          >
            Frontend
            <br />
            developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1 }}
            className="text-text-gray max-w-[480px] lg:w-[440px]"
          >
            I'm Rich Mark — a UX/UI{" "}
            <span className="text-accent">Designer and Web Developer</span>{" "}
            driven by the craft of designing beautiful, high-performing websites
            that engage and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex gap-8"
          >
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className="text-base font-semibold uppercase px-8 py-4 text-white bg-accent rounded-lg"
            >
              contact me
            </motion.button>
            <a href="/Rich-Mark-Landicho.pdf" download>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="text-base font-semibold text-white uppercase py-4 px-8 border-2 border-accent rounded-lg"
              >
                download cv
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="mx-auto w-[545px] h-[545] md:w-[645px] md:h-[645px] lg:h-[430px] lg:w-[430px] xl:w-[600px] xl:h-[600px] object-contain"
            src={profile}
            alt="Rich Mark Profile"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
