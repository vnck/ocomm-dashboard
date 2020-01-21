import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import "./Login.css";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm(){
    return password.length > 0;
  }

  function handleSubmit(event){
    event.preventDefault();

    setIsLoading(true);

    try {
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert("Failed to Log In");
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <div className="description">
        <p>Access to this portal is for authorised staff members of What The Hack @ SUTD only.<br></br>(ง'̀-'́)ง</p>
      </div> 
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
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