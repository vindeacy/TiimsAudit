import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Ellipse1 from '../Images/Ellipse1.svg'
import Ellipse2 from '../Images/Ellipse2.svg'
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import { IoIosAdd } from "react-icons/io";
import './aboutus.css';
import Card from 'react-bootstrap/Card';

const TextCard = ({ title, text, limit }) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const toggleTruncation = () => setIsTruncated(!isTruncated);
  
    return (
      <Card className='card-style'>
        <div className='card-image-container'>
          <Card.Img variant="top" src={Ellipse1} alt="First slide" className='card-img' />
        </div>
        <Card.Body>
          <Card.Title style={{margin: 0, padding: 0}}>{title}</Card.Title>
          <div className="card-text">
            <hr style={{borderTop: '3px solid #F6A200'}} />
            {isTruncated ? (
              <p>
                {text }
              </p>
            ) : (
              <p>
                {text}
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  };

const AboutUs = () => {
    const longText = "";
  const fullText = [
                    ];
  const comprehensiveText = [''
                                ];

  

return (
    <div  id='aboutus'>
          <Container  fluid style= {{minHeight:"60vh"}} className="Main-cont pb-5 mt-5">
        <Row className='Row-cont'>
          <Col className='Col-cont text-center'>
            <h1 style={{color:"#F6A200"}}><b>About US</b></h1>
            <br></br>
            <div className = 'Main-cont-titles'>
              <h3 style={{color:'#ffffff'}}><b>Our Mission and Vision</b> </h3>
            </div>
          </Col>
        </Row>

   <Row className="justify-content-center">
  <Col md={4} className="mr-3 ml-3" style={{marginRight: "30px"}}>
    <div className='ml-10px'>
      <h4 className="  left-section text-start"><b>Our Core Values</b></h4>
      <div className='ml-5'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><IoIosAdd color="orange" size="2em"/><b>Innovation</b></Accordion.Header>
            <Accordion.Body style={{lineHeight:'2', backgroundColor:"#253B85", color:"#ffffff"}}>
             <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><IoIosAdd color="orange" size="2em"/><b>Integrity</b></Accordion.Header>
            <Accordion.Body style={{lineHeight:'2', backgroundColor:"#253B85", color:"#ffffff"}}>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> <IoIosAdd color="orange" size="2em"/><b>Collaboration</b></Accordion.Header>
            <Accordion.Body style={{lineHeight:'2', backgroundColor:"#253B85", color:"#ffffff"}}>
             <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><IoIosAdd color="orange" size="2em"/><b>Excellence</b></Accordion.Header>
            <Accordion.Body style={{lineHeight:'2', backgroundColor:"#253B85", color:"#ffffff"}}>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header> <IoIosAdd color="orange" size="2em"/> <b>Adaptability </b></Accordion.Header>
            <Accordion.Body style={{lineHeight:'2', backgroundColor:"#253B85", color:"#ffffff"}}>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  </Col>
  <Col md={4} className="mr-4 ml-3" style={{backgroundColor: "#253B85", borderRadius:"10px"}}>
  <Carousel pause='hover' className='bg mt-2 mb-3' indicators={false} nextIcon={<span className="carousel-control-next-icon" />} prevIcon={<span className="carousel-control-prev-icon" />}>
    <Carousel.Item className='carousel'>
      <div className="carouselDiv">
        <TextCard className title="Vision" text={longText} />
      </div>
    </Carousel.Item>

    <Carousel.Item className='carousel'>
      <div className="carouselDiv">
        <TextCard title="Mission" style={{margin:0, padding:10,backgroundColor:"#253B85", color:"#ffffff"}} text={detailedText} />
      </div>
    </Carousel.Item>

    <Carousel.Item className='carousel'>
      <div className="carouselDiv">
        <TextCard title="Objectives" style={{margin:0, padding:10,backgroundColor:"#253B85", color:"#ffffff"}}  text={fullText.join(' ')}/>
      </div>
    </Carousel.Item>
    <Carousel.Item className='carousel'>
      <div className="carouselDiv">
        <TextCard title="Strategic Objectives" style={{margin:0, padding:10,backgroundColor:"#253B85", color:"#ffffff"}}  text={comprehensiveText.join(' ')} />
      </div>
    </Carousel.Item>
  </Carousel>
</Col>
</Row>
</Container>
    </div>
  )
}
export default AboutUs