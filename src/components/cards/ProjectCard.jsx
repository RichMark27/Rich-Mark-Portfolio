import { motion } from "framer-motion";
import React from "react";

function ProjectCard({
  toVisit,
  bg_URL,
  img_URL,
  title,
  textBody,
  tools,
  projectLink,
}) {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg max-lg:max-w-[550px] lg:w-[900px] xl:w-[1150px] overflow-hidden bg-primary mx-auto">
      <div className="relative flex items-center justify-center w-full h-full max-h-[320px] max-w-[550px] lg:w-[600px] lg:h-[300px] bg-white">
        {bg_URL && (
          <img className="absolute z-0 h-full w-full" src={bg_URL} alt="" />
        )}
        <img className="z-10" src={img_URL} alt="Logo" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute z-20 flex justify-center items-center bg-gray-900/70 w-full h-full"
        >
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="text-2xl font-bold text-white cursor-pointer decoration-accent hover:underline"
          >
            <a href={projectLink} target="_blank">
              Visit {toVisit}!
            </a>
          </motion.span>
        </motion.div>
      </div>

      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h2 className="3xl font-bold text-accent">{title}</h2>
          <p className="h-[150px] text-base mt-4">{textBody}</p>
        </div>

        <div className="flex gap-4 py-2">
          {tools.map((tool) => (
            <p className="text-xs px-4 py-2 text-accent rounded-full border-accent border-2">
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
