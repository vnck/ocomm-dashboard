import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

export default function ParticipantFormPopup(props) {
  
  const [item, setItemDetails] = useState({});

  useEffect(() => {
    // fetch('127.0.0.1:5000/participants/' + props.item.id + 'alldata', {method:'GET'})
    // .then(response => response.json())
    // .then(json => {
    //   setItemDetails(json.participants_ID_alldata);
    // })
  }, []);

  const handleSubmit = event => {
    const data = new FormData(event.target);
    fetch("127.0.0.1:5000/participants/"+ props.item.id +"/update", {
      method: 'POST',
      body: 'data',
    });
  };

  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Participant Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={item.name || "-"}/>
          </Form.Group>
          <Form.Group controlId="registered">
            <Form.Label>Registered</Form.Label>
            <Form.Check type="checkbox" label="Registered" checked={props.item.registered || 0} />
          </Form.Group>
          <Form.Group controlId="contact_number">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" defaultValue={item.contact_number || "-"}/>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" defaultValue={item.email || "-"}/>
          </Form.Group>
          {/* <Form.Group controlId="group_id">
            <Form.Label>Group ID</Form.Label>
            <Form.Control type="text" defaultValue={props.item.groupid || "-"}/>
          </Form.Group> */}
          <Form.Group controlId="dob">
            <Form.Label>Date of Birth (dd/mm/yyyy)</Form.Label>
            <Form.Control type="text" defaultValue={item.DoB || "-"}/>
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" defaultValue={item.gender || "-"}>
              <option>Male</option>
              <option>Female</option>
              <option><Form.Control type="text" placeholder="Other" /></option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="nationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" defaultValue={item.nationality || "-"}/>
          </Form.Group>
          <Form.Group controlId="organisation">
            <Form.Label>Organisation</Form.Label>
            <Form.Control type="text" defaultValue={item.organisation || "-"}/>
          </Form.Group>
          <Form.Group controlId="designation">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" defaultValue={item.designation || "-"}/>
          </Form.Group>
          <Form.Group controlId="diet">
            <Form.Label>Dietary Preferences</Form.Label>
            <Form.Check
              type="radio"
              label="None"
              name="diet"/>
            <Form.Check
              type="radio"
              label="Vegetarian"
              name="diet"/>
            <Form.Check type="radio" name="diet">
              <Form.Check.Input type="radio" name="diet" isValid />
              <Form.Label>Others</Form.Label>
              <Form.Control type="text" placeholder="Others"/>
            </Form.Check>
          </Form.Group>
          <Form.Group controlId="nok_name">
            <Form.Label>Next of Kin Name</Form.Label>
            <Form.Control type="text" defaultValue={item.NoK_name || "-"}/>
          </Form.Group>
          <Form.Group controlId="nok_relationship">
            <Form.Label>Next of Kin Relationship</Form.Label>
            <Form.Control type="text" defaultValue={item.NoK_relationship || "-"}/>
          </Form.Group>
          <Form.Group controlId="nok_contact">
            <Form.Label>Next of Kin Contact Number</Form.Label>
            <Form.Control type="text" defaultValue={item.NoK_contact_number || "-"}/>
          </Form.Group>
          <Form.Group controlId="shirtsize">
            <Form.Label>Shirt Size</Form.Label>
            <Form.Control as="select" defaultValue={item.shirt_size || "M"}>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="previous_hackathons_attended">
            <Form.Label>Previous hackathons attended</Form.Label>
            <Form.Control type="text" defaultValue={item.previous_hackathons_attended || "-"}/>
          </Form.Group>
          <Form.Group controlId="bringing_utensils">
            <Form.Label>Utensils</Form.Label>
            <Form.Control type="text" defaultValue={item.bringing_utensils || "-"}/>
          </Form.Group>
          <Form.Group controlId="team_allocation_preference">
            <Form.Label>Team Allocation Preference</Form.Label>
            <Form.Control type="text" defaultValue={item.team_allocation_preference || "-"}/>
          </Form.Group>
          <Form.Group controlId="utensil_color">
            <Form.Label>Utensil Colour</Form.Label>
            <Form.Control type="text" defaultValue={item.utensil_color || "-"}/>
          </Form.Group>
          <Form.Group controlId="technology_of_interest">
            <Form.Label>Technology of Interests</Form.Label>
            <div></div>
            <Form.Check type='checkbox' id="1">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Software Platforms</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="2">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Internet of Things</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="3">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Artificial Intelligence</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Computational Fabrication</Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Form.Group controlId="category_of_interest">
            <Form.Label>Category of Interests</Form.Label>
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
          <Form.Group controlId="skills">
            <Form.Label>Skills</Form.Label>
            <Form.Check type='checkbox' id="1">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Software</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="2">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Electronics</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="3">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Mechanical Hardware</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Design</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Pitching</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" id="5">
              <Form.Check.Input type="checkbox" isValid />
              <Form.Label>Others</Form.Label>
              <Form.Control type="text" placeholder="Others"/>
            </Form.Check>
          </Form.Group>
          <Form.Group controlId="utensils">
            <Form.Label>Utensils Purchased</Form.Label>
            <Form.Check type='checkbox' id="1">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Cutlery Set</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="2">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Stojo Collapsible Cup</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="3">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Collapsible Bowl</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Stackable Bento Box</Form.Check.Label>
            </Form.Check>
            <Form.Check type='checkbox' id="4">
              <Form.Check.Input type='checkbox' checked={0}/>
              <Form.Check.Label>Stainless Steel Drinking Cup</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" id="5">
              <Form.Check.Input type="checkbox" isValid />
              <Form.Label>Hemp Scrubs</Form.Label>
              <Form.Control type="text" placeholder="Others"/>
            </Form.Check>
            <Form.Check type="checkbox" id="6">
              <Form.Check.Input type="checkbox" isValid />
              <Form.Label>None</Form.Label>
              <Form.Control type="text" placeholder="Others"/>
            </Form.Check>
          </Form.Group>
          <Form.Group controlId="workshop">
            <Form.Label>Workshop Signup</Form.Label>
            <Form.Check type="checkbox" name="skills">
              <Form.Check.Input type="checkbox" name="skills" isValid />
              <Form.Label>Repurposing Scrap Materials for Prototype Design</Form.Label>
              <Form.Control type="number" placeholder="Preference"/>
            </Form.Check>
            <Form.Check type="checkbox" name="skills">
              <Form.Check.Input type="checkbox" name="skills" isValid />
              <Form.Label>Fusion 360 Beginner Workshop</Form.Label>
              <Form.Control type="number" placeholder="Preference"/>
            </Form.Check>
            <Form.Check type="checkbox" name="skills">
              <Form.Check.Input type="checkbox" name="skills" isValid />
              <Form.Label>ESP32 Web Server & BLE</Form.Label>
              <Form.Control type="number" placeholder="Preference"/>
            </Form.Check>
            <Form.Check type="checkbox" name="skills">
              <Form.Check.Input type="checkbox" name="skills" isValid />
              <Form.Label>Using and Estimating Green Energy Sources</Form.Label>
              <Form.Control type="number" placeholder="Preference"/>
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