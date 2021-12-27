import React from "react";
import {actionSetName} from "../../store/productReducer"


export const FilterGlobal = ({dispatch}) => { 

  return (
    <div className="global filter"> 
      <input className="global-search" 
      onChange={(e) => dispatch(actionSetName(e.target.value.toLowerCase())) } 
      type="text" placeholder="   Поиск" autoFocus={true}  autoComplete="off"/>


    </div>

  )
}