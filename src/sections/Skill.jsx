import React from "react";
import SkillCard from "../components/cards/SkillCard";
import { skillList } from "../constants";

function Skill() {
  return (
    <div className="py-16">
      <section className="padding-x max-container">
        <h2 className="text-white">Skills</h2>
        <p className="pt-4">Technologies I’ve been working with recently</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-16 pt-8">
          {skillList.map((item) => (
            <SkillCard
              key={item.label}
              img_URL={item.img_URL}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
