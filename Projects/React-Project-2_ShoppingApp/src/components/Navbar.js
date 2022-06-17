import React, { Component } from 'react'
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
class Navbar extends Component {
    render() {
        return (
          <BootstrapNavbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container>
              <BootstrapNavbar.Brand href="#home">
                <img
                  alt="Shopping"
                  src="https://as2.ftcdn.net/v2/jpg/03/09/38/81/1000_F_309388174_dX1YaiVXgtJEfgi7bUBTYLPQvFn7coN6.jpg"
                  width="30"
                  height="30"
                  style={{ borderRadius: "100%" }}
                  className="d-inline-block align-top"
                />{" "}
                Pappu's Shopping App
              </BootstrapNavbar.Brand>
              <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
              <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About Us</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Sign-Up</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Login
                  </Nav.Link>
                </Nav>
              </BootstrapNavbar.Collapse>
            </Container>
          </BootstrapNavbar>
        );
    }
}
export default Navbar