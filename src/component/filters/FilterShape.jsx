import React, {useState} from "react";

import circle from "../../assets/svg/ball.svg";
import bell from "../../assets/svg/bell.svg";
import cone from "../../assets/svg/cone.svg";
import snow from "../../assets/svg/snowflake.svg";
import toy from "../../assets/svg/toy.svg";
import {useDispatch} from "react-redux";
import {actionSetShape, actionSetSize} from "../../store/productReducer";


export const FilterShape = () => {
 
  const dispatch = useDispatch()

  const [active, setActive] = useState({
    isBall: false,
    isBell: false,
    isCone: false,
    isSnow: false,
    isToy: false,
    isBig: false,
    isMedium: false,
    isSmall: false
  })

  return (<div className="shape filter">
      <h4 className="filter-title">Форма</h4>
      <div className="filter--shape">
        <div className="shape--item">
          <button className={active.isBall ? 'filter-btn active' : 'filter-btn'} onClick={() => {
            dispatch(actionSetShape('шар', 'shape'))
            setActive({...active, isBall: !active.isBall})
          }}  >
            <img className="filter-img" src={circle} alt=""/>
          </button>
          <p className="shape-text">Шар</p>
        </div>

        <div className="shape--item">
          <button className={active.isBell ? 'filter-btn active' : 'filter-btn'} onClick={() => {
            dispatch(actionSetShape('колокольчик', 'shape'))
            setActive({...active, isBell: !active.isBell})
          }}  >
            <img className="filter-img" src={bell} alt=""/>
          </button>
          <p className="shape-text">Колокольчик</p>

        </div>
        <div className="shape--item">
          <button className={active.isCone ? 'filter-btn active' : 'filter-btn'} onClick={() => {
            dispatch(actionSetShape('шишка', 'shape'))
            setActive({...active, isCone: !active.isCone})
          }}>
            <img className="filter-img" src={cone} alt=""/>
          </button>
          <p className="shape-text">Шишка</p>

        </div>
        <div className="shape--item">
          <button className={active.isSnow ? 'filter-btn active' : 'filter-btn'} onClick={() => {
            dispatch(actionSetShape('снежинка', 'shape'))
            setActive({...active, isSnow: !active.isSnow})
          }}  >
            <img className="filter-img" src={snow} alt=""/>
          </button>
          <p className="shape-text">Снежинка</p>

        </div>
        <div className="shape--item">
          <button className={active.isToy ? 'filter-btn active' : 'filter-btn'} onClick={() => {
            dispatch(actionSetShape('фигурка', 'shape'))
            setActive({...active, isToy: !active.isToy})
          }}  >
            <img className="filter-img" src={toy} alt=""/>
          </button>
          <p className="shape-text">Фигурка</p>

        </div>
      </div>

      <h4 className="filter-title">Размер</h4>
      <div className="filter--size">
        <input id="big" className="size-checkbox" defaultChecked={active.isBig}  onClick={() => {
          dispatch(actionSetSize('большой', 'size'))
          setActive({...active, isBig: !active.isBig})
        }} type="checkbox" />
        <label className="size-label" htmlFor="big">Большой</label>

        <input id="medium" className="size-checkbox" defaultChecked={active.isMedium}  onClick={() => {
          dispatch(actionSetSize('средний', 'size'))
          setActive({...active, isMedium: !active.isMedium})
        }} type="checkbox"/>
        <label className="size-label" htmlFor="medium">Средний</label>

        <input id="little" className="size-checkbox" defaultChecked={active.isSmall}  onClick={() => {
          dispatch(actionSetSize('малый', 'size'))
          setActive({...active, isSmall: !active.isSmall})
        }} type="checkbox"/>
        <label className="size-label" htmlFor="little">Малый</label>

      </div>
    </div>
  )
}