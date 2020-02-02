import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ParticipantFormPopup from './ParticipantFormPopup';
import ConfirmationPopUp from "./ConfirmationPopUp";
import "./ParticipantCard.css"

export default function ParticipantCard(props){

  const [formPopup, setFormPopup] = useState(false);
  const handleClose = () => setFormPopup(false);
  const handleShow = () => setFormPopup(true);

  const [registrationPopup, setRegistrationPopup] = useState(false);
  const handleCloseRegPopup = () => setRegistrationPopup(false);
  const handleShowRegPopup = () => setRegistrationPopup(true);
  const handleSubmitRegPopup = () => {
    // fetch('127.0.0.1:5000/participants/' + props.item.d + '/register', {method: 'POST'})
    // .then(() => setRegistrationPopup(false))
    setRegistrationPopup(false)
  };

  const [deregistrationPopup, setDeregistrationPopup] = useState(false);
  const handleCloseDeregPopup = () => setDeregistrationPopup(false);
  const handleShowDeregPopup = () => setDeregistrationPopup(true);
  const handleSubmitDeregPopup = () => {
    // fetch('127.0.0.1:5000/participants/' + props.item.d + '/deregister', {method: 'POST'})
    // .then(() => setDeregistrationPopup(false))
    setDeregistrationPopup(false)
  };

  return (
      <Card>
        <Card.Body>
          <Card.Title><span>{props.item.name}</span></Card.Title>
          {props.item.registered ? 
            <Button variant="success" onClick={handleShowDeregPopup}>Registered</Button>
            :
            <Button variant="waiting" onClick={handleShowRegPopup}>Register</Button>
          }
          <Button variant="secondary" onClick={handleShow}>Edit</Button>
        </Card.Body>
        <ParticipantFormPopup show={formPopup} handleClose={handleClose} item={props.item}/>
        <ConfirmationPopUp
          title="Confirmation"
          body={"Register " + props.item.name + "?"}
          show={registrationPopup}
          handleClose={handleCloseRegPopup}
          handleSubmit={handleSubmitRegPopup}
        />
        <ConfirmationPopUp
          title="Confirmation"
          body={"Deregister " + props.item.name + "?"}
          show={deregistrationPopup}
          handleClose={handleCloseDeregPopup}
          handleSubmit={handleSubmitDeregPopup}
        />
      </Card>
  )
}