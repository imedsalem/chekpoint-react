import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Intro_section = () => {
return (
<>
    <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white " style={{backgroundImage: 'url("http://cdm-optics.com/wp-content/uploads/2017/11/photographer.jpg")', height: '90vh'}}>
        <div className="d-flex justify-content-center" style={{marginTop: '40vh'}} >
        <div class="col-6" >
            <h1 className="mb-3 h1 text-danger">Gaspar Manuel Zaldo</h1>
            <p style={{fontSize: '19px'}} className="text-secondary">
            I am a photographer. I like photographe people, happy people. Life stories. I try to do it stylish and beautiful, fellings and emotions.
            </p>
            <button type="button" class="btn btn-outline-danger">Hire Me</button>
        </div>
        </div>
    </div>
</>
)
}

export default Intro_section