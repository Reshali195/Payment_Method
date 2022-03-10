import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";

function More(){
   return (<div>
     <div>
      <Link to="/qr"><input type="submit" value="Scan UPI QR and Pay" /></Link> 
       </div>
       <div className="right-left bottom">
         <div>More Payment Options</div>
         <Link to="/credit"><input type="submit" value="Credit/Debit card" /></Link>
         <Link to="net"><input type="submit" value="Net Banking" /></Link>
         <input type="submit" value="Wallets" />
         <input type="submit" value="Pay Latter" />
       </div>
     
     
     </div>)
}
export default More;
