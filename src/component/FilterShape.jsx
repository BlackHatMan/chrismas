
import React from "react";
import ball_1 from "../assets/svg/ball.svg";
import ball_2 from "../assets/svg/bell.svg";
import ball_3 from "../assets/svg/ball-2.svg";
import ball_4 from "../assets/svg/snowflake.svg";
import ball_5 from "../assets/svg/toy.svg";


export const FilterShape = () => {
  return (<div className="shape filter">
    <p className="filter-title">Фильтры по значению</p>
    <div className="shape--item"> Форма:
      {/*   <input id="checkbox1" className="filter-checkbox" value="шар" type="checkbox"></input>
      <label htmlFor="checkbox1" className="checkbox-label"><img className="checkbox-img" src={cbSvg} alt="" /></label>
      <input value="колокольчик" type="checkbox"  ></input>
      <input value="шишка" type="checkbox"></input>
      <input value="снежинка" type="checkbox"></input>
      <input value="фигурка" type="checkbox"></input> */}
      <button className="shape-btn"><img className="shape-img" src={ball_1} alt=""></img></button>
      <button className="shape-btn"><img className="shape-img" src={ball_2} alt=""></img></button>
      <button className="shape-btn"><img className="shape-img" src={ball_3} alt=""></img></button>
      <button className="shape-btn"><img className="shape-img" src={ball_4} alt=""></img></button>
      <button className="shape-btn"><img className="shape-img" src={ball_5} alt=""></img></button>
    </div>
    <div className="shape--item"> Цвет:
      <label htmlFor="checkbox-white" className="checkbox-label white">
        <input id="checkbox-white" className="checkbox-hidden white" value="white" type="checkbox"></input>
      </label>
      <label htmlFor="checkbox-red" className="checkbox-label red">
        <input id="checkbox-red" className="checkbox-hidden red" value="red" type="checkbox"></input>
      </label>
{/* 
      <input className="checkbox-yellow" value="yellow" type="checkbox"  ></input>
      <input className="checkbox-red" value="red" type="checkbox"></input>
      <input className="checkbox-blue" value="blue" type="checkbox"></input>
      <input className="checkbox-green" value="green" type="checkbox"></input> */}
    </div>
    <div className="shape--item"> Размер:
      <input value="большой" type="checkbox"></input>
      <input value="маленький" type="checkbox"  ></input>
    </div>
    <div className="shape--item"> Только любимые:
      <input value="большой" type="checkbox"></input>
    </div>
  </div>

  )
}