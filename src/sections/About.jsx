import React from "react";
import { aboutMe } from "../assets";

function About() {
  return (
    <div className="py-16 ">
      <div className="bg-secondary">
        <section className="padding-x py-8 max-container">
          <h2 className="text-white">About Me</h2>
          <div className="space-y-4 mt-8 flex flex-col lg:flex-row">
            <p className="lg:w-[430px] xl:w-1/2">
              I’m a UX/UI Designer and Web Developer who turns complex ideas
              into elegant, human-centered digital experiences. With a sharp eye
              for design and a developer’s mindset, I create seamless interfaces
              that don’t just look great-they work flawlessly. I specialize in
              designing with purpose, coding with precision, and building
              products that feel as good as they function. From concept to code,
              I thrive at the intersection of creativity and logic, crafting
              intuitive solutions that elevate brands and delight users. I'm not
              just here to design a product—I’m here to shape meaningful digital
              experiences that make a lasting impact.
            </p>

            <img
              className="mx-auto w-[510px] h-auto lg:w-[425px] lg:h-auto"
              src={aboutMe}
              alt="About"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
