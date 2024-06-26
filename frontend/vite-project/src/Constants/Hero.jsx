import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosAdd } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

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
  <p>
        At Tims Audits, we believe that accounting is more than just numbers; its about integrity, trust, and excellence. Our culture reflects these core values, shaping every aspect of our work.
      </p>
      <h2>Why We Ventured into This Market Gap:</h2>
      <div className="bullet-points">
        <div className="bullet-point">
          <h3>Quality Over Commercialism:</h3>
          <p>
            Our leadership emphasizes professionalism over profit. We prioritize delivering accurate, reliable financial insights to our clients. Ethical judgments guide our decisions, ensuring transparency and trustworthiness.
          </p>
        </div>
        <div className="bullet-point">
          <h3>Continuous Learning:</h3>
          <p>
            We foster a culture of learning. Our systems encourage knowledge sharing, integration of specialists, and meaningful interactions among auditors. Staying ahead of industry trends allows us to provide cutting-edge solutions.
          </p>
        </div>
        <div className="bullet-point">
          <h3>Market Shift Toward Professionalism:</h3>
          <p>
            Recent regulatory pressures and industry efforts have prompted a cultural shift. We’re committed to maintaining a culture that aligns with the highest professional standards.
          </p>
        </div>
      </div>
      <p>Join us on this journey as we redefine accounting excellence.</p>
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
   
  </Col>
  
          </Row>
        </Container>
      </div>
      </div>
     
  )
}
export default Hero