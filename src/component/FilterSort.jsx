
import React from "react";

export const FilterSort = () => {

  return (<div className="sort filter">
    <span className="sort-title">Сортировка</span>
     <select className="sort--select">
       <option value="">По названию: от «А» до «Я»</option>
       <option value="">По названию: от «Я» до «А»</option>
       <option value="">По количесву: по возрастанию</option>
       <option value="">По количесву: по убыванию</option> 
     </select> 
  </div>

  )
}