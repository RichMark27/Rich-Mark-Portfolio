import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import UnfinishedPortfolioCard from "../components/UnfinishedPortfolioCard";
import florante_at_laura from "../assets/Florante_at_Laura.png";

function PortfolioSection() {
  return (
    <div>
      <section id="projects" className="py-16 padding-x max-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center"
        >
          <PortfolioCard
            href={"https://balagtasyunaryo.onrender.com/"}
            img_URL={florante_at_laura}
            title={"Balagtasyunaryo"}
            description={"this is dictionary for pilipino"}
          />
          <UnfinishedPortfolioCard />
          <UnfinishedPortfolioCard />
        </motion.div>
      </section>
    </div>
  );
}

export default PortfolioSection;
