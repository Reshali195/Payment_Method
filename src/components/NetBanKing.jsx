import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";

function Net(){
   return (
   <div>
     <div className="right-left">
    <div className="bottom">
      <p className="size">purpose of payment
        <Link to="/more" className="right"> Change</Link>
      </p>
    </div> 
       
       <div className="bottom">
       select your UPI app 
       </div>
       <div>
         <div class="box wd">bhim</div>
         <div class="box wd">phone pe</div>
         <div class="box wd">gpay</div>
         <div class="box wd">others</div>
       </div>
       <div className="center">or</div>
       <div>
       Enter UPI ID</div>
       <input type="number"></input>
       <input type="submit" value="verify & pay" id="btn"/>
       
       <h4>how to pay Upi id?</h4>
       <h6>by purchasing you are agree with our terms and condition</h6>
    
     </div>
       <div>
         <input type="sybmit" value="More payment Option"/>
     </div>
     
     
     
     </div>
   )
}
export default Net;
