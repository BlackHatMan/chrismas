import React from "react";
import { actionSetFavorite } from "../store/favoriteReducer";

export const Card = (props, favoriteState, dispatch) => {

  const favorite = favoriteState.items.some(el => el.num === props.num)

  return (
    <div className={favorite ? "card selected" : "card"} onClick={() => {
      dispatch(actionSetFavorite(props))

    }} key={props.num}>
      <h3 className="card-title"> {props.name} </h3>
      <img className="card-img" src={`./image/toys/${props.num}.png`} alt="" loading="lazy" />
      <ul className="card--description">
        <li className="description-item"> Количество: {props.count} </li>
        <li className="description-item">Год покупки: {props.year}</li>
        <li className="description-item">Форма: {props.shape} </li>
        <li className="description-item">Цве: {props.color}</li>
        <li className="description-item">Размер: {props.size}  </li>
        <li className="description-item">Любимая: {props.favorite ? "да" : "нет"} </li>
      </ul>
      <div className="card-ribbon" />
    </div>
  )
}