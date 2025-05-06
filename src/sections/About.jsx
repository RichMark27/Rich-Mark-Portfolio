import React from "react";
import { aboutMe } from "../assets";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="py-32 ">
      <div className="bg-secondary ">
        <section className="padding-x py-8 max-container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            About Me
          </motion.h2>
          <div className="space-y-4 mt-8 flex flex-col lg:flex-row">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-[430px] xl:w-1/2"
            >
              I’m a UX/UI Designer and Web Developer who turns complex ideas
              into elegant, human-centered digital experiences. With a sharp eye
              for design and a developer’s mindset, I create seamless interfaces
              that don’t just look great-they work flawlessly. I specialize in
              designing with purpose, coding with precision, and building
              products that feel as good as they function. From concept to code,
              I thrive at the intersection of creativity and logic, crafting
              intuitive solutions that elevate brands and delight users. I'm not
              just here to design a product—I’m here to shape meaningful digital
              experiences that make a lasting impact.
            </motion.p>

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mx-auto w-[510px] h-auto lg:w-[425px] lg:h-auto"
              src={aboutMe}
              alt="About"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
