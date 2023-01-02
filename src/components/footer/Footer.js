import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <>
    <div className="container-fluid footer">
    <div className="container  footer">
      <div className="row">

        <div className="col-sm-3 mt-5">
          <h4>Mentor</h4>
          <p>A108 Adam Street
            <br/>
            New York, Ny 535022
            <br/>
            United states
          </p>
          <h6>phone:1234567890</h6>
          <h6>Email:info@example.com</h6>
        </div>


        <div className="col-sm-3 mt-5">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>

            <li> About us</li>
            <li>Service</li>
            <li>Terms of Service</li>
            <li>Privacy policy</li>
          </ul>
        </div>




        <div className="col-sm-3  mt-5">
          <h4>Our Services</h4>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>

          </ul>
        </div>


        <div className="col-sm-3 mt-5">
          <h4>Join Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          
         <button className="btn btn-outline-success subscribe-btn" type="submit"><mark
                style={{backgroundColor: "orange", borderRadius: "100px",padding:"6px"}}>subscribe</mark></button>
        </div>

      </div>
    </div>
  </div>

    
    </>
  )
}

export default Footer