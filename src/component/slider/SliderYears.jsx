import React from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";

export class SliderYears extends React.Component {

  state = {
    minValue: 1940,
    maxValue: 2021
  };
  onUpdate = (render, handle, value) => {
    this.setState({
      minValue: value[0].toFixed(),
      maxValue: value[1].toFixed()
    })
  }

  render() {
    const { minValue, maxValue } = this.state;
    return (
      <div className="slider">
        <h4 className="filter-title">Год приобретения</h4>
        <Nouislider
          connect
          margin={10}
          step={1}
          start={[1940, 2021]}
          range={{
            min: 1940,
            max: 2021
          }}
          onSlide={this.onUpdate}
        />

        <div className="value-wrapper">
          <label className="min-value">{minValue}</label>
          <label className="max-value">{maxValue}</label>
        </div>
      </div>
    );
  }
}