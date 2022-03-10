import React, { useState, useEffect } from "react";
import "../styles/styles.css";

import Second from "./DetailsTop";
import Mid from "./DetailsMid";
import Third from "./DetailsBottom";

function Detail(props){

   return (
     
    <div >
       
      <Second />
       <Mid />
       <Third />
    </div>
     
  );
}
export default Detail;