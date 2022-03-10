import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "../styles/QR.css";
import "../styles/styles.css";

import Second from "./DetailsTop";
import Mid from "./DetailsMid";
import QR from "./QR";
import Conve from "./Convenience";
import Next from "./Next";
import Upi from "./UPI";
import More from "./MoreOption"
import Credit from "./CreditCard"
import Net from "./NetBanKing"
import Other from "./OtherUpi"

function QRFull(){
   return (
     
    <Router >
     <Second />
     <Conve />
      <hr/>
       <div className="size black top-bottom-large bold small">
         <span >Total</span>
         <span className="right"><span class="rupee-container " data-testid="rupee-value-container">500</span></span>
       </div>
     <Mid/>
    <div>
      <Next />
      <Switch>
        <Route path="/qr" component={QR} />
        <Route path="/upi" component={Upi} />
        <Route path="/more" component={More} />
        <Route path="/credit" component={Credit} />
        <Route path="/net" component={Net} />
        <Route path="/other" component={Other} />
      </Switch>
    </div>
     
     
    
      </Router>
     

   )
}
export default QRFull;