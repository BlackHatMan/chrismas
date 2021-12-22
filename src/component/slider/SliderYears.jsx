import React, {useState} from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";
import {useDispatch} from "react-redux";
import {actionSetYears} from "../../store/productReducer";

export  const SliderYears = () =>  {
  const dispatch = useDispatch()
  const [years , serYears] = useState({
    startYear: 1940,
    endYear: 2021,
  })

  const handler = (render, handle, value) => {
    let startYear = Math.floor(value[0])
    let endYear =  Math.floor(value[1])
    serYears({
      startYear,
      endYear
    })
    dispatch(actionSetYears(startYear, endYear))
  }

    return (
      <div className="slider">
        <h4 className="filter-title">Год приобретения</h4>
        <Nouislider
          connect
          margin={10}
          step={5}
          start={[years.startYear, years.endYear]}
          range={{
            min: 1940,
            max: 2021
          }}
          onUpdate={handler}
        />

        <div className="value-wrapper">
          <label className="min-value">{years.startYear}</label>
          <label className="max-value">{years.endYear}</label>
        </div>
      </div>
    );
  }
