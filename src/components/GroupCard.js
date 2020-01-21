import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import GroupDetailsPopup from './GroupDetailsPopup'
import "./GroupCard.css"

export default function GroupCard(props){

  const [detailsPopup, setDetailsPopup] = useState(false);
  const handleClose = () => setDetailsPopup(false);
  const handleShow = () => setDetailsPopup(true);

  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text><span>{props.item.space !== -1 ? "Hacking Space " + props.item.space : "Hacking Space Unallocated"}</span></Card.Text>
          <Button variant="secondary" onClick={handleShow}>Edit</Button>
        </Card.Body>
        <GroupDetailsPopup show={detailsPopup} handleClose={handleClose} item={props.item}/>
      </Card>
  )
}