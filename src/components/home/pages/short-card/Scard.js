import React from 'react'
import './scard.css'
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineUser} from "react-icons/hi";
import {BsCardImage} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineFileImage } from "react-icons/ai"
import {FaGoogle } from "react-icons/fa"
import {FaRegUserCircle} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"
import {FiAnchor} from "react-icons/fi"
import {FiPhoneCall} from "react-icons/fi"
import {FaPagelines} from "react-icons/fa"
import {BiRegistered}from "react-icons/bi"

const Scard = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row ">
      <div className="col-sm-3 mt-3">


        <div className="card box-card">
          <div className="card-body icon-body"> <BsEmojiSmile 
          style={{color:"red",fontSize:"3rem",padding:"10px", marginLeft:"-20px"}} />Lorem Ipsum</div>
        </div>
      </div>


      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <HiOutlineUser 
           style={{color:"blue",fontSize:"3rem",padding:"10px", marginLeft:"-20px"}}/>Dolar  Sitema</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <BsCardImage  
          style={{color:"royalblue",fontSize:"3rem",padding:"10px", marginLeft:"-20px"}} /> Sed  perspiciatis</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <BsInstagram 
              style={{color:"slateblue",fontSize:"3rem",padding:"10px", marginLeft:"-20px"}}/>Magni Dolores</div>
        </div>

      </div>

      <div className="col-sm-3 mt-3">


        <div className="card box-card">
          <div className="card-body icon-body"> <AiOutlineFileImage 
            style={{color:"rgb(20, 163, 219)", fontSize:"3rem",padding:"10px", marginLeft:"-20px"}}/>Nemo Enim</div>
        </div>
      </div>


      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <FaGoogle
              style={{color:"rgb(25, 234, 25)", fontSize:"3rem",padding:"10px", marginLeft:"-20px"}}/>Eiusmod Tempor</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <FaRegUserCircle 
              style= {{color:"slateblue", fontSize: "3rem",padding:"10px", marginLeft:"-20px"}}/>Midela Teren</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <ImWhatsapp
           style= {{color:"blue", fontSize: "3rem",padding:"10px", marginLeft:"-20px"}}/>PiraNeve</div>
        </div>

      </div>

      <div className="col-sm-3 mt-3">


        <div className="card box-card">
          <div className="card-body icon-body"> <FiAnchor 
              style= {{color:"rgb(21, 242, 242)", fontSize: "3rem",padding:"10px", marginLeft:"-20px" }}/>Dirada Pack</div>
        </div>
      </div>


      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <FiPhoneCall 
              style= {{color:"blueviolet", fontSize: "3rem",padding:"10px", marginLeft:"-20px"}} />Moton Ideal</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <FaPagelines  
          style={{color:"green", fontSize: "3rem",padding:"10px", marginLeft:"-20px"}}/>Verdo Park</div>
        </div>
      </div>
      <div className="col-sm-3 mt-3">
        <div className="card box-card">
          <div className="card-body icon-body"> <BiRegistered 
              style= {{color:"rgb(210, 34, 139)", fontSize: "3rem",padding:"10px", marginLeft:"-20px"}}/>Flavor Nivelanda</div>
        </div>
      </div>
    </div>
  </div>



    
    </>
  )
}

export default Scard