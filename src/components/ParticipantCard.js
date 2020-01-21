import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./ParticipantCard.css"

export default function ParticipantCard(props){
  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          {props.item.registered ? 
            <Button variant="success">Registered</Button>
            :
            <Button variant="secondary">Register</Button>
          }
          <Button variant="link">View Details</Button>
        </Card.Body>
      </Card>
  )
}