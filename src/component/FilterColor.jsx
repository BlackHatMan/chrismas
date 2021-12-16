import React from "react";

export const FilterColor = ({setData, rawData}) => {


  return (<div className="color filter">
    <h4 className="filter-title">Цвет</h4>

    <div className="filter--color">

      <input id="white"   className="hidden" value="white" type="checkbox"></input>
      <label htmlFor="white" className="checkbox-label white"></label>

      <input id="yellow" className="hidden" value="yellow" type="checkbox"></input>
      <label htmlFor="yellow" className="checkbox-label yellow"></label>

      <input id="red" className="hidden" value="red" type="checkbox"></input>
      <label htmlFor="red" className="checkbox-label red"></label>

      <input id="blue" className="hidden" value="blue" type="checkbox"></input>
      <label htmlFor="blue" className="checkbox-label blue"></label>

      <input id="green" className="hidden" value="green" type="checkbox"></input>
      <label htmlFor="green" className="checkbox-label green"></label>
    </div></div>

  )
}