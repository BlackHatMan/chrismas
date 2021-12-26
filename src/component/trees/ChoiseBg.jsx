import React from "react";

const ChoiceBg = () => {

  const path = [1, 2, 3, 4, 5, 6, 7, 8]
  const handler = (el) => {
    console.log(el)
  }

  return (<>
    <p className="subtitle-tree">Выберите фон</p>    <div className="choice--background">
      {path.map(el =>
        <div className="background-item" onClick={() => handler(el)} key={el}>
          <img className="background-item-img" src={`image/bg/${el}.jpg`} alt="" width={82} height={82} />
        </div>
      )}


    </div>
  </>
  )
}

export { ChoiceBg }