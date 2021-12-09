import React from "react";


export const FilterRange = () => {

  return (
    <div className="range filter">
      <p className="filter-title">Фильтры по значению</p>
      <p className="filter-label"> Количество экземпляров:  </p>
      <label>1</label> <input min="0" max="100" type="range"></input>  <label>100</label>

      <p className="filter--range"> Год приобретения  </p>
      <label>1940</label> <input min="0" max="100" type="range"></input>  <label>2010</label>


    </div>

  )
}