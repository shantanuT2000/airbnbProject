import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="blue" color='red' variant="blue">
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light"  variant="light">
      <Container>
      <img
              src="images/logo.png"
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        
        <Navbar.Brand href="#home">airbnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">AnyWhere</Nav.Link>
            <Nav.Link href="#pricing">AnyWeek</Nav.Link>
            <NavDropdown title="Search" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">By Locality</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                By Country
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> By Region </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Online Experiences
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Switch to hosting</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              MyProfile
            </Nav.Link> */}
            <NavDropdown title="MyProfile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SignUp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> Airbnb your home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Host an Experience</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.5">
               Help
              </NavDropdown.Item>   
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;