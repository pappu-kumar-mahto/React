import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink} from 'react-router-dom'
import Newslogo from "../assets/newsLogo.png";
const NavbarComponent = () => {
  let newsLogoStyle = {
    width: "40px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Newslogo}
            className="d-inline-block align-top"
            alt="New App logo"
            style={newsLogoStyle}
          />
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to ='/'>News</Nav.Link>
            <Nav.Link as={NavLink} to ='/about'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to ='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to ='/signup'>SignUp</Nav.Link>
            <Nav.Link as={NavLink} to ='/login'>
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
