import React from "react";
import {Link} from "react-router-dom";

import "../styles/styles.css";
import "../styles/QR.css";

function Other(){
   return (
     <div>
    <div class="right-left ">
    <div class="bottom">
      <p class="size">UPI
       <Link to="/qr" className="right">Change</Link> 
      </p>
    </div> 
       
       <div class="bottom">
       select your UPI App
       <input type="select"/>
       </div>
      
       <div>
         Enter UPI ID
         <input type="number" />
       </div>
      
      <input type="submit" value="verify& pay" id="btn"/>
       
       <h4>How to pay Using UPI</h4>
     </div>
       <div>
         <Link to="/more"><input type="submit" value="More payment Option"/></Link>
     </div>
     </div>
     
       )
}
export default Other;
