import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./ConsumableCard.css"

export default function ConsumableCard(props){
  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Button variant="secondary">Register</Button>
          <Button variant="link">View Details</Button>
        </Card.Body>
      </Card>
  )
}