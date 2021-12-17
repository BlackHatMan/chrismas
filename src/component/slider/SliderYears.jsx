import React from "react";
import Nouislider from "nouislider-react";
import "./nouislider.css";

export class SliderYears extends React.Component {
  state = {
    startYear: 1940,
    endYear: 2021
  }
  onUpdate = (render, handle, value) => {
    this.setState({
      startYear:  Math.floor(value[0]),
      endYear:  Math.floor(value[1])
    })

    this.props.setStatus((prevState) => {
      return { ...prevState, ...this.state }
    })
  }

  render() {
    return (
      <div className="slider">
        <h4 className="filter-title">Год приобретения</h4>
        <Nouislider
          connect
          margin={10}
          step={5}
          start={[this.state.startYear, this.state.endYear]}
          range={{
            min: 1940,
            max: 2021
          }}
          onUpdate={this.onUpdate}
        />

        <div className="value-wrapper">
          <label className="min-value">{this.state.startYear}</label>
          <label className="max-value">{this.state.endYear}</label>
        </div>
      </div>
    );
  }
}