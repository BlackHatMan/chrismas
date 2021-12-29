import React from "react";

const Img = ({ el }) => { 

  const handlerStart = (e, id) => {
    e.dataTransfer.setData('text', id)

  }

  return (
    <img className="drag-img" src={`./image/toys/${el.id}.png`} draggable

      onDragStart={(e) => handlerStart(e, el.id)}

      style={{ position: "absolute", left: el.x + "px", top: el.y + "px" }} alt=""></img>
  )
}

export { Img }