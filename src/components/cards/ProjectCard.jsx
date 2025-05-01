import React from "react";

function ProjectCard() {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg max-lg:max-w-[550px] lg:w-[900px] xl:w-[1150px] overflow-hidden bg-primary mx-auto">
      <div className="h-[320px] w-[550px] lg:w-[600px] lg:h-[300px] bg-gray-500" />
      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h2 className="3xl font-bold text-accent">title</h2>
          <p className="h-[150px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ornare sit amet risus vel rhoncus. Vivamus quis pharetra lacus,
            vitae pretium purus. Integer quis ultricies lorem.
          </p>
        </div>

        <div className="flex gap-4 py-2">
          <p className="text-xs px-4 py-2 text-accent rounded-full border-accent border-2">
            UX/UI Design
          </p>
          <p className="text-xs px-4 py-2 text-accent rounded-full border-accent border-2">
            React
          </p>
          <p className="text-xs px-4 py-2 text-accent rounded-full border-accent border-2">
            Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
