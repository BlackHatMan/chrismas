import React from "react";

export const Card = (props) => { 
  return (
    <div className="card" key={props.num}>
      <h3 className="card-title"> {props.name} </h3>
      <img className="card-img" src={`./image/toys/${props.num}.png`} alt="" />
      <ul className="card--description">
        <li className="description-item"> Количество: {props.count} </li>
        <li className="description-item">Год покупки: {props.year}</li>
        <li className="description-item">Форма: {props.shape} </li>
        <li className="description-item">Цве: {props.color}</li>
        <li className="description-item">Размер: {props.size}  </li>
        <li className="description-item">Любимая:  da </li>
      </ul>
      <div className="card-ribbon"></div>
    </div>
  )
}