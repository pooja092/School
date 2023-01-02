import React from 'react'
import './count.css'

const Count = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row Rowcolor">
      <div className="col-lg-3 col-6 no ">
        <p className="Count">1232</p>
        <p className="Events">Students</p>
      </div>
      <div className="col-lg-3 col-6 no">
        <p className="Count">64</p>
        <p className="Events">Courses</p>
      </div>
      <div className="col-lg-3 col-6 no">
        <p className="Count">42</p>
        <p className="Events">Events</p>
      </div>
      <div className="col-sm-3 col-6 no">
        <p className="Count">15</p>
        <p className="Events">Trainers</p>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Count