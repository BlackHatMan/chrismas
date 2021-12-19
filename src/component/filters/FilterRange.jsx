import React from "react";
import { SliderCount } from "../slider/SliderCount";
import { SliderYears } from "../slider/SliderYears";

export const FilterRange = ({ handlerScroll }) => {

  return (<div className="range filter">
    <SliderYears handlerScroll={handlerScroll} />
    <SliderCount handlerScroll={handlerScroll} />
  </div>
  )
}

