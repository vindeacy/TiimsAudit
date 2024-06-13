import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const Resources = () => {

return (
    <div  id='resources'>
    <div style={{backgroundColor: "#253B85", color: "FFFFFF"}}>
        <Container fluid className=" blogresoursces-container app p-4 w-100 mt-5" style={{ backgroundColor: "#253B85", color: "#FFFFFF" }}>
        <Row className='mt-5'>
  <Col className="text-center">
    <h1 className='heading '>Blogs and Resources</h1>
  </Col>
</Row>
      <Row className="text-start mt-5">
        <Col>
        <Card className='cardblog' style={{ height: "100%" }}>
          <div><Card.Img  className ='card img'variant="top" src='../src/images/taxes.webp' alt="First slide"/></div>
            <Card.Body>
              <Card.Title>Navigating the Complexities</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">The Importance of Financial and Tax</Card.Subtitle>
              <Card.Link href="/FinanceandTax">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='cardblog' style={{ height: "100%" }}>
          <div><Card.Img  className ='card img'variant="top" src='../src/images/balancing.jpg' alt="First slide"/></div>
            <Card.Body>
              <Card.Title>Balancing the Books</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">The Impact of Accounting and Credit Services on Business Success</Card.Subtitle>
              <Card.Link href="/BalancingBooks">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='cardblog' style={{ height: "100%" }}>
          <div><Card.Img  className ='card img'variant="top" src='../src/images/auditing.jpg' alt="First slide"/></div>
            <Card.Body>
              <Card.Title>Ensuring Integrity</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">The Crucial Role of Audit Services in Business Success</Card.Subtitle>
              <Card.Link href="/Audit">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</div>
<div style={{ backgroundColor: "#253B85",  padding: "20px"}}>
<h1 className="container-testimonial left-section text-center" style={{ color: 'white' }}>Testimonials</h1>
<Container className="testimony-container app p-4 w-100" style={{ backgroundColor: "#FFFFFF", borderRadius: "10px",color:'black',height:'30vh' , borderColor: '2px solid #F6A200' }}>
  <Carousel indicators={true} controls={true}>
    <Carousel.Item>
      <div className="testimonial-container d-flex flex-column align-items-center">
        <div className="image-container-blog">
          <img
            src="../src/images/woman.png"
            alt="Testimonial Image"
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-info text-center">
          <p className="testimonial-name"><b>Jamil McAlaka</b></p>
          <p className="testimonial-review" style={{lineHeight:'2'}}>
           
          </p>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="testimonial-container d-flex flex-column align-items-center">
        <div className="image-container-blog">
          <img
            src="../src/images/man1.png"
            alt="Testimonial Image"
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-info text-center">
          <p className="testimonial-name"><b>Bruce Onduru</b></p>
          <p className="testimonial-review" style={{lineHeight:'2'}}>
            
          </p>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="testimonial-container d-flex flex-column align-items-center">
        <div className="image-container-blog">
          <img
            src="../src/images/man2.png"
            alt="Testimonial Image"
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-info text-center">
          <p className="testimonial-name"><b>Mary Raget</b></p>
          <p className="testimonial-review" style={{lineHeight:'2'}}>
            
          </p>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</Container>
      </div>

      <Accordion  defaultActiveKey="0" flush >
        <Card style={{backgroundColor: "#253B85", color: "#FFFFFF"}}>
        <Accordion.Item  eventKey="#0" >
          <Accordion.Header>What accounting services do you offer?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85",color: "#FFFFFF", lineheight:'2'}}>
          <p></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="#1">
          <Accordion.Header>How can I ensure compliance with tax regulations?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
          <p></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="#2">
          <Accordion.Header>What auditing services do you provide?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
         <p></p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="#4">
          <Accordion.Header>What tax planning strategies do you recommend?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
         <p></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="#5">
          <Accordion.Header>How do you ensure the accuracy of your audits?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
          <p></p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="#7">
          <Accordion.Header>How can your accounting services help me manage my finances?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
          <p></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="#8">
          <Accordion.Header>What types of audits do you perform?</Accordion.Header>
          <Accordion.Body style={{backgroundColor:"#253B85", color: "#FFFFFF", lineheight:'2'}}>
          
          </Accordion.Body>
        </Accordion.Item>
        
        </Card>
      </Accordion>
   </div>  
)    
   
}
export default Resources