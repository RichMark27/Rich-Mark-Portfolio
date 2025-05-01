import React from "react";
import ProjectCard from "../components/cards/ProjectCard";

function Project() {
  return (
    <div className="py-16">
      <div className="py-4 bg-secondary">
        <section className="padding-x max-container">
          <h2 className="text-white">Projects</h2>

          <div className="py-8 space-y-4">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
