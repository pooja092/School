import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {BsPhone} from "react-icons/bs"


// import {BsInstagram} from "react-icons/bs"
import './login.css'

const Login = () => {
  return (

    <>
    <Container className="location">
        <Row >
            <Col sm-3 >
           
            <div className='locationicon'> <GoLocation className='circleicon'/> </div>
        <h3 className='text-location'> Location:</h3> 
       <p className='text-passage'>A108 Adam Street,Moradabad,NY 535022</p>

       <div className='locationicon'> <AiOutlineMail className='circleicon'/> </div>
        <h3 className='text-location'> Email:</h3> 
       <p className='text-passage'>info@example.com</p>

       <div className='locationicon'> <BsPhone className='circleicon'/> </div>
        <h3 className='text-location'> Call:</h3> 
       <p className='text-passage'>+1589554855s</p>

       {/* <h3>Email</h3>
       <p>info@example.com</p>
      
       <h3>Call</h3>
       <p>+1589554855s</p> */}
       </Col>



       <Col sm-9>
<input className="formname" placeholder='Your Name' />
<input className="formmail" placeholder='Your Email' /> <br />
<input  className="formsbj" placeholder='Subject' />

<textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Message'></textarea>

<button className="sendbtn"> Send Message </button>


            </Col>
        </Row>
    </Container>
    




    </>
  )
}

export default Login