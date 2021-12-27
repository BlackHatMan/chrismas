import React from "react";

const ChoiceGarland = () => {



  return <>
    <p className="subtitle-tree">Выберите гирлянду</p>
    <div className="garland-container">
      <div className="garland-btns">
        <button className="color-btn multicolor-btn" data-color="multicolor"></button>
        <button className="color-btn red-btn" data-color="red"></button>
        <button className="color-btn blue-btn" data-color="blue"></button>
        <button className="color-btn yellow-btn" data-color="yellow"></button>
        <button className="color-btn green-btn" data-color="green"></button>
      </div>
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" value="" />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <div className="onoffswitch-inner"></div>
          <div className="onoffswitch-switch"></div>
        </label>
      </div>
    </div>
  </>
}

export { ChoiceGarland }