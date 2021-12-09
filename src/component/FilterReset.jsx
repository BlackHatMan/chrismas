
import React from "react";

export const FilterSort = () => {

  return (<div className="sort filter">
    <p className="filter-title">Сортировка</p>
     <select className="select">
       <option value="">По названию: от «А» до «Я»</option>
       <option value="">По названию: от «Я» до «А»</option>
       <option value="">По количесву: по возрастанию</option>
       <option value="">По количесву: по убыванию</option> 
     </select>
     <input className="input" type="text" placeholder="Search"></input>
    <button className="reset">Сброс фильтров</button>
  </div>

  )
}