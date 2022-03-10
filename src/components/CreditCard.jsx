import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";

function Credit(){
   return (<div>
     <div>
       <p class="size">Credit/Debit Card
        <Link to="/more"><a class="right" >Change</a></Link></p>
       </div>
       <div class="bottom">
        <p>Card Number</p>
        <input type="number" placeholder="Card Number" required/>
       </div>
       <div>expiry</div>
      <div class="box ex">MM</div>
      <div class="box ex">YY</div>  
     <div class="box ex">CVV</div>  
       <input type="submit" value="pay" id="btn"/>
     <h6 class="center">by purchasing ypu are agree with our term& service</h6>
     </div>)
}
export default Credit;