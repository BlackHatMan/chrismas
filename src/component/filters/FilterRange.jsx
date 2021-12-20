import React from "react";
import { SliderCount } from "../slider/SliderCount";
import { SliderYears } from "../slider/SliderYears";

export const FilterRange = ({ scrollHandler }) => {

  return (<div className="range filter">
    <SliderYears scrollHandler={scrollHandler} />
    <SliderCount scrollHandler={scrollHandler} />
  </div>
  )
}

