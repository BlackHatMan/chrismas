import React, { useState } from "react"
import { Card } from "../component/Card"
import { FilterRange } from "../component/FilterRange"
import { FilterSort } from "../component/FilterSort"
import { FilterShape } from "../component/FilterShape"
import "./PageToys.css"
import rawdData from '../js/data.js'

export const PageToys = () => {
  const [data, setData] = useState(rawdData)
  const [isCircle, setCircle] = useState(() => false);
  const [isBell, setBell] = useState(() => false);
  const [isCone, setCone] = useState(() => false);
  const [isSnow, setSnow] = useState(() => false);
  const [isFigure, setFigure] = useState(() => false);

  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterSort />
          <FilterRange />
          <FilterShape setData={setData}
            rawData={rawdData}
            isCircle={isCircle}
            isBell={isBell}
            isCone={isCone}
            isSnow={isSnow}
            isFigure={isFigure}
            setCircle={setCircle}
            setBell={setBell}
            setCone={setCone}
            setSnow={setSnow}
            setFigure={setFigure}
          />
        </div>
        <div className="card-container">
          {data.map(el => Card(el))}
        </div>
      </div>
    </div>
  )
}