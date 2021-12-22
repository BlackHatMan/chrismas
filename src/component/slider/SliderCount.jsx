import React, {useState} from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";
import {useDispatch} from "react-redux";
import {actionSetCount} from "../../store/productReducer";

export  const SliderCount = () =>  {
  const dispatch = useDispatch()
  const [count , setCount] = useState({
    min: 1,
    max: 20,
  })

  const handler = (render, handle, value) => {
    let min = Math.floor(value[0])
    let max =  Math.floor(value[1])
    setCount({
      min,
      max
    })
    dispatch(actionSetCount(min, max))
  }

  return (
    <div className="slider">
      <h4 className="filter-title">Количество экземпляров</h4>
      <Nouislider
        connect
        step={1}
        start={[count.min, count.max]}
        range={{
          min: 1,
          max: 20
        }}
        onUpdate={handler}
      />

      <div className="value-wrapper">
        <label className="min-value">{count.min}</label>
        <label className="max-value">{count.max}</label>
      </div>
    </div>
  );
}