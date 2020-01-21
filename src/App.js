import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Routes from "./Routes";
import './App.css';

function App(props) {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad(){
    try {
      // check if authenticated
      // props.history.push("/login");
      userHasAuthenticated(true);
    } catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsAuthenticating(false)
  }
  
  function handleLogout(){
    userHasAuthenticated(false);
    props.history.push("/login");
  }

  return (
    !isAuthenticating && 
    <div className="App container">
      <Navbar fluid="true" bg="light" collapseOnSelect>
          <Navbar.Brand>
            <Nav.Link href="/">WTH Self-Help</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="navbar-items">
            <Nav fill variant="pills">
              {isAuthenticated ?
                <>
                  <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/participants">
                    <Nav.Link>Participants</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/groups">
                    <Nav.Link>Groups</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/loans">
                    <Nav.Link>Loans</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/consumables">
                    <Nav.Link>Consumables</Nav.Link>
                  </LinkContainer>
                  <Nav.Link className="logout" onClick={handleLogout}>Logout</Nav.Link>
                </> :
                <LinkContainer to="/login">
                  <Nav.Link className="login" >Login</Nav.Link>
                </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{isAuthenticated, userHasAuthenticated}}/>
    </div>
  );
}

export default withRouter(App);