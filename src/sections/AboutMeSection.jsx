import React from "react";
import { motion } from "framer-motion";

function AboutMeSection() {
  return (
    <div>
      <section id="about" className="py-16 padding-x max-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="p-8 pb-16 bg-secondary mt-8 rounded-lg"
        >
          I am a professional web developer who designs and builds different
          websites, systems, and applications. With the knowledge I have in
          programming and different languages, I am knowledgeable in creating
          user-friendly applications and websites that can help businesses and
          people in the community. With a high vision of technological tools, I
          am assuring my clients that I can deliver quality work in producing a
          website.
        </motion.p>
      </section>
    </div>
  );
}

export default AboutMeSection;
