import React from "react";

export const FilterSort = ({sortHandler}) => {

  return (<div className="sort filter">
    <span className="sort-title">Сортировать</span>
    <select className="sort--select" onChange={(e) => sortHandler(e.target.value)}>
      <option  className="select-item" value="nameUp">По названию: от «А» до «Я»</option>
      <option className="select-item" value="nameDown">По названию: от «Я» до «А»</option>
      <option className="select-item" value="countUp">По количесву: по возрастанию</option>
      <option className="select-item" value="countDown">По количесву: по убыванию</option>
    </select>
  </div>

  )
}