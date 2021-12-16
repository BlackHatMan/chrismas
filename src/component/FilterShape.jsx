import React, {useState} from "react";
import ball_1 from "../assets/svg/ball.svg";
import ball_2 from "../assets/svg/bell.svg";
import ball_3 from "../assets/svg/cone.svg";
import ball_4 from "../assets/svg/snowflake.svg";
import ball_5 from "../assets/svg/toy.svg";


export const FilterShape = ({ setData, rawData}) => {
    
  let [isCircle, setCircle] = useState(() => false);
  let [isBell, setBell] = useState(() => false);
  let [isCone, setCone] = useState(() => false);
  let [isSnow, setSnow] = useState(() => false);
  let [isFigure, setFigure] = useState(() => false);
    
  function sortTarget(e) {
    switch (e.value) {
      case 'шар':
        e.classList.toggle('active');
        isCircle = !isCircle
        setCircle(isCircle)
        break;
      case 'колокольчик':
        e.classList.toggle('active')
        isBell = !isBell
        setBell(isBell)
        break;
      case 'шишка':
        e.classList.toggle('active')
        isCone = !isCone
        setCone(isCone)
        break;
      case 'снежинка':
        e.classList.toggle('active')
        isSnow = !isSnow
        setSnow(isSnow)
        break;
      case 'фигурка':
        e.classList.toggle('active')
        isFigure = !isFigure
        setFigure(isFigure)
        break;

      default:
    }
    sortCompilation()
  }

  function sortCompilation() {
    let result = [];
    if (isCircle) {
      let a = rawData.filter(el => el.shape === 'шар')
      result = [...result, ...a]
    }
    if (isBell) {
      let a = rawData.filter(el => el.shape === 'колокольчик')
      result = [...result, ...a]
    }
    if (isCone) {
      let a = rawData.filter(el => el.shape === 'шишка')
      result = [...result, ...a]
    }
    if (isSnow) {
      let a = rawData.filter(el => el.shape === 'снежинка')
      result = [...result, ...a]
    }
    if (isFigure) {
      let a = rawData.filter(el => el.shape === 'фигурка')
      result = [...result, ...a]
    }
    setData(result.length === 0 ? rawData : result)
  }

  return (<div className="shape filter">
    <h4 className="filter-title">Форма</h4>
    <div className="filter--shape">
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => sortTarget(e.currentTarget)} value="шар">
          <img className="filter-img" src={ball_1} alt=""></img>
        </button>
        <p className="shape-text">Шар</p>
      </div>

      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => sortTarget(e.currentTarget)} value="колокольчик">
          <img className="filter-img" src={ball_2} alt=""></img>
        </button>
        <p className="shape-text">Колокольчик</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => sortTarget(e.currentTarget)} value="шишка">
          <img className="filter-img" src={ball_3} alt=""></img>
        </button>
        <p className="shape-text">Шишка</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => sortTarget(e.currentTarget)} value="снежинка">
          <img className="filter-img" src={ball_4} alt=""></img>
        </button>
        <p className="shape-text">Снежинка</p>

      </div>
      <div className="shape--item">
        <button className="filter-btn" onClick={(e) => sortTarget(e.currentTarget)} value="фигурка">
          <img className="filter-img" src={ball_5} alt=""></img>
        </button>
        <p className="shape-text">Фигурка</p>

      </div>
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
  </div>
  )
}