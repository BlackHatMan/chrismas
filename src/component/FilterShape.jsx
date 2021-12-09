import React from "react";
import ball_1 from "../assets/svg/ball.svg";
import ball_2 from "../assets/svg/bell.svg";
import ball_3 from "../assets/svg/cone.svg";
import ball_4 from "../assets/svg/snowflake.svg";
import ball_5 from "../assets/svg/toy.svg";


export const FilterShape = () => {
return (<div className="filter">
   
  
  <h4 className="filter-title">Форма</h4>
  <div className="filter--shape">  
  <div className="shape--item">
    <button className="shape-btn"><img className="shape-img" src={ball_1} alt=""></img></button>
    <p className="shape-text">Шар</p>

  </div>
  <div className="shape--item">
  <button className="shape-btn"><img className="shape-img" src={ball_2} alt=""></img></button>
     <p className="shape-text">Шар</p>

  </div>
  <div className="shape--item">
  <button className="shape-btn"><img className="shape-img" src={ball_3} alt=""></img></button>
    <p className="shape-text">Шишка</p>

  </div>
  <div className="shape--item">
  <button className="shape-btn"><img className="shape-img" src={ball_4} alt=""></img></button>
    <p className="shape-text">Шар</p>

  </div>
  <div className="shape--item">
  <button className="shape-btn"><img className="shape-img" src={ball_5} alt=""></img></button>
 <p className="shape-text">Шар</p>

  </div>  
  </div>
  
  <h4 className="filter-title">Цвет</h4>
  
  <div className="filter--color">

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
  
  <h4 className="filter-title">Размер</h4>
  <div className="filter--size">   
    <input id="big" className="size-checkbox" type="checkbox" value="big" name="" /> 
    <label className="size-label" htmlFor="big">Большой</label>

    <input id="medium" className="size-checkbox" type="checkbox" value="medium" name="" /> 
    <label className="size-label" htmlFor="medium">Средний</label>

    <input id="little" className="size-checkbox" type="checkbox" value="little" name="" /> 
    <label className="size-label" htmlFor="little">Маленький</label> 
    
  </div>
  
  <div className="filter--favorite"> 
    <input className="size-checkbox" value="большой" type="checkbox"></input>
    
  <h4 className="filter-title">Только любимые:</h4>
  </div>
</div>

)
}