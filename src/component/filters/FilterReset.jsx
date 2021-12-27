import React from "react" 
import { actionReset } from "../../store/productReducer"

export const FilterReset = ({dispatch}) => { 

  return <div className="reset filter">
    <div className="filter--favorite">
      <input className="size-checkbox" type="checkbox"></input>
      <h4 className="filter-title">Только любимые:</h4>
    </div>
    <div className="filter--reset">
      <button className="reset-btn" onClick={() => dispatch(actionReset())}>Сбросить фильтры</button>

    </div>
  </div>
}
