import React from "react";
import ball_1 from "../assets/svg/ball.svg";
import ball_2 from "../assets/svg/bell.svg";
import ball_3 from "../assets/svg/ball-2.svg";
import ball_4 from "../assets/svg/snowflake.svg";
import ball_5 from "../assets/svg/toy.svg";


export const FilterShape = () => {
return (<div className="filter">
  <p className="filter-title">Фильтры по значению</p>
  <div className="filter--item"> Форма:
    <button className="shape-btn"><img className="shape-img" src={ball_1} alt=""></img></button>
    <button className="shape-btn"><img className="shape-img" src={ball_2} alt=""></img></button>
    <button className="shape-btn"><img className="shape-img" src={ball_3} alt=""></img></button>
    <button className="shape-btn"><img className="shape-img" src={ball_4} alt=""></img></button>
    <button className="shape-btn"><img className="shape-img" src={ball_5} alt=""></img></button>
  </div>
  <div className="filter--item"> Цвет:

    <input id="white" className="hidden" value="white" type="checkbox"></input>
    <label htmlFor="white" className="checkbox-label white"></label>

    <input id="yellow" className="hidden" value="yellow" type="checkbox"></input>
    <label htmlFor="yellow" className="checkbox-label yellow"></label>

    <input id="red" className="hidden" value="red" type="checkbox"></input>
    <label htmlFor="red" className="checkbox-label red"></label>

    <input id="blue" className="hidden" value="blue" type="checkbox"></input>
    <label htmlFor="blue" className="checkbox-label blue"></label>

    <input id="green" className="hidden" value="green" type="checkbox"></input>
    <label htmlFor="green" className="checkbox-label green"></label>
  </div>
  <div className="filter--item"> Размер:
    <input value="большой" type="checkbox"></input>
    <input value="маленький" type="checkbox"></input>
  </div>
  <div className="shape--item"> Только любимые:
    <input value="большой" type="checkbox"></input>
  </div>
</div>

)
}