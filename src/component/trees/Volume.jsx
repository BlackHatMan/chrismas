import React, { useState } from "react";

import snow from "../../assets/svg/snow.svg"
import url from "../../assets/audio/audio.mp3"
import Player from "./Player";

const Volume = () => {
  const [volume, toggleVolume] = useState(false)

  const handler = () => {

    toggleVolume(!volume)
  }


  return (
    <div className="ice-volume-control">
      <button className="global-volume filter-btn" onClick={() => handler}>
        <img className="filter-img" src={snow} alt="" />
      </button>
     
      <Player url={url} />
    </div>
  )
}
export { Volume }