import React, { useState } from "react";
import bg1 from "../../assets/bg/1.jpg"
import bg2 from "../../assets/bg/2.jpg"
import bg3 from "../../assets/bg/3.jpg"
import bg4 from "../../assets/bg/4.jpg"
import bg5 from "../../assets/bg/5.jpg"
import bg6 from "../../assets/bg/6.jpg"
import bg7 from "../../assets/bg/7.jpg"
import bg8 from "../../assets/bg/8.jpg"
import { Img } from "./Img";
const TreeMain = ({ backId, treeId }) => {

  const pathTree = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8]  //TODO create Json {id: url}
  const [mapImg, setMapImg] = useState([])

  const handlerDrag = (e) => {
    e.preventDefault()
  }

  const handlerDrop = (e) => {
    
    let id = Number.parseInt(e.dataTransfer.getData('text')) 

    const newImg = {
      x: e.nativeEvent.offsetX - 40,
      y: e.nativeEvent.offsetY - 40,
      id: id
    }

    if (mapImg.some(el => el.id === id)) {
      setMapImg(prev => [...prev.filter(el => el.id !== id), newImg])
    } else {
      setMapImg(prev => [...prev, newImg])
    }

  }
  return (
    <div className="tree--main" style={{ backgroundImage: `url(${pathTree[backId - 1]})` }}>
      <img className="tree-area" useMap="#image-map" src={`./image/tree/${treeId}.png`} alt="" />

      <map name="image-map" className="map"
        onDragOver={handlerDrag}
        onDragEnter={handlerDrag}
        onDrop={handlerDrop}>

        <area target="" alt="treeMap" title="treeMap"
                  coords="204,143,190,177,181,142,206,118,191,96,187,79,203,51,197,63,220,34,235,16,241,3,260,3,273,21,288,36,298,53,317,85,313,96,305,109,315,122,336,122,355,136,370,145,374,154,365,168,357,182,359,193,393,210,368,214,407,235,396,261,386,270,404,295,392,311,404,339,422,335,430,337,379,324,396,338,433,357,436,372,425,377,410,384,410,403,437,433,451,439,418,425,462,456,451,477,448,483,433,489,428,497,463,514,485,520,441,510,496,539,497,552,481,580,479,591,480,610,470,632,464,652,451,673,417,685,396,691,372,704,316,708,268,712,237,713,174,713,138,713,104,694,81,669,57,654,34,617,23,599,11,577,4,560,6,542,9,521,24,519,37,512,39,495,31,474,11,459,10,439,31,423,53,426,78,425,89,420,95,398,80,385,66,373,69,349,93,340,104,342,113,325,109,316,121,303,124,297,113,279,110,265,113,250,109,242,101,224,115,205,126,202,159,197,168,191,145,195"
          shape="poly" />
      </map>

      {mapImg.length > 0 ? mapImg.map((el, index) => <Img key={index} el={el} />) : null}
    </div>
  )
}

export { TreeMain } 