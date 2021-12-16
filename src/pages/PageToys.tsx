import React, { useState } from "react"
import { Card } from "../component/Card"
import { FilterSort } from "../component/FilterSort"
import { FilterShape } from "../component/FilterShape"
import { FilterGlobal } from "../component/FilterGlobal"
import { FilterReset } from "../component/FilterReset"
import { FilterRange } from "../component/FilterRange"
import "./PageToys.css"
import rawData from '../js/data.js'
import { FilterColor } from "../component/FilterColor"
import { pseudoState } from "../component/temp/pseudoState"
import { initialStatus } from "../component/temp/initialStatus"


export const PageToys = () => {

  

  const [data, setData] = useState(rawData);
  const [status, setStatus] = useState(initialStatus);

  let sortTarget = (e: Event) => {
    pseudoState({ e, setData, rawData, status, setStatus });
  };




  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterGlobal />
          <FilterSort />
          <FilterShape sortTarget={sortTarget} />
          <FilterRange />
          <FilterColor sortTarget={sortTarget} />
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