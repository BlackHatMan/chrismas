import React, { useState, useEffect } from "react";

import volumeImg from "../../assets/svg/audio.svg"

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <button onClick={toggle} className="global-ice filter-btn">
      <img className="filter-img" src={volumeImg} alt="" />
    </button>
  );
};

export default Player;