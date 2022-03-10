import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";

function Second(){
   return (
    <div className="Comment">
      <div>
        <p className="size">purpose of payment
       <Link to="/home"><a class="right">Change</a></Link> </p>
        <div className="bottom black">Instapay</div>
       </div>
       
       <div className="size black bottom small">
         <span >Amount</span>
         <span className="right"><span class="rupee-container " data-testid="rupee-value-container">500</span></span>
       </div>
    </div>
     
  );
}
export default Second;