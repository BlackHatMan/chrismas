import React from "react";
import snow from "../../assets/svg/snow.svg"
import volume from "../../assets/svg/audio.svg" 
import {actionSetName} from "../../store/productReducer"


export const FilterGlobal = ({dispatch}) => { 

  return (
    <div className="global filter">
      <button className="global-volume filter-btn">
        <img className="filter-img" src={snow} alt="" />
      </button>
      <button className="global-ice filter-btn">
        <img className="filter-img" src={volume} alt="" />
      </button>
      <input className="global-search" 
      onChange={(e) => dispatch(actionSetName(e.target.value.toLowerCase())) } 
      type="text" placeholder="   Поиск" autoFocus={true}  autoComplete="off"/>


    </div>

  )
}