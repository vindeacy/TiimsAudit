import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import book from './images/book.jpg'
const Landingpage = () => {
  

return (
    <div>

<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tims Audit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <Row className="align-items-center">
          <Col md={7}>
            <h1>Welcome to Tims Audit</h1>
            <p>Your trusted partner in Financial consultancy, Book Keeping & Tax Services.</p>
            <ul>
                <h2>What We Do</h2>
                    <li>Book Keeping</li>
                    <li>Tax Services</li>
                    <li>Consultancy</li>
            </ul>
          </Col>
          <Col md={5}>
            <img src={book} alt="Financial Consultancy" />
          </Col>
        </Row>
      </Container>

    </div>
  )
}
export default Landingpage