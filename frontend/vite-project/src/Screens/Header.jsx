import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';  


const Header = () => {
 

return (
    <Navbar expand="lg" fixed="top" style={{color: "#21202E", backgroundColor:"#FFFAFA", borderBottom: '2px solid #F6A200'}}>
    <Container fluid >
      <Navbar.Brand href="/" style={{color: "#21202E"}}>Tims Audit</Navbar.Brand>
      <div className='justify-content-end'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "#21202E"}} />
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav" style={{color: "#21202E"}} >
        <Nav className="me-auto " style={{color: "#21202E"}}>
          <Navbar.Brand href="/" >Home</Navbar.Brand>
          <Nav.Link className="me-auto " style={{color: "#21202E"}}>
            <Link  to="contactus" spy={true} smooth={true} offset={-70} duration={500} style={{textDecoration: "none"}} >
            Contact Us
            </Link>
          </Nav.Link>
          <Nav.Link className="me-auto " style={{color: "#21202E"}}>
            <Link  to="Our services" spy={true} smooth={true} offset={-70} duration={500} style={{textDecoration: "none"}} >
            Our Services
            </Link>
          </Nav.Link>
          <Nav.Link className="me-auto " style={{color: "#21202E"}}>
            <Link  to="Our services" spy={true} smooth={true} offset={-70} duration={500} style={{textDecoration: "none"}} >
            About Us
            </Link>
          </Nav.Link>
          
        </Nav>
       
       
        
       
      </Navbar.Collapse>
      </div>
     
    </Container>
    
   
  </Navbar>
  )
}
export default Header