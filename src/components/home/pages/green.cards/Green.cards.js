import React from 'react'
import './greencards.css'
import {BsInstagram} from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs"

const Green = () => {
    return (
        <>
        
  <div className="container-fluid">
    <div className="row mentor">
      <div className="col-sm-4">
        <div className="card text">
          <div className="card-body">

            <h1 className="card-title" style={{color:"white"}}> Why Choose Mentor?</h1>

            <p className="card-text ctext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officia, itaque
              laborum
              doloribus, optio eveniet dolor nihil veritatis corporis modi ipsam natus quisquam neque ducimus minima
              maiores distinctio quasi temporibus?</p>
            <button className="learn">Learn More </button>
          </div>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="card scard ">
          <div className="rounded">
          <BsInstagram className="icon"/>
          </div>
          <div className="card-body">
            <h4 className="card-title corporis"> Corporis voluptates sit</h4>
            <p className='corporis'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, ipsa incidunt aliquam conseq
              quisquam id?</p>
          </div>
        </div>
      </div>
 


    <div className="col-sm-2">
      <div className="card scard ">
        <div className="rounded">
        <AiOutlineTwitter className="icon"/>
        </div>
        <div className="card-body">
          <h4 className="card-title ullamco">Ullamco laboris </h4>
          <p className='ullamco'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, ipsa incidunt aliquam conseq
            quisquam id?</p>
        </div>
      </div>
    </div>
    <div className="col-sm-2">
      <div className="card scard mt-10px">
        <div className="rounded">
        <BsWhatsapp className="icon"/>
        </div>
        <div className="card-body">
          <h4 className="card-title labore">Labore consequatu</h4>
          <p className='labore'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, ipsa incidunt aliquam conseq
            quisquam id?</p>
        </div>

      </div>
    </div>
    </div>
  </div>






        </>
    )
}

export default Green