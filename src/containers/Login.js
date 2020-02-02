import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import "./Login.css";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm(){
    return password.length > 0;
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    let data = new FormData(e.target);
    fetch('127.0.0.1:5000/login', {
      method:'POST',
      body: data
    })
    .then(response => response.json())
    .then(json => {
      if (json.success === "Logged in"){
        setIsLoading(false);
        props.userHasAuthenticated(true);
        props.history.push("/");
      } else {
        alert("Failed to log in. Please try again.");
        setIsLoading(false);
      }
    })
    .catch(e => {
      console.log(e);
      alert("Request Failed, auto logging in.");
      setIsLoading(false);
      props.userHasAuthenticated(true);
      props.history.push("/");
    })
  }

  return (
    <div className="Login">
      <div className="description">
        <p>Access to this portal is for authorised staff members of What The Hack @ SUTD only.<br></br>(ง'̀-'́)ง</p>
      </div> 
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="login" bsSize="large">
          <Form.Label>User</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={user}
            onChange={e=> setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
          />
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >Login</LoaderButton>
      </Form>
    </div>
  );
}