import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./signup.css"
function Signup() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChangeVal = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="form-wrapper">
          <h1>Sign Up</h1>
      <Row className= "rowClass">
          <Col Col md={3} className="nameClass">
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="FirstName"
              type="text"
              value={inputValue.firstName}
              name="firstName"
              autoComplete="off"
              onChange={onChangeVal}
            />
          </Col>
          <Col md={3} className="nameClass">
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="LastName"
              type="text"
              value={inputValue.lastName}
              name="lastName"
              autoComplete="off"
              onChange={onChangeVal}
            />
          </Col>
          <Col md={3} className="nameClass">
            <label htmlFor="firstName">Phone Number</label>
            <input
              placeholder="phoneNumber"
              type="number"
              value={inputValue.phoneNumber}
              name="phoneNumber"
              autoComplete="off"
              onChange={onChangeVal}
            />
          </Col>
          <Col md={3} className="nameClass">
            <label htmlFor="firstName">Email</label>
            <input
              placeholder="email"
              type="text"
              value={inputValue.email}
              name="email"
              autoComplete="off"
              onChange={onChangeVal}
            />
          </Col>
          <Col md={3} className="nameClass">
            <label htmlFor="firstName">Password</label>
            <input
              placeholder="password"
              type="password"
              value={inputValue.password}
              name="password"
              autoComplete="off"
              onChange={onChangeVal}
            />
          <Button variant="info" className="signUpBtn">Sign Up</Button>
          </Col>
      </Row>
        </form>
    </div>
  );
}

export default Signup;
