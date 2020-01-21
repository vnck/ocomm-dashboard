import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./ConsumableCard.css"

export default function ConsumableCard(props){
  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.status}</Card.Text>
          {props.item.status > 0 ? 
            <Button variant="success">Issue</Button>
            :
            <Button variant="danger" disabled>Out of Stock</Button>
          }
        </Card.Body>
      </Card>
  )
}