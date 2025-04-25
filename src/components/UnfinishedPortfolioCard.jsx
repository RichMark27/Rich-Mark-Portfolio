import React from "react";
import underConstruction from "../assets/under-construction.png";

function UnfinishedPortfolioCard() {
  return (
    <div className="relative w-[275px] h-[275px] bg-secondary rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
      <img
        src={underConstruction}
        alt="Card Background"
        className="w-[222px] h-[199px] object-contain"
      />
    </div>
  );
}

export default UnfinishedPortfolioCard;
