import React from "react";
import {Link} from "react-router-dom";
import "../styles/QR.css";

function QR(){
   return (<div className="center top">
     
     <div className="border ex">
       <div ><canvas className="top">box</canvas></div>
       <div className="top">
       <div id="text-scan" class="margin">Scan and Pay</div>
         <div id="amount"  class="margin black" >&#8377; Amount</div>
       </div>
       <p class="payment-option-upi_group_mono"  className="margin ">group</p>
       <hr/>
       <div class="top-large top-bottom ">
         <Link to="/upi"><input type="submit" value="Enter UPI Id"/></Link>
       </div>
      </div>
       
       
        <div>
        <div class="top  bottom-only ">
          <Link to="/more"><input type="submit" value="More payment Option"/></Link>
       </div>
          
     </div>
     </div>)
}
export default QR;