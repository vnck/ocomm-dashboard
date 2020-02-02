import React, { useState, useEffect } from "react";
import ConsumableCard from "../components/ConsumableCard"
import "./Consumables.css"
import consumableData from "../mockdata/consumableData"

export default function Consumables(){

  const [listOfConsumables, setListOfConsumables] = useState([]);
  const [filteredListOfConsumables, setFilteredListOfConsumables] = useState([]);


  useEffect(() => {
    // fetch('127.0.0.1:5000/consumables/get_all', {method:'GET'})
    // .then(response => response.json())
    // .then(json => {
    //   setListOfConsumables(json.consumables_get_all);
    //   setFilteredListOfConsumables(json.consumables_get_all);
    // })
    setListOfConsumables(consumableData.consumables);
    setFilteredListOfConsumables(consumableData.consumables);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfConsumables.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredListOfConsumables(filtered);
    } else {
      setFilteredListOfConsumables(listOfConsumables);
    }
  }

  return (
    <div className="Consumables">
      <div className="header"><h1>Consumables</h1></div>
      <div className="description">
        <p>Total Number of Consumables: {listOfConsumables.length}</p> 
        <p>Consumables in stock: {listOfConsumables.filter(i => i.status > 0).length}</p>
        <p>Consumables out of stock: {listOfConsumables.filter(i => i.status <= 0).length}</p>
      </div>
      <div className="list-container">
        <div className="search-container">
          <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
        </div>
        <div className="topbar">
        <span>Item Name</span>
        <span>Quantity</span>
      </div>
        <div className="result-container">
          {filteredListOfConsumables.map(p => 
            <ConsumableCard key={p.name} item={p} />
          )}
        </div>
      </div>
    </div>
  )
}