import React, { useState } from "react"
import { Card } from "../component/Card"
import { FilterSort } from "../component/FilterSort"
import { FilterShape } from "../component/FilterShape"
import { FilterGlobal } from "../component/FilterGlobal"
import { FilterReset } from "../component/FilterReset"
import { FilterRange } from "../component/FilterRange"
import "./PageToys.css"
import rawdData from '../js/data.js'
import { FilterColor } from "../component/FilterColor"


export const PageToys = () => {
  const initialStatus = {
    isCircle: false,
    isBellL: false,
    isCone: false,
    isSnow: false,
    isFigure: false,
    isBig: false,
    isMedium: false,
    isSmall: false,
    isWhite: false,
    isYellow: false,
    isRes: false,
    isBlue: false,
    isGreen: false
  }
  const [data, setData] = useState(rawdData)
  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterGlobal />
          <FilterSort />
          <FilterShape setData={setData}
            rawData={rawdData} initialStatus={initialStatus} />
          <FilterRange />
          <FilterColor setData={setData}
            rawData={rawdData} />
          <FilterReset />
        </div>
        <div className="wrapper">
          <h2 className="toys-title"> ИГРУШКИ </h2>
          <div className="card-container">
            {data.map(el => Card(el))}
          </div>
        </div>
      </div>
    </div>
  )
}