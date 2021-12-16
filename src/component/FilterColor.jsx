import React from "react";

export const FilterColor = ({ sortTarget }) => {


  return (<div className="color filter">
    <h4 className="filter-title">Цвет</h4>

    <div className="filter--color">

      <input id="white" onClick={(e) => sortTarget(e.currentTarget)} className="hidden" value="белый" type="checkbox"></input>
      <label htmlFor="white" className="checkbox-label white"></label>

      <input id="yellow" onClick={(e) => sortTarget(e.currentTarget)} className="hidden" value="желтый" type="checkbox"></input>
      <label htmlFor="yellow" className="checkbox-label yellow"></label>

      <input id="red" onClick={(e) => sortTarget(e.currentTarget)} className="hidden" value="red" type="checkbox" value="красный"></input>
      <label htmlFor="red" className="checkbox-label red"></label>

      <input id="blue" onClick={(e) => sortTarget(e.currentTarget)} className="hidden" value="blue" type="checkbox" value="синий"></input>
      <label htmlFor="blue" className="checkbox-label blue"></label>

      <input id="green" onClick={(e) => sortTarget(e.currentTarget)} className="hidden" value="green" type="checkbox" value="зеленый"></input>
      <label htmlFor="green" className="checkbox-label green"></label>
    </div></div>

  )
}