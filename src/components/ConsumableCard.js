import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ConsumableFormPopup from './ConsumableFormPopup'
import "./ConsumableCard.css"

export default function ConsumableCard(props){

  const [formPopup, setFormPopup] = useState(false);
  const handleClose = () => setFormPopup(false);
  const handleShow = () => setFormPopup(true);

  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.status}</Card.Text>
          {props.item.status > 0 ? 
            <Button variant="success" onClick={handleShow}>Issue</Button>
            :
            <Button variant="danger" disabled>Out of Stock</Button>
          }
        </Card.Body>
        <ConsumableFormPopup show={formPopup} handleClose={handleClose} item={props.item}/>
      </Card>
  )
}