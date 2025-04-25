import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";

function ExperienceSection() {
  return (
    <div>
      <section id="experience" className="py-16 padding-x max-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 space-y-8"
        >
          <ExperienceCard
            date={"Jan 2025 - present"}
            title={"Operations Manager Likhasan Reading and Tutorial Services"}
            description={
              "Creating a web design for the website of the tutorial center Creating graphic designs for the educational materials Managing the operations for the printing of educational materials Mentoring the staff for the printing of educational materials"
            }
          />

          <ExperienceCard
            date={"Jun 2023 - Dec 2025"}
            title={"Business Owner"}
            description={
              "Managing the daily operations of the business Putting up quality products and services for the people Managing the daily sales and expenses of the business Analyzing the data of the sales "
            }
          />

          <ExperienceCard
            date={"Jan 2023 - Jun 2023"}
            title={
              "Software Quality Assurance Engineer Logicore Innovative Solutions"
            }
            description={
              "Checking the quality of different mobile applications Assuring the quality of different systems in the software Writing reports for the bug of the systems Ensuring the standards of quality of the mobile applications "
            }
          />

          <ExperienceCard
            date={"Jun 2022 - Aug 2022"}
            title={"Web Developer (Internship)"}
            description={
              "Developing websites for businesses Collaborating with the team to make a quality website for a certain business Providing assurance in the standard of the different businesses Collecting information on the new trends in producing websites Designing websites supporting the standards of the business owners"
            }
          />
        </motion.div>
      </section>
    </div>
  );
}

export default ExperienceSection;
