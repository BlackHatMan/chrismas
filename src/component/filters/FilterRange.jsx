import React from "react";
import {SliderCount} from "../slider/SliderCount";
import { SliderYears } from "../slider/SliderYears";

export const FilterRange = ( {status, setStatus}) => {

  return (<div className="range filter">
    <SliderYears status={status} setStatus={setStatus} />
    <SliderCount status={status} setStatus={setStatus}/>
  </div>
  )
}

