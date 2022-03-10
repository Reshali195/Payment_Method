import React from "react";
import {Link} from "react-router-dom";

import "../styles/styles.css";
import "../styles/QR.css";

function Upi(){
   return (
     <div>
    <div class="right-left">
    <div class="bottom">
      <p class="size">UPI
       <Link to="/qr" class="right">Change</Link> 
      </p>
    </div> 
       
       <div class="bottom">
       select your UPI app 
       </div>
       <div>
         <div class="box wd">bhim</div>
         <div class="box wd">phone pe</div>
         <div class="box wd">gpay</div>
         <div class="box wd">others</div>
       </div>
       <div class="center">or</div>
       <Link to="/other"><input type="submit" value="OTHER UPI APPS" /></Link>
       
       <h4>How to pay Using UPI</h4>
     </div>
       <div>
         <Link to="/more"><input type="submit" value="More payment Option"/></Link>
     </div>
     </div>
     
       )
}
export default Upi;