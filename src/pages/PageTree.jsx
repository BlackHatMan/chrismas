import React from "react";
import "./PageTree.css";
import { ChoiceTree } from "../component/trees/ChoiceTree";
import { ChoiceBg } from "../component/trees/ChoiseBg";
import { TreeMain } from "../component/trees/TreeMain";
import { TreeToys } from "../component/trees/TreeToys";


export const PageTree = () => {

  return (
    <div className="tree--page-container">
      <div className="tree--choice-left">
        <ChoiceTree />
        <ChoiceBg />

        <p className="subtitle-tree">Выберите гирлянду</p>
        <div className="choice--garland">
        </div>
      </div>


      <TreeMain />

      <div className="tree--choice-right">
        <TreeToys />
        <div className="choice--toys">
          <p className="subtitle-tree">Вы нарядили</p>
        </div>

      </div>

    </div>

  )
}