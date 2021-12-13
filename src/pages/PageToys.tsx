import React, { useState } from "react"
import { Card } from "../component/Card"
import { FilterRange } from "../component/FilterRange"
import { FilterSort } from "../component/FilterSort"
import { FilterShape } from "../component/FilterShape"
import "./PageToys.css"
import rawdData from '../js/data.js'

export const PageToys = () => {

  const [data, setData] = useState(() => rawdData)

  return (
    <div className="blur">
      <div className="page page-toys">
        <div className="controls">
          <FilterSort />
          <FilterRange />
          <FilterShape data={data} setData={setData}
            rawData={rawdData} />

        </div>
        <div className="card-container">
          {data.map(el => Card(el))}

        </div>
      </div>

    </div>

  )

}