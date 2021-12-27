import React from "react";
import bg1 from "../../assets/bg/1.jpg"
import bg2 from "../../assets/bg/2.jpg"
import bg3 from "../../assets/bg/3.jpg"
import bg4 from "../../assets/bg/4.jpg"
import bg5 from "../../assets/bg/5.jpg"
import bg6 from "../../assets/bg/6.jpg"
import bg7 from "../../assets/bg/7.jpg"
import bg8 from "../../assets/bg/8.jpg" 
const TreeMain = ({ backId, treeId }) => {
  const pathTree = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8]  //TODO create Json {id: url}


  return (
    <div className="tree--main" style={{ backgroundImage: `url(${pathTree[backId - 1]})` }}>
      <img className="tree-area" src={`./image/tree/${treeId}.png`} alt="" useMap="true"/>
    </div>
  )
}

export { TreeMain } 