import React from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import { experienceList } from "../constants";

function Experience() {
  return (
    <div className="py-16">
      <section className="padding-x max-container">
        <h2 className="text-white">My Work Experience</h2>
        <div className="pt-8">
          {experienceList.map((work) => (
            <ExperienceCard
              key={work.date}
              date={work.date}
              workPosition={work.workPosition}
              companyName={work.companyName}
              textBody={work.textBody}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
