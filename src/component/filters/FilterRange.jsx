import React from "react";
import { SliderCount } from "../slider/SliderCount";
import { SliderYears } from "../slider/SliderYears";

export const FilterRange = ({dispatch}) => {

  return (<div className="range filter">
    <SliderYears dispatch={dispatch} />
    <SliderCount dispatch={dispatch} />
  </div>
  )
}

