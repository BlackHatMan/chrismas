import React from "react"
import { Card } from "../component/Card"
import { FilterRange } from "../component/FilterRange"
import { FilterSort } from "../component/FilterReset"
import { FilterShape } from "../component/FilterShape"
import "./PageToys.css"

export const PageToys = () => {

    //let arr:Array<string> = ['1','2','3','1','2','3','1','2','3'];  

    return (
        <div className="blur">
            <div className="page page-toys">
            <div className="controls">
                <FilterSort />
                <FilterShape />
                <FilterRange />
                
            </div>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    </div>

    )

}