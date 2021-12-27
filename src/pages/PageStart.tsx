import React from "react"
import { Link } from "react-router-dom"

export const PageStart = () => {

  return (<div className="page start--page">

      <h1 className="start--page-title">
        Новогодняя игра
        <span>"Наряди елку"</span>
      </h1>
  
      <Link to={"toys"}><button className="start--page-btn">Начать игру</button></Link>
    </div>
  )
}