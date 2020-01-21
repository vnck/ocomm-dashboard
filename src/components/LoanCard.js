import React from "react";
import { Button, Card } from 'react-bootstrap';
import "./LoanCard.css"

export default function LoanCard(props){
  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.status ? "On Loan" : "Available"}</Card.Text>
          {props.item.status ?
            <Button variant="danger">Return</Button>
            :
            <Button variant="success">Loan</Button>
          }
        </Card.Body>
      </Card>
  )
}