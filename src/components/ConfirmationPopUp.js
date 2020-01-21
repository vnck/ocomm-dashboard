import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ConfirmationPopUp(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        <Button variant="primary" onClick={props.handleClose}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}