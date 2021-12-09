import React from "react";

export const Card = () => {
 
  return (
    <div className="card">
      <h3 className="card-title">Колокольчик расписной</h3>
      <img className="card-img" src="./image/toys/1.png" alt=""/>
      <div className="card-description">
        <p className="count"> Количество <span>3</span> </p>
        <p className="year">Год покупки <span>11111</span> </p>
        <p className="shape">Форма <span>колокольчик</span> </p>
        <p className="color">Цвет <span>красный</span> </p>
        <p className="size">Размер <span>большой</span> </p>
        <p className="favorite">Любимая <span>нет</span> </p>
      </div>
    </div>
  )
}