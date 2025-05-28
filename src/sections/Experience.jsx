import React from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import { experienceList } from "../constants";
import { motion } from "framer-motion";

const experienceContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const experienceVariant = {
  hidden: { opacity: 0, y: 30, transition: { duration: 1 } },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Experience() {
  return (
    <div id="experience" className="py-16">
      <section className="padding-x max-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          My Work Experience
        </motion.h2>
        <motion.div
          variants={experienceContainerVariant}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
          className="pt-8"
        >
          {experienceList.map((work) => (
            <motion.div variants={experienceVariant} key={work.date}>
              <ExperienceCard
                date={work.date}
                workPosition={work.workPosition}
                companyName={work.companyName}
                textBody={work.textBody}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Experience;
