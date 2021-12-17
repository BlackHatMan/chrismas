import React from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";


export class SliderCount extends React.Component {
  state = {
    minCount: 1,
    maxCount: 20
  };
  onUpdate = (render, handle, value) => {
    this.setState({
      minCount: Math.floor(value[0]),
      maxCount: Math.floor(value[1])
    })
    this.props.setStatus((prevState) => {
      return { ...prevState, ...this.state }
    })
  }

  render() {
    return (
      <div className="slider">
        <h4 className="filter-title">Количество экземпляров</h4>
        <Nouislider
          connect
          step={1}
          start={[this.state.minCount, this.state.maxCount]}
          range={{
            min: 1,
            max: 20
          }}
          onSlide={this.onUpdate}
        />

        <div className="value-wrapper">
          <label className="min-value">{this.state.minCount}</label>
          <label className="max-value">{this.state.maxCount}</label>
        </div>
      </div>
    );
  }
} 