import React from "react";

const TreeToys = ({ favoriteId }) => {
  const rand = Array.from(Array(20).keys())
  const favorite = favoriteId.length > 0 ? favoriteId : rand


  return (<>
    <p className="subtitle-tree">Игрушки</p>
    <div className="choice--toys">
      {favorite.map(el =>
        <div className="toys-item" key={el}>
          <img src={`./image/toys/${el}.png`} alt="" width={60} height={60} />

        </div>
      )}

    </div>
  </>
  )
}

export { TreeToys }