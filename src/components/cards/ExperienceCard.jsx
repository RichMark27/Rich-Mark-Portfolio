import React from "react";

function ExperienceCard({ date, workPosition, companyName, textBody }) {
  return (
    <div className="grid grid-cols-9 gap-8">
      <div className="col-start-1 col-end-4">
        <p className=" text-nowrap text-sm font-bold text-accent pt-1.5 text-end">
          {date}
        </p>
      </div>

      <div className="relative pl-8 border-l-2 border-secondary pb-8 col-start-4 col-end-10">
        <div
          className={`absolute -left-2 top-1.5 h-4 w-4 rounded-full ${
            date === "Jan 2025 - present" ? "bg-accent" : "bg-secondary"
          } `}
        />
        <div
          className={`absolute -left-2 top-1.5 h-4 w-4 rounded-full ${
            date === "Jan 2025 - present"
              ? "bg-accent animate-ping"
              : "bg-secondary"
          } `}
        />
        <h6 className="text-accent">{workPosition}</h6>
        <p className="text-sm font-bold text-accent">{companyName}</p>
        <p>{textBody}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
