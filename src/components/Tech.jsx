import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div
      key={name}
      className="group w-28 h-28 flex flex-col items-center justify-center relative"
    >
      <div className="w-20 h-20">
        <BallCanvas icon={icon} />
      </div>
      <span className="absolute bottom-0 mt-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  ));
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {renderTechnologies()}
  </div>
);

export default SectionWrapper(Tech, "");
