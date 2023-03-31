import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <>
   <Navbar sticky="top" collapseOnSelect expand="lg" bg="light"  variant="light">
      <Container>
      <img
              src='/images/logo.png'
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        {/* <Navbar.Brand href="/"> airbnb </Navbar.Brand> */}
        <Link to='/'style={{textDecoration:"none",color:"black"}}>airbnb</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {/* <Nav.Link href='/signup' > Register Hotel</Nav.Link> */}
            {/* <Nav.Link href='/signup'>Register Hotel</Nav.Link> */}
            <div className="options">

            <Link to='/signup'style={{textDecoration:"none",color:"black"}}>Register</Link>
            {/* <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link> */}
            <span>  </span>
            <Link to='/login'style={{textDecoration:"none",color:"black"}}>Login</Link>
            </div>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default NavBar;