import React, { useState } from "react";
import "./PageTree.css";
import { ChoiceTree } from "../component/trees/ChoiceTree";
import { ChoiceBg } from "../component/trees/ChoiceBg";
import { TreeMain } from "../component/trees/TreeMain";
import { TreeToys } from "../component/trees/TreeToys";
import { useSelector } from "react-redux";
import { ChoiceGarland } from "../component/trees/ChoiceGarland";
import { Volume } from "../component/trees/Volume";
import { DecorateTree } from "../component/trees/DecorateTree";


export const PageTree = () => {

  const favoriteId = useSelector(state => state.favoriteReducer.favorite)

  const [backId, setBackId] = useState(1)
  console.log("🚀 ~ file: PageTree.jsx ~ line 17 ~ PageTree ~ backId", backId)

  return (
    <div className="tree--page-container">
      <div className="tree--choice-left">

        <Volume />
        <ChoiceTree />
        <ChoiceBg setBackId={setBackId} />
        <ChoiceGarland />
      </div>

      <TreeMain backId={backId} />

      <div className="tree--choice-right">
        <TreeToys favoriteId={favoriteId} />

        <DecorateTree />
      </div>
    </div>
  )
}