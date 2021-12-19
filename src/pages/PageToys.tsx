import React, { useEffect, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../component/Card"
import { FilterColor } from "../component/filters/FilterColor"
import { FilterGlobal } from "../component/filters/FilterGlobal"
import { FilterRange } from "../component/filters/FilterRange"
import { FilterReset } from "../component/filters/FilterReset"
import { FilterShape } from "../component/filters/FilterShape"
import { FilterSort } from "../component/filters/FilterSort"
import { sortCompilation } from "../component/store/sortCompilation"
import "./PageToys.css";
import dataRaw from "../js/data.js"


export const PageToys = () => {
  let data = useSelector(state => sortCompilation(state));

  const dispatch = useDispatch();

  useEffect(() => {
    data = dataRaw

  }, [])



  const handler = (currentTarget: HTMLButtonElement) => {
    const action = {
      type: currentTarget.value,
      currentTarget
    }
    dispatch(action)
  }

  const handlerScroll = (value: Array<number>, type: string) => {
    const action = {
      type,
      valueStart: value[0],
      valueEnd: value[1]

    }
    dispatch(action)
  }

  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterGlobal />
          <FilterSort />
          <FilterShape handler={handler} />
          <FilterRange handlerScroll={handlerScroll} />
          <FilterColor handler={handler} />
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