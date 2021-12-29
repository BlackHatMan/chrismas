import React from "react";
import rawData from "../../js/data"

const TreeToys = ({ favoriteItems }) => {
  const rand = rawData.filter(el => el.num < 20)
  const favorite = favoriteItems.length > 0 ? favoriteItems : rand

  const handlerStart = (e, id) => {
    e.dataTransfer.setData('text', id)
  }

  const handlerLeave = (e, el) => {
    console.log("hi leave", e)
  }
  return (<>  
    <p className="subtitle-tree">Игрушки</p>
    <div className="choice--toys">

      {favorite.map(el =>
        <div className="toys-item" key={el.num}>
          <img onDragStart={(e) => handlerStart(e, el.num)}
            onDragLeave={(e) => handlerLeave(e, el)}
            src={`./image/toys/${el.num}.png`} alt="" width={60} height={60} />
          <span className="favorite-count">{el.count}</span>
        </div>
      )}
    </div>
  </>
  )
}

export { TreeToys }