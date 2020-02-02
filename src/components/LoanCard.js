import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import LoanFormPopup from './LoanFormPopup'
import ConfirmationPopUp from "./ConfirmationPopUp";
import "./LoanCard.css"

export default function LoanCard(props){

  const [formPopup, setFormPopup] = useState(false);
  const handleClose = () => setFormPopup(false);
  const handleShow = () => setFormPopup(true);

  const [returnPopup, setReturnPopup] = useState(false);
  const handleCloseReturnPopup = () => setReturnPopup(false);
  const handleShowReturnPopup = () => setReturnPopup(true);

  return (
      <Card>
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.status ?
          <span style={{"color":"red"}}>On Loan</span> : <span style={{"color":"green"}}>Available</span>}</Card.Text>
          {props.item.status ?
            <Button variant="waiting" onClick={handleShowReturnPopup}>Return</Button>
            :
            <Button variant="success" onClick={handleShow}>Loan</Button>
          }
          <Card.Text>{props.item.onloanto}</Card.Text>
        </Card.Body>
        <LoanFormPopup show={formPopup} handleClose={handleClose} item={props.item}/>
        <ConfirmationPopUp
          title="Confirm Return"
          body={props.item.onloanto + " returned " + props.item.name + "?"}
          show={returnPopup}
          handleClose={handleCloseReturnPopup}
        />
      </Card>
  )
}