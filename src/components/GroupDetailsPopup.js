import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function GroupDetailsPopup(props) {
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Group Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Group Name</Form.Label>
            <Form.Control type="text" defaultValue={props.item.name}/>
          </Form.Group>
          <Form.Group controlId="space">
            <Form.Label>Allocated Hacking Space</Form.Label>
            <Form.Control type="text" defaultValue={props.item.space}/>
          </Form.Group>
          </Form>
          <div>
            <p className="label">Group Members</p>
          </div>
          <Form>
          <Form.Group controlId="categories">
            <Form.Label>Submission Categories</Form.Label>
            <div></div>
            <Form.Check inline label="Built Environment" type='checkbox' id="1" />
            <Form.Check inline label="Waste Management" type='checkbox' id="2" />
            <Form.Check inline label="Waste Reduction" type='checkbox' id="3" />
            <Form.Check inline label="Transportation" type='checkbox' id="4" />
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