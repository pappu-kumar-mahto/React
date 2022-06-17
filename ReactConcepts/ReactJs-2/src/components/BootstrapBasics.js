import React, { Component } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
export class BootstrapBasics extends Component {
  render() {
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <h1>BootstrapBasics</h1>
          <Button variant="primary">Primary</Button>
        </>
      );
  }
}

export default BootstrapBasics