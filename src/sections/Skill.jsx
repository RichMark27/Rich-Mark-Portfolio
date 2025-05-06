import React from "react";
import SkillCard from "../components/cards/SkillCard";
import { skillList } from "../constants";
import { motion } from "framer-motion";

const skillContainerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {duration:0.5, delay:0.5, staggerChildren: 0.7 } },
};

const skillVariant = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function Skill() {
  return (
    <div id="skills" className="py-32">
      <section className="padding-x max-container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-4"
        >
          Technologies I’ve been working with recently
        </motion.p>
        <motion.div
          variants={skillContainerVariant}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-16 pt-8"
        >
          {skillList.map((item) => (
            <motion.div variants={skillVariant} key={item.label}>
              <SkillCard
                
                img_URL={item.img_URL}
                label={item.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Skill;
