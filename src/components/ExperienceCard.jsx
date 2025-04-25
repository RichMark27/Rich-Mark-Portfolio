import React from "react";

function ExperienceCard({ date, title, description }) {
  return (
    <div className="flex">
      <div>
        <p className="text-primary text-base w-[160px]">{date}</p>
      </div>
      <div>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-lg mt-3 text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
