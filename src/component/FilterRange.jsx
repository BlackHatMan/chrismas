import React from "react";


export const FilterRange = () => {

  return (
    <div className="range filter">
      <h4 className="filter-title"> Количество экземпляров:  </h4>

      <input className="range-count" min="0" max="100" type="range"></input>
      <div className="range-wrapper">

        <label className="range-count-min range-label">1</label>
        <label className="range-count-max range-label">100</label>
      </div>

      <h4 className="filter-title"> Год приобретения  </h4>

      <input className="range-years" min="0" max="100" type="range"></input>
      <div className="range-wrapper">

        <label className="range-years-min range-label">1940</label>
        <label className="range-years-max range-label">2010</label>
      </div>


    </div>

  )
}