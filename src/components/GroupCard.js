import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import GroupFormPopup from './GroupFormPopup'
import "./GroupCard.css"

export default function GroupCard(props){

  const [formPopup, setFormPopup] = useState(false);
  const handleClose = () => setFormPopup(false);
  const handleShow = () => setFormPopup(true);

  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text><span>{props.item.space !== -1 ? "Hacking Space " + props.item.space : "Hacking Space Unallocated"}</span></Card.Text>
          <Button variant="secondary" onClick={handleShow}>Edit</Button>
        </Card.Body>
        <GroupFormPopup show={formPopup} handleClose={handleClose} item={props.item}/>
      </Card>
  )
}