import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function GroupFormPopup(props) {

  const [item, setItemDetails] = useState({});

  useEffect(() => {
    fetch('/groups/' + props.item.id + '/alldata', {method:'GET'})
    .then(response => response.json())
    .then(json => {
      setItemDetails(json.groups_ID_alldata);
    })
  }, []);
  
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Group Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Group Name</Form.Label>
            <Form.Control type="text" defaultValue={item.name}/>
          </Form.Group>
          <Form.Group controlId="space">
            <Form.Label>Allocated Hacking Space</Form.Label>
            <Form.Control type="text" defaultValue={item.hacking_space}/>
          </Form.Group>
          </Form>
          <div>
            <p className="label">Group Members</p>
          </div>
          <Form>
          <Form.Group controlId="categories">
            <Form.Label>Submission Categories</Form.Label>
            <div></div>
            <Form.Check type='checkbox' id="1">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Built Environment</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="2">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Waste Management</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="3">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Waste Reduction</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Transportation</Form.Check.Label>
            </Form.Check>
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