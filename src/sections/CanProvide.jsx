import React from "react";
import CanProvideCard from "../components/cards/CanProvideCard";
import { CanProvideList } from "../constants";

function CanProvide() {
  return (
    <div className=" pb-16">
      <div className="max-container padding-x">
        <section className="text-center rounded-lg bg-secondary p-4">
          <h3 className="text-white">What I can Provide?</h3>
          <div className="mt-8 space-y-8 flex flex-col lg:flex-row lg:gap-16">
            {CanProvideList.map((canProvide) => (
              <CanProvideCard
                key={canProvide.title}
                img_URL={canProvide.img_URL}
                title={canProvide.title}
                textBody={canProvide.textBody}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CanProvide;
