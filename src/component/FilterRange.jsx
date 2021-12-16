import React from "react";
import SliderCount from "./slider/SliderCount";
import { SliderYears } from "./slider/SliderYears";

export const FilterRange = () => {

  return (<div className="range filter">
    <SliderYears />
    <SliderCount />
  </div>
  )
}

