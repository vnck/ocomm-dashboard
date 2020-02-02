import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function LoanFormPopup(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Loan Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" value={props.item.name}/>
          </Form.Group>
          <Form.Group controlId="loaner">
            <Form.Label>Loan To</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        <Button variant="primary" onClick={props.handleClose}>Loan</Button>
      </Modal.Footer>
    </Modal>
  );
}