import React from "react";

function CanProvideCard({ img_URL, title, textBody }) {
  return (
    <div className="max-w-[500px] lg:w-[300px]">
      <img
        className="mx-auto"
        src={img_URL}
        width={60}
        height={60}
        alt="Img Icon"
      />
       <h6 className="text-accent pt-4">{title}</h6>
      <p>{textBody}</p>
    </div>
  );
}

export default CanProvideCard;
