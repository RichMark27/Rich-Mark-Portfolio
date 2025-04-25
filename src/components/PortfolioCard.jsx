import React from "react";
import { motion } from "framer-motion";

function PortfolioCard({ href, img_URL, title, description }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative flex justify-center items-center w-[275px] h-[275px] bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        src={img_URL}
        alt="Card Background"
        className="w-full h-full object-contain"
      />

      <a href={href} target="_blank">
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="text-white text-center space-y-2 px-4"
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
}

export default PortfolioCard;
