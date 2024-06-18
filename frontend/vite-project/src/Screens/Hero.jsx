import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const Hero = () => {
 

return (
    <div id='home' style={{backgroundColor: "#253B85", color: "FFFFFF", marginTop: '80px'}}className="flex flex-col min-h-screen min-w-screen overflow-hidden">
        <div className="custom-container mx-auto" > {/* Custom container for max-width and centering */}
          <Container className="app p-4" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
            <Row>
              <Col className="left-section text-start"> {/* Adjusted for responsiveness */}
                <h1 style={{color: "#F6A200"}}>Welcome to Tim Audits.
  </h1>
  <br></br>
                <p style={{lineHeight: '2'}}> Our Professional philosphy constitutes a strong set of values which is a driving force for excellent performance and delivery by the staff as Tims Audits. The values that provide a common base of ideas that we all share, gfuiding us in our daily actions and decisions are:
  </p>
                <h2 style={{color: "#F6A200"}}><b>What we do</b></h2>
                <Accordion defaultActiveKey="0" flush className="overflow-auto" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                  <Card style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                  <Accordion.Item eventKey="0" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                    <Accordion.Header style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                      <IoIosAdd color="orange" size="2em"/> <b>""</b>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: "#253B85", color: "#FFFFFF",lineHeight: '2' }}>
                  "
                  "
                      <br /><br />
                   
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                    <Accordion.Header style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                      <IoIosAdd color="orange" size="2em"/> <b>Tax Services</b>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: "#253B85", color: "#FFFFFF", lineHeight: '2'}}>
                   ""
  
                      <br /><br />
                   
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                    <Accordion.Header style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                      <IoIosAdd color="orange" size="2em" /><b>Tim Audits</b>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: "#253B85", color: "#FFFFFF", lineHeight: '2'}}>
                 ""
  
                      <br /><br />
                      
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                    <Accordion.Header style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
                      <IoIosAdd color="orange" size="2em" /><b>Consultancy</b>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: "#253B85", color: "#FFFFFF", lineHeight: '2'}}>
                    ""
  
                      <br /><br />
                   
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </Col>
            <br></br>
            <Col className="d-flex justify-content-center align-items-center">
    <div className="right-section">
      <img src={HeroImg} alt="image" style={{ width: '110%', height: '150%' }} />
    </div>
  </Col>
  
          </Row>
        </Container>
      </div>
      </div>
     
  )
}
export default Hero