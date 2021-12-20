import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../component/Card"
import { FilterColor } from "../component/filters/FilterColor"
import { FilterGlobal } from "../component/filters/FilterGlobal"
import { FilterRange } from "../component/filters/FilterRange"
import { FilterReset } from "../component/filters/FilterReset"
import { FilterShape } from "../component/filters/FilterShape"
import { FilterSort } from "../component/filters/FilterSort"
import { sortCompilation } from "../component/store/sortCompilation"
import "./PageToys.css"
import rawData from "../js/data"


export const PageToys = () => { 

  const dispatch = useDispatch();

  let state = useSelector(state => state);
  let data = sortCompilation(state);


  useEffect(() => {
    data = rawData
    console.log("data")
  }, [])

  const toggleHandler = (currentTarget: HTMLButtonElement) => {

    const action = {
      type: currentTarget.value,
      currentTarget
    }
    dispatch(action)
  }

  const scrollHandler = (value: Array<number>, type: string) => {
    const action = {
      type,
      valueStart: value[0],
      valueEnd: value[1]
    }
    dispatch(action)
  }
  const sortHandler = (type: string) => {
    const action = {
      type
    }
    dispatch(action)
  }

  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterGlobal />
          <FilterSort sortHandler={sortHandler} />
          <FilterShape toggleHandler={toggleHandler} />
          <FilterRange scrollHandler={scrollHandler} />
          <FilterColor toggleHandler={toggleHandler} />
          <FilterReset />
        </div>
        <div className="wrapper">
          <h2 className="toys-title"> ИГРУШКИ </h2>
          <div className="card-container">
            {data.length === 0 ? <div style={{ fontSize: "60px" }}>Таких няма</div>
              : data.map(el => Card(el))}
          </div>
        </div>
      </div>
    </div>
  )
}