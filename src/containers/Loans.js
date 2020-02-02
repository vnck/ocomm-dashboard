import React, { useState, useEffect } from "react";
import LoanCard from "../components/LoanCard";
import "./Loans.css";
import loanData from '../mockdata/loanData'

export default function Loans(){

  const [listOfLoans, setListOfLoans] = useState([]);
  const [filteredListOfLoans, setFilteredListOfLoans] = useState([]);

  useEffect(() => {
    // fetch('127.0.0.1:5000/loans/get_all', {method:'GET'})
    // .then(response => response.json())
    // .then(json => {
    //   setListOfLoans(json.loans_get_all);
    //   setFilteredListOfLoans(json.loans_get_all);
    // })
    setListOfLoans(loanData.loans);
    setFilteredListOfLoans(loanData.loans);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfLoans.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredListOfLoans(filtered);
    } else {
      setFilteredListOfLoans(listOfLoans);
    }
  }

  return (
    <div className="Loans">
      <div className="header"><h1>Loans</h1></div>
      <div className="description">
        <p>Total Number of Loanable Items: {listOfLoans.length}</p> 
        <p>Total Number on loan: {listOfLoans.filter(i => i.status).length}</p>
        <p>Total Number in inventory: {listOfLoans.filter(i => !i.status).length}</p>
      </div>

      <div className="list-container">
        <div className="search-container">
          <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
        </div>
        <div className="topbar">
          <span>Item Name</span>
          <span>Status</span>
          <span>On Loan To</span>
        </div>
        <div className="result-container">
          {filteredListOfLoans.map((p) => 
            <LoanCard key={p.name} item={p} />
          )}
        </div>
      </div>
    </div>
  )
}