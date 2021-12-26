import React from "react";

const TreeToys = () => {
  let path = Array.from(Array(20).keys())

  return (<>
    <p className="subtitle-tree">Игрушки</p>
    <div className="choice--toys">
      {path.map(el =>
        <div className="toys-item" key={el}>
          <img src={`./image/toys/${el + 1}.png`} alt="" width={60} height={60} />
          
        </div>
      )}

    </div>
  </>
  )
}

export { TreeToys }