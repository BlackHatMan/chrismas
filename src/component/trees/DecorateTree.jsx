import React from "react";

const DecorateTree = () => {

  const path = [1, 2, 3, 4];

  const handler = (el) => {
    console.log(el)
  }

  return (<>
    <p className="subtitle-tree">Вы нарядили</p>

    <div className="decorate--tree">
      {path.map(el =>
        <div className="tree-item" onClick={() => handler(el)} key={el}>
          <img className="tree-item-img" src={`./image/tree/${el}.png`} alt="" width={115} height={115} />
        </div>
      )}
    </div>  </>

  )
}

export { DecorateTree }