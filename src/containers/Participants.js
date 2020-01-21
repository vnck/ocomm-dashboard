import React, { useState, useEffect} from "react";
import ParticipantCard from "../components/ParticipantCard";
import "./Participants.css";
import participantData from '../mockdata/participantData'

export default function Participants(){

  const [listOfParticipants, setListOfParticipants] = useState([]);
  const [filteredListOfParticipants, setFilteredListOfParticipants] = useState([]);

  useEffect(() => {
    setListOfParticipants(participantData.participants);
    setFilteredListOfParticipants(participantData.participants);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfParticipants.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredListOfParticipants(filtered);
    } else {
      setFilteredListOfParticipants(listOfParticipants);
    }
  }

  return (
    <div className="Participants">
      <div className="header"><h1>Participants</h1></div>
      <div className="search-container">
        <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
      </div>
      <div className="result-container">
        {filteredListOfParticipants.map((p) => 
          <ParticipantCard key={p.name} item={p} />
        )}
      </div>
    </div>
  )
}