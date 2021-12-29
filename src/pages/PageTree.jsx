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

  const favoriteItems = useSelector(state => state.favoriteReducer.items)

  const [backId, setBackId] = useState(1)
  const [treeId, serTreeId] = useState(1)

  return (
    <div className="tree--page-container">
      <div className="tree--choice-left">

        <Volume />
        <ChoiceTree serTreeId={serTreeId} />
        <ChoiceBg setBackId={setBackId} />
        <ChoiceGarland />
      </div>

      <TreeMain backId={backId} treeId={treeId} />

      <div className="tree--choice-right">
        <TreeToys favoriteItems={favoriteItems} />

        <DecorateTree />
      </div>
    </div>
  )
}