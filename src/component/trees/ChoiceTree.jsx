import React from "react";

const ChoiceTree = () => {

  const path = [1, 2, 3, 4, 5, 6];

  const handler = (el) => {
    console.log(el)
  }

  return (<>
    <p className="subtitle-tree">Выберите Ёлку</p>

    <div className="choice--tree">
      {path.map(el =>
        <div className="tree-item" onClick={() => handler(el)} key={el}>
          <img className="tree-item-img" src={`image/tree/${el}.png`} alt="" width={115} height={115} />
        </div>
      )}
    </div>  </>

  )
}

export { ChoiceTree }