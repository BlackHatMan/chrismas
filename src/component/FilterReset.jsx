import React from "react"

export const FilterReset = () => {

  return <div className="reset filter">
    <div className="filter--favorite">
      <input className="size-checkbox" value="большой" type="checkbox"></input>

      <h4 className="filter-title">Только любимые:</h4>
    </div>
    <div className="filter--reset">
      <button className="reset-btn">Сбросить фильтры</button>

    </div>
  </div>
}
