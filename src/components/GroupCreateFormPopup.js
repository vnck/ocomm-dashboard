import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function GroupCreateFormPopup(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Group Name</Form.Label>
            <Form.Control type="text" required/>
          </Form.Group>
          <Form.Group controlId="space">
            <Form.Label>Allocated Hacking Space</Form.Label>
            <Form.Control type="text"/>
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