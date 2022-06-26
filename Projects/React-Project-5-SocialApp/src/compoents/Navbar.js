import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import SocialImg from "../assests/social-img.jpg";
const NavbarComponent = () => {
  let socialImage = {
    width: '30px',
    heght: '30px',
    borderRadius: '50%',
    marginRight: '10px'
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={SocialImg}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style = {socialImage}
          />
          Social App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as= {NavLink} to= '/'>Home</Nav.Link>
            <Nav.Link as= {NavLink} to= '/about'>About Us</Nav.Link>
            <Nav.Link as= {NavLink} to= '/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as= {NavLink} to= '/signUp'>Sign Up</Nav.Link>
            <Nav.Link as= {NavLink} to= '/logIn'>
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
