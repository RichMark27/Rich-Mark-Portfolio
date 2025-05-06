import React from "react";
import CanProvideCard from "../components/cards/CanProvideCard";
import { CanProvideList } from "../constants";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, staggerChildren: 0.5 },
  },
};

const canProvideVariant = {
  hidden: { opacity: 0, y: 50, transition: { duration: 1 } },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function CanProvide() {
  return (
    <div className=" pb-16">
      <div className="max-container padding-x">
        <motion.section
          variants={containerVariant}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
          className="text-center rounded-lg bg-secondary p-4"
        >
          <h3 className="text-white">What I can Provide?</h3>
          <div className="mt-8 space-y-8 flex flex-col lg:flex-row lg:gap-16">
            {CanProvideList.map((canProvide) => (
              <motion.div
                variants={canProvideVariant}
                key={canProvide.title}
                className=" mx-auto"
              >
                <CanProvideCard
                  img_URL={canProvide.img_URL}
                  title={canProvide.title}
                  textBody={canProvide.textBody}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default CanProvide;
