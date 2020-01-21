import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ParticipantDetailsPopup from './ParticipantDetailsPopup';
import "./ParticipantCard.css"

export default function ParticipantCard(props){

  const [detailsPopup, setDetailsPopup] = useState(false);
  const handleClose = () => setDetailsPopup(false);
  const handleShow = () => setDetailsPopup(true);

  return (
      <Card>
        <Card.Body>
          <Card.Title><span>{props.item.name}</span></Card.Title>
          {props.item.registered ? 
            <Button variant="success" onClick={props.handleDeregister}>Registered</Button>
            :
            <Button variant="waiting" onClick={props.handleRegister}>Register</Button>
          }
          <Button variant="secondary" onClick={handleShow}>Edit</Button>
        </Card.Body>
        <ParticipantDetailsPopup show={detailsPopup} handleClose={handleClose} item={props.item}/>
      </Card>
  )
}