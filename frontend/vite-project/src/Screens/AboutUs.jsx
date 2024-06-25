import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import { IoIosAdd } from "react-icons/io";
import Card from 'react-bootstrap/Card';

const TextCard = ({ title, text, limit }) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const toggleTruncation = () => setIsTruncated(!isTruncated);

  
    return (
      <Card className='card-style'>
        <div className='card-image-container'>
          <Card.Img variant="top" alt="First slide" className='card-img' />
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
<Container fluid style={{ minHeight: "60vh" }} className="about-section pb-5 mt-5">
  <Row className="Row-cont">
    <Col className="Col-cont text-center">
      <h1 className="about-title"><b>About Us</b></h1>
      <br />
      <div className="Main-cont-titles">
        <h3 className="mission-title"><b>Our Mission and Vision</b></h3>
      </div>
    </Col>
  </Row>

  <Row className="justify-content-center">
    <Col md={4} className="mr-3 ml-3" style={{ marginRight: "30px" }}>
      <div className="ml-10px">
        <h4 className="left-section"><b>Our Core Values</b></h4>
        <div className="ml-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Accuracy</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <p>We are committed to providing accurate financial information essential for making informed business decisions.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Integrity</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <p>We uphold the highest ethical standards in all our dealings with clients, colleagues, and regulators.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Professionalism</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <p>Everyone at our organization demonstrates professionalism and contributes to our collaborative culture.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Col>
  </Row>
  <Row className="justify-content-center">
    <Col md={4} className="mr-3 ml-3" style={{ marginRight: "30px" }}>
      <div className="ml-10px">
        <h4 className="left-section"><b>Vision</b></h4>
        <div className="ml-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Navigating complexity with clarity</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <ol>
                <li>This vision statement speaks to the firm's ability to navigate complex financial landscapes with clarity, ensuring clients understand their finances</li>
                <li>Caldwell Consulting and Training: “Help accounting teams achieve their dreams and goals via coaching and education.</li>
                <li>Two Roads: We believe its hard to lead alone. In business, as in life, partnership provides wisdom, strength, and direction.</li>
                <li>Hemingway Bailey: In everything that we do that we shall improve our team, clients, and community through our knowledge and guidance</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Integrity</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <li>We uphold the highest ethical standards in all our dealings with clients, colleagues, and regulators.</li>
                <li>Honesty and Truthfulness: Accountants must ensure accuracy and honesty in all financial transactions and reporting.</li>
                <li>Confidentiality: Accountants must maintain the confidentiality of their clients financial information.</li>
                <li>Objectivity and Impartiality: Reporting financial information objectively, without bias, is essential</li>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><IoIosAdd color="orange" size="2em" /><b>Professionalism</b></Accordion.Header>
              <Accordion.Body style={{ lineHeight: '2', backgroundColor: "#253B85", color: "#ffffff" }}>
                <p>Everyone at our organization demonstrates professionalism and contributes to our collaborative culture.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Col>
  </Row>
</Container>
    </div>
  )
}
export default AboutUs