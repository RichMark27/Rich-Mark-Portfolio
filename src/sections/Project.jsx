import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import { motion } from "framer-motion";
import { projectList } from "../constants";

const projectContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, staggerChildren: 1 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, y: 30, transition: { duration: 1 } },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Project() {
  return (
    <div id="projects" className="py-16">
      <div className="py-4 bg-secondary">
        <section className="padding-x max-container">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={projectContainerVariant}
            initial={"hidden"}
            whileInView={"visible"}
            className="py-8 space-y-4"
          >
            {projectList.map((item) => (
              <motion.div key={item.title} variants={projectVariant}>
                <ProjectCard
                  toVisit={item.toVisit}
                  bg_URL={item.bg_URL}
                  img_URL={item.img_URL}
                  title={item.title}
                  textBody={item.textBody}
                  tools={item.tools}
                  projectLink={item.projectLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Project;
