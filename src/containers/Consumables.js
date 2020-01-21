import React, { useState } from "react";
import ConsumableCard from "../components/ConsumableCard"
import "./Consumables.css"

export default function Consumables(){

  const [listOfConsumables, setListOfConsumables] = useState([]);
  const [filteredListOfConsumables, setFilteredListOfConsumables] = useState([]);


  function filterSearch(e) {
    if (e.target.value !== "") {
      setFilteredListOfConsumables(listOfConsumables.filter(item => {
        item.name.toLowerCase().includes(e.target.value.toLowerCase());
      }));
    } else {
      setFilteredListOfConsumables(listOfConsumables);
    }
  }

  return (
    <div className="Consumables">
      <div className="header"><h1>Consumables</h1></div>
      <div className="search-container">
        <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
      </div>
      <div className="result-container">
        {filteredListOfConsumables.map((p) => 
          <ConsumableCard key={p.name} item={p} />
        )}
      </div>
    </div>
  )
}