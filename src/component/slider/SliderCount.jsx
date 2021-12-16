import React from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";



class SliderCount extends React.Component {
  state = {
    minValue: 1,
    maxValue: 100
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
        <h4 className="filter-title">Количество экземпляров</h4>
        <Nouislider
          connect
          margin={10}
          step={1}
          start={[1, 100]}
          range={{
            min: 1,
            max: 100
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
export default SliderCount;