import React from "react";
import { profile } from "../assets/index";

function Hero() {
  return (
    <div className="py-8">
      <section className="relative max-container min-h-screen w-full flex flex-col lg:flex-row lg:justify-between lg:items-center padding-x gap-y-28">
        <div className="space-y-8">
          <h1 className="pt-16 uppercase text-accent text-shadow-black text-shadow-sm">
            Frontend
            <br />
            developer
          </h1>
          <p className="text-text-gray max-w-[480px] lg:w-[410px]">
            I'm Rich Mark — a UX/UI{" "}
            <span className="text-accent">Designer and Web Developer</span>{" "}
            driven by the craft of designing beautiful, high-performing websites
            that engage and convert.
          </p>

          <div className="flex gap-8">
            <button className="text-base font-semibold uppercase px-8 py-4 text-white bg-accent rounded-lg">
              contact me
            </button>
            <button className="text-base font-semibold text-white uppercase py-4 px-8 border-2 border-accent rounded-lg">
              download cv
            </button>
          </div>
        </div>

        <div>
          <img
            className="mx-auto w-[545px] h-[545] md:w-[645px] md:h-[645px] lg:h-[430px] lg:w-[430px] xl:w-[600px] xl:h-[600px] object-contain"
            src={profile}
            alt="Rich Mark Profile"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
