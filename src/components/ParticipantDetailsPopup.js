import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ParticipantDetailsPopup(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Participant Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={props.item.name}/>
          </Form.Group>
          <Form.Group controlId="registered">
            <Form.Label>Registered</Form.Label>
            <Form.Check type="checkbox" label="Registered" defaultChecked={props.item.registered} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        <Button variant="primary" onClick={props.handleClose}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}