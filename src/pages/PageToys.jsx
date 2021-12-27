import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../component/Card"
import { FilterColor } from "../component/filters/FilterColor"
import { FilterRange } from "../component/filters/FilterRange"
import { FilterGlobal } from "../component/filters/FilterGlobal"
import { FilterReset } from "../component/filters/FilterReset"
import { FilterShape } from "../component/filters/FilterShape"
import { FilterSort } from "../component/filters/FilterSort"
import "./PageToys.css"
import rawData from "../js/data"
import { toysControl } from "../Controller/toysController"

export const PageToys = () => {

  const applyFilter = useSelector(state => state.productReducer) 
  const favoriteState = useSelector(state => state.favoriteReducer)  
  const result = toysControl(rawData, applyFilter)
  const dispatch = useDispatch()

  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterGlobal dispatch={dispatch} />
          <FilterSort />
          <FilterShape dispatch={dispatch}/>
          <FilterRange  dispatch={dispatch}/>
          <FilterColor dispatch={dispatch} />
          <FilterReset dispatch={dispatch} />
        </div>
        <div className="wrapper">
          <h2 className="toys-title"> ИГРУШКИ </h2>
          <div className="card-container">
            {result.length === 0 ? <p style={{ fontSize: "50px" }}>Такие игрушки отсутсвуют</p> :
              result.map(el => Card(el , favoriteState, dispatch))}
          </div>
        </div>
      </div>
    </div>
  )
}