import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container, Col} from 'react-bootstrap';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { toast } from 'react-toastify';

const Contact = () => {
    const currentYear = new Date().getFullYear();
    const [firstName, setFirstName] = useState('');
    const [Email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [lastName, setLastName] = useState('');

    const [sendMessage, {isLoading}] = useSendMessageMutation();  
    const handleSendMessage = () => {
      sendMessage({firstName, lastName, Email, message})
        .unwrap()
        .then(res => {
          console.log(res);
          toast.success(res.message)
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        })
        .catch(error => {
          console.error(error);
        });
    };
    

  if (isLoading) {
    return <div>please wait...</div>
  }

  return (
    <div style={{backgroundColor: "#253B85" }}  id='contactus'>
    <Container fluid className="app p-4 w-100 mt-5" style={{backgroundColor: "#253B85", padding: "20px"}}>
        <Row>
            <h1 style={{color: "#ffffff", marginBottom: "10px", fontSize: "2em"}}>Contact Us</h1>
        </Row>
        <Row>
            <Col>
    <Form>
        <div  style={{width: "85%"}}>
        <Row>
    <Col className='mb-4 ' >
      <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
    </Col>
    <Col>
      <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
    </Col>
  </Row>
        </div>
  
  <Row  >
<div style={{width: "85%"}}>
<Form.Control value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className='mb-4' />

<Form.Control value={message} onChange={(e) =>setMessage(e.target.value)} placeholder="Message" className='mb-4' />
  <Button className="justify-content-center"
  onClick={handleSendMessage}

   style={{ backgroundColor: "#F6A200",  width: '200px', height: '40px', marginBottom:"10px", textAlign:"center", lineHeight:'2', color:"#ffffff" }}>Send Message</Button>
 </div>
  
  </Row>
</Form>
</Col>
<Col >
<div style={{color: "#000000", backgroundColor: "#ffffff", width: '80%', height: '100%', borderRadius: "2%", marginLeft: "40px", lineHeight: '2', textAlign: 'center'}}>
<p><b>Westlands Nairobi Kenya.</b></p>
<p><b>P.o Box 00100 Nairobi, Kenya.</b></p>
<p><b>+254715061546</b></p>
<p><b>gyeneah@yahoo.uk</b></p>
</div>
</Col>
</Row>

<Row  className='mt- 5 mb-4'>
    <Col class="left-section text-start col"><p   style={{color: "#ffffff", borderRight: '2.5px solid #F6A200', height: '100%',lineHeight:'2'}} >Tim Audits aim to provide its customers with fulfilling services which help them track their financial expenditures thus creating sense of accountability. our services ranges fom from book keping, budget management and control, tax returns.
</p></Col>
    <Col>
<p style={{color: "#ffffff", borderRight: '2px solid #F6A200' , height: '100%'}}>
<span style={{color: '#F6A200', lineHeight:'2'}}><b>Quick Links</b></span><br/>
    <a href="/home.jx" style={{color: "#ffffff", textDecoration: "none", lineHeight:'2'}}>Home</a><br/>
    <a href="/about.jx" style={{color: "#ffffff", textDecoration: "none", lineHeight:'2'}}>About</a><br/>
    <a href="/services" style={{color: "#ffffff", textDecoration: "none", lineHeight:'2'}}>Services</a><br/>
    <a href="/resources" style={{color: "#ffffff", textDecoration: "none", lineHeight:'2'}}>Resources</a>
</p>
</Col>
    <Col>
    <span style={{color: '#F6A200', lineHeight:'2'}}><b>Policies </b></span><br/>
    <p style={{color: "#ffffff", lineHeight:'2' }}> <br/> <b>Privacy Policy</b> <br/><b>Company policy</b> <br/><b>Terms of Use</b></p></Col>
</Row>

<Row>
   
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
<Button style={{ color: "#8a3ab9", backgroundColor: "#253B85",width: '120px', height: '80px', marginRight: '10px', border: 'none' }}>
<FaSquareInstagram style={{ marginRight: '2px' }} /> {/* Instagram icon */}
</Button>

<Button style={{ color: "#0077B5", backgroundColor: "#253B85", width: '120px', height: '80px', marginRight: '10px', border: 'none' }}>
<FaLinkedin style={{ marginRight: '2px' }} /> {/* LinkedIn icon */}
</Button>

<Button style={{ color: "#316FF6", backgroundColor: "#253B85", width: '120px', height: '80px', marginRight: '5px', border: 'none' }}>
<FaFacebook style={{ marginRight: '2px' }} /> {/* Facebook icon */}
</Button>

<Button style={{ color: "", backgroundColor: "#253B85", width: '120px', height: '80px', marginRight: '5px', border: 'none' }}>
<BsTwitterX style={{ marginRight: '1px' }} /> {/* Twitter icon */}
</Button>
</div>


  
</Row>
<footer style={{ backgroundColor: "#253B85", color: "#ffffff", textAlign: "center", padding: "20px 0" }}>
<p>&copy; Tim Audits {currentYear}.</p>
</footer>

    </Container>

    
</div>
)
  
}

export default Contact