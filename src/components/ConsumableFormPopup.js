import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ConsumableFormPopup(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Consumable Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" value={props.item.name}/>
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" defaultValue={0}/>
          </Form.Group>
          <Form.Group controlId="loaner">
            <Form.Label>Issue To</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        <Button variant="primary" onClick={props.handleClose}>Issue</Button>
      </Modal.Footer>
    </Modal>
  );
}