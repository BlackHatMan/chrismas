
import React from "react";

export const FilterSort = () => {

  return (<div className="sort filter">
    <span className="sort-title">Сортировать</span>
    <select className="sort--select">
      <option className="select-item" value="">По названию: от «А» до «Я»</option>
      <option className="select-item" value="">По названию: от «Я» до «А»</option>
      <option className="select-item" value="">По количесву: по возрастанию</option>
      <option className="select-item" value="">По количесву: по убыванию</option>
    </select>
  </div>

  )
}