import React from "react";

import ball_1 from "../../assets/svg/ball.svg";
import ball_2 from "../../assets/svg/bell.svg";
import ball_3 from "../../assets/svg/cone.svg";
import ball_4 from "../../assets/svg/snowflake.svg";
import ball_5 from "../../assets/svg/toy.svg";


export const FilterShape = ({ handler }) => {



  return (<div className="shape filter">
    <h4 className="filter-title">Форма</h4>
    <div className="filter--shape" >
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => handler(e.currentTarget)} value="шар">
          <img className="filter-img" src={ball_1} alt=""></img>
        </button>
        <p className="shape-text">Шар</p>
      </div>

      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => handler(e.currentTarget)} value="колокольчик">
          <img className="filter-img" src={ball_2} alt=""></img>
        </button>
        <p className="shape-text">Колокольчик</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => handler(e.currentTarget)} value="шишка">
          <img className="filter-img" src={ball_3} alt=""></img>
        </button>
        <p className="shape-text">Шишка</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => handler(e.currentTarget)} value="снежинка">
          <img className="filter-img" src={ball_4} alt=""></img>
        </button>
        <p className="shape-text">Снежинка</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => handler(e.currentTarget)} value="фигурка">
          <img className="filter-img" src={ball_5} alt=""></img>
        </button>
        <p className="shape-text">Фигурка</p>

      </div>
    </div>

    <h4 className="filter-title">Размер</h4>
    <div className="filter--size">
      <input id="big" className="size-checkbox" onClick={(e) => handler(e.currentTarget)} type="checkbox" value="большой" />
      <label className="size-label" htmlFor="big">Большой</label>

      <input id="medium" className="size-checkbox" onClick={(e) => handler(e.currentTarget)} type="checkbox" value="средний" />
      <label className="size-label" htmlFor="medium">Средний</label>

      <input id="little" className="size-checkbox" onClick={(e) => handler(e.currentTarget)} type="checkbox" value="малый" />
      <label className="size-label" htmlFor="little">Малый</label>

    </div>
  </div>
  )
}