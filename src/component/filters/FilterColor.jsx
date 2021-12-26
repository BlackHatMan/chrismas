import React from "react"; 
import {actionSetColor} from "../../store/productReducer";

export const FilterColor = ({dispatch}) => { 


  return (<div className="color filter">
    <h4 className="filter-title">Цвет</h4>

    <div className="filter--color">

      <input id="white" onClick={ () => dispatch(actionSetColor('белый','color'))} className="hidden" type="checkbox"/>
      <label htmlFor="white" className="checkbox-label white"/>

      <input id="yellow" onClick={ () => dispatch(actionSetColor('желтый','color'))} className="hidden" type="checkbox"/>
      <label htmlFor="yellow" className="checkbox-label yellow"/>

      <input id="red" onClick={ () => dispatch(actionSetColor('красный','color'))} className="hidden" type="checkbox"/>
      <label htmlFor="red" className="checkbox-label red"/>

      <input id="blue" onClick={ () => dispatch(actionSetColor('синий','color'))} className="hidden"  type="checkbox"/>
      <label htmlFor="blue" className="checkbox-label blue"/>

      <input id="green" onClick={ () => dispatch(actionSetColor('зелёный','color'))} className="hidden" type="checkbox"/>
      <label htmlFor="green" className="checkbox-label green"/>
    </div></div>

  )
}