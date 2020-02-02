import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css"

export default function Home(){
  const [NumParticipants, SetNumParticipants] = useState(0); 
  const [NumGroups, SetNumGroups] = useState(0); 

  useEffect(() => {
    fetch('/groups/get_all', {method:'GET'})
    .then(response => {return response.json();})
    .then(json => {
      SetNumGroups(json._groups_count);
    })
    .catch(e => {
      console.log(e);
    })
    
    fetch('/participants/get_all', {method:'GET'})
    .then(response => response.json())
    .then(json => {
      SetNumParticipants(json._participants_count);
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  return (
    <div className="dashboard">
      <div className="header"><h1>Dashboard</h1></div>
      <div className="stats-table">
        <Card>
          <Card.Body>
            <Card.Title>Participants</Card.Title>
            <Card.Text>Number of Participants: {NumParticipants}</Card.Text>
            <LinkContainer to="/participants">
              <Button variant="primary">Search Participants</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Groups</Card.Title>
            <Card.Text>Number of Groups: {NumGroups}</Card.Text>
            <LinkContainer to="/groups">
              <Button variant="primary">Search Groups</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Loans</Card.Title>
            <LinkContainer to="/loans">
              <Button variant="primary">Search Loans</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Consumables</Card.Title>
            <LinkContainer to="/consumables">
              <Button variant="primary">Search Consumables</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}