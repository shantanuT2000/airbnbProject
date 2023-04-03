import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'



function NavBar({Navi}) {
  return (
    <>
   <Navbar sticky="top" collapseOnSelect expand="lg" bg="light"  variant="light">
      <Container>
      <img
              src="/images/logo.png"
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
            <div className="options">
          {
            Navi.map((curElem)=>{
              return(
                <>
                 <Link to={curElem.path} style={{textDecoration:"none",color:"black"}}>{curElem.item}</Link>
           
                 <span>  </span>
                </>
              )
            })
          }
            </div> 
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default NavBar;