import React, { useState } from "react";
import ball_1 from "../assets/svg/ball.svg";
import ball_2 from "../assets/svg/bell.svg";
import ball_3 from "../assets/svg/cone.svg";
import ball_4 from "../assets/svg/snowflake.svg";
import ball_5 from "../assets/svg/toy.svg";


export const FilterShape = ({ setData, rawData, initialStatus }) => {

  
  const [status, setStatus] = useState(initialStatus)

  function sortTarget(e) {
    switch (e.value) {
      case 'шар':
        e.classList.toggle('active');
        status.isCircle = !status.isCircle
        setStatus(status)
        break;
      case 'колокольчик':
        e.classList.toggle('active')
        status.isBell = !status.isBell
        setStatus(status)
        break;
      case 'шишка':
        e.classList.toggle('active')
        status.isCone = !status.isCone
        setStatus(status)
        break;
      case 'снежинка':
        e.classList.toggle('active')
        status.isSnow = !status.isSnow
        setStatus(status)
        break;
      case 'фигурка':
        e.classList.toggle('active')
        status.isFigure = !status.isFigure
        setStatus(status)
        break;
      case 'большой':
        status.isBig = !status.isBig
        setStatus(status)
        break;
      case 'средний':
        status.isMedium = !status.isMedium
        setStatus(status)
        break;
      case 'малый':
        status.isSmall = !status.isSmall
        setStatus(status)
        break;

      default:
    }
    sortCompilation()
  }

  function sortCompilation() {
    let result = [];
    if (status.isCircle) {
      const sorted = rawData.filter(el => el.shape === 'шар')
      result = [...result, ...sorted]
    }
    if (status.isBell) {
      const sorted = rawData.filter(el => el.shape === 'колокольчик')
      result = [...result, ...sorted]
    }
    if (status.isCone) {
      const sorted = rawData.filter(el => el.shape === 'шишка')
      result = [...result, ...sorted]
    }
    if (status.isSnow) {
      const sorted = rawData.filter(el => el.shape === 'снежинка')
      result = [...result, ...sorted]
    }
    if (status.isFigure) {
      const sorted = rawData.filter(el => el.shape === 'фигурка')
      result = [...result, ...sorted]
    }

    if (status.isBig || status.isMedium || status.isSmall) {
      result = result.length === 0 ? rawData : result;
      const sortL = status.isBig ? result.filter(el => el.size === 'большой') : [];
      const sort = status.isMedium ? result.filter(el => el.size === 'средний') : [];
      const sortS = status.isSmall ? result.filter(el => el.size === 'малый') : [];
      result = [...sortL, ...sort, ...sortS]
    }
    setData(result)
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
      <input id="big" className="size-checkbox" onClick={(e) => sortTarget(e.currentTarget)} type="checkbox" value="большой" />
      <label className="size-label" htmlFor="big">Большой</label>

      <input id="medium" className="size-checkbox" onClick={(e) => sortTarget(e.currentTarget)} type="checkbox" value="средний" />
      <label className="size-label" htmlFor="medium">Средний</label>

      <input id="little" className="size-checkbox" onClick={(e) => sortTarget(e.currentTarget)} type="checkbox" value="малый" />
      <label className="size-label" htmlFor="little">Малый</label>

    </div>
  </div>
  )
}