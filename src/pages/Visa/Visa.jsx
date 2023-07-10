import React from "react";
import './Visa.css'
import Box from '@mui/material/Box';

function Visa() {
  return (
    <div className="visa_wrapper">
      <Box height={100}/>
      <div className="container3">
        <div className="demo-flex-spacer">
          <h1>VISA DETAILS</h1>
        </div>
        <div className="webflow-style-input">
          <input id="in" type="text" placeholder="Your Country's Name" />
          <div className="btn">
            <button type="submit" onclick="myFunction()">
              <i className="icon ion-android-arrow-forward">Submit</i>
            </button>
          </div>
        </div>
        <div className="demo-flex-spacer"></div>
      </div>
    </div>
  );
}

export default Visa;
