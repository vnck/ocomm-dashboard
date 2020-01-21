import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./GroupCard.css"

export default function GroupCard(props){
  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>Hacking Space: {props.item.space !== -1 ? props.item.space : "Unallocated"}</Card.Text>
          <Button variant="secondary">Edit</Button>
        </Card.Body>
      </Card>
  )
}