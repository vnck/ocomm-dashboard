import React, { useState, useEffect } from "react";
import LoanCard from "../components/LoanCard";
import "./Loans.css";
import loanData from '../mockdata/loanData'

export default function Loans(){

  const [listOfLoans, setListOfLoans] = useState([]);
  const [filteredListOfLoans, setFilteredListOfLoans] = useState([]);

  useEffect(() => {
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
      <div className="search-container">
        <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
      </div>
      <div className="result-container">
        {filteredListOfLoans.map((p) => 
          <LoanCard key={p.name} item={p} />
        )}
      </div>
    </div>
  )
}