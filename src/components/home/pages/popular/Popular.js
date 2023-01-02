import React from 'react'
import './popular.css'
import {FaPagelines} from "react-icons/fa"
import {HiOutlineUser} from "react-icons/hi";
const Popular = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container bg-light">
                    <div className="row courserow">
                        <h5 className="coursehead">Courses
                        </h5>
                        <h3 className="pcourse">Popular Courses</h3>

                        <div className="col-sm-4 mt-5">
                            <div className="card">
                                <img className="card-img-top cardimg" src="img/i1.jpg" alt="Card image" />
                                <div className="card-body body">

                                    <button className="btn btn-success btn-web">Web development</button><span>
                                        <p className="pcount">$169</p>
                                    </span>
                                </div>
                                <h4 className="card-title title-website">Website Design</h4>

                                <p className="card-text card-text-some">Some example text some example text. John Doe is an architect
                                    and engineer</p>
                                <hr style={{marginTop:"4px"}}/>

                                <div>
                                    <img className="roundimg" src= "img/boy.jpg"/> Antonio  
                                   
                                    <span className="icon25">
                                    <FaPagelines/>25  <HiOutlineUser/>50
                                </span>
                                </div>
                            </div>
                        </div>  




                        <div className="col-sm-4 mt-5">
                            <div className="card">
                                <img className="card-img-top cardimg" src="img/mix.jpg" alt="Card image" />
                                <div className="card-body body">

                                    <button className="btn btn-success btn-web">Web development</button><span>
                                        <p className="pcount">$169</p>
                                    </span>
                                </div>
                                <h4 className="card-title title-website">Website Design</h4>

                                <p className="card-text card-text-some">Some example text some example text. John Doe is an architect
                                    and engineer</p>
                                <hr style={{marginTop:"4px"}}/>

                                <div>
                                    <img className="roundimg" src= "img/girl.jpg"/> Lana
                                   
                                    <span className="icon25">
                                    <FaPagelines/>25  <HiOutlineUser/>50
                                </span>
                                </div>
                            </div>
                        </div>  






                        <div className="col-sm-4 mt-5">
                            <div className="card">
                                <img className="card-img-top cardimg" src="img/conversation.jpg" alt="Card image" />
                                <div className="card-body body">

                                    <button className="btn btn-success btn-web">Web development</button><span>
                                        <p className="pcount">$169</p>
                                    </span>
                                </div>
                                <h4 className="card-title title-website">Website Design</h4>

                                <p className="card-text card-text-some">Some example text some example text. John Doe is an architect
                                    and engineer</p>
                                <hr style={{marginTop:"4px"}}/>

                                <div>
                                    <img className="roundimg" src= "img/men.jpg"/> Brandon
                                   
                                    <span className="icon25">
                                    <FaPagelines/>25  <HiOutlineUser/>50
                                </span>
                                </div>
                            </div>
                        </div>  

                   </div>
                </div>
            </div>





        </>


)

}

export default Popular