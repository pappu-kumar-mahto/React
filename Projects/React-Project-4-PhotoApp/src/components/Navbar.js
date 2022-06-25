import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import photoLogo from "../assests/PhotoLogo.png";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={photoLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          PhotoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={NavLink} to ='/' >Photos</Nav.Link>
            <Nav.Link as ={NavLink} to ='/about'>About Us</Nav.Link> {/* 'to' value should match with 'path' prop of parent component.*/}
            <Nav.Link as ={NavLink} to ='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
