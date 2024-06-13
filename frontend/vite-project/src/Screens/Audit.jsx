import React from 'react'
import Header from '../Constants/Header';
import '../App.css';
import { Container } from 'react-bootstrap';


import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Audit = () => {
 
}
return (
    <>
    <Container fluid style={{ backgroundColor: '#253B85' }}>
    <Container  className='mt-5'style={{ backgroundColor: '#253B85', color: 'white', width: '100%' }}>
      <div className="blogheader">
        <Header/>
      </div>
      <div style={{ marginTop: '60px', width: '100%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center',fontSize:'40px' ,color:'#F6A200'}}>Ensuring Integrity: The Crucial Role of Audit Services in Business Success</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <img class="image-link" src="../src/images/auditing.jpg" alt="Description of the image" />
</div>


      <div className="content-container" style={{}}>
        <div className="content-text mt-5" style={{textAlign:'left'}}>
          <p className='blogtitle'>The Business Landscape</p>
          <p></p>
          <p className='blogtitle'>The Role of Audit Services</p>
          <p></p>
          <p className='blogtitle'>Ensuring Financial Accuracy</p>
          <p></p>
          <p className='blogtitle'><b>Driving Business Success</b></p>
          <p></p>
          <p className='blogtitle'>Increasing Stakeholder Confidence</p>
          <p></p>
          <p className='blogtitle'>Mitigating Risks</p>
          <p></p>
          <p className='blogtitle'>Business Planning and Strategy</p>
          <p></p>
          <p className='blogtitle'>Conclusion</p>
          <p></p>


        </div>
      </div>
      <div className='ending'>

      </div>
    </Container>
   
         
    
  </Container>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
             
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <div style={{ marginRight: '10px' }}>
                <a href="/BalancingBooks" style={{ color: '#F6A200', textDecoration: 'none' }}>
                  <FaArrowLeft /> 
                </a>
              </div>
              <div>
                <a href="Itconsultancy" style={{ color: '#F6A200', textDecoration: 'none' }}>
                  <FaArrowRight />
                </a>
              </div>
            </div>
             
           </div>
  <div className='mt-5'> < ContactUs/></div>
  </>
  )
export default Audit