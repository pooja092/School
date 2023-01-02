import React from 'react'
import './image.css'
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
const ImageCard = () => {
    return (
        <>


            <div className="container-fluid bg-light">
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-sm-4 mt-5 imgcol">
                            <div className="card" style={{ width: "22rem" }}>
                                <img src="img/boy.jpg" className="card-img-top" style={{ height: "400px" }} alt="..." />
                                <div className="card-body">
                                    <h4 style={{ textAlign: "center", color: "gray" }} >Walter White</h4>
                                    <p style={{ textAlign: "center", color: "gray", fontSize: "small" }}>Web Development</p>
                                    <p style={{ textAlign: "center" }}>Some quick example text to build on the card title and make up the bulk of
                                        the card's
                                        content.</p>

                                    <center style={{color:"gray"}} >                                        
                                        <BsInstagram />
                                        <AiOutlineTwitter />
                                        <BsLinkedin/>
                                        <BsFacebook/>
                                        </center>


                                </div>
                            </div>
                        </div>



                        <div className="col-sm-4 mt-5 gh">
                            <div className="card" style={{ width: "22rem" }}>
                                <img src="img/girl.jpg"  style={{height:"400px"}} alt="..." />
                                <div className="card-body">
                                    <h4 style={{ textAlign: "center", color: "gray" }}>Walter White</h4>
                                    <p style={{ textAlign: "center", color: "gray", fontSize: "small" }}>Web Development</p>
                                    <p style={{ textAlign: "center" }}>Some quick example text to build on the card title and make up the bulk of
                                        the card's
                                        content.</p>
                                        <center style={{color:"gray"}}>  
                                        <BsInstagram />
                                        <AiOutlineTwitter />
                                        <BsLinkedin/>
                                        <BsFacebook/>
                                        </center>

                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4 mt-5 gh">
                            <div className="card " style={{ width: "22rem" }}>
                                <img src="img/men.jpg" style={{height:"400px"}}alt="..." />
                                <div className="card-body">
                                    <h4 style={{ textAlign: "center", color: "gray" }}>Walter White</h4>
                                    <p style={{ textAlign: "center", color: "gray", fontSize: "small" }}>Web Development</p>
                                    <p style={{ textAlign: "center" }}>Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's
                                        content.</p>

                                        <center style={{color:"gray",paddingInline:"5px"}}>  
                                        <BsInstagram />
                                        <AiOutlineTwitter />
                                        <BsLinkedin/>
                                        <BsFacebook/>
                                        </center>

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>









        </>
    )
}

export default ImageCard