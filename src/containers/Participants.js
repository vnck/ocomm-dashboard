import React, { useState, useEffect} from "react";
import ParticipantCard from "../components/ParticipantCard";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
import "./Participants.css";
import participantData from '../mockdata/participantData'

export default function Participants(){

  const [listOfParticipants, setListOfParticipants] = useState([]);
  const [filteredListOfParticipants, setFilteredListOfParticipants] = useState([]);

  const [registrationPopup, setRegistrationPopup] = useState(false);
  const handleCloseRegPopup = () => setRegistrationPopup(false);
  const handleShowRegPopup = () => setRegistrationPopup(true);

  const [deregistrationPopup, setDeregistrationPopup] = useState(false);
  const handleCloseDeregPopup = () => setDeregistrationPopup(false);
  const handleShowDeregPopup = () => setDeregistrationPopup(true);

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
      <div className="description">
        <p>Total Number of Participants: {listOfParticipants.length}</p> 
        <p>Total Number of Registered: {listOfParticipants.filter(i => i.registered).length}</p>
        <p>Total Number of Unregistered: {listOfParticipants.filter(i => !i.registered).length}</p>
      </div>
      <div className="list-container">
        <div className="search-container">
          <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
        </div>
        <div className="topbar">
          <span>Name</span>
          <span>Registration Status</span>
        </div>
        <div className="result-container">
          {filteredListOfParticipants.map((p) => 
            <ParticipantCard key={p.name} item={p} handleRegister={handleShowRegPopup} handleDeregister={handleShowDeregPopup} />
          )}
        </div>
      </div>

      <ConfirmationPopUp
        title="Confirmation"
        body="Confirm registration"
        show={registrationPopup}
        handleClose={handleCloseRegPopup}
      />

      <ConfirmationPopUp
        title="Confirmation"
        body="Confirm deregistration"
        show={deregistrationPopup}
        handleClose={handleCloseDeregPopup}
      />

    </div>
  )
}