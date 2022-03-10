import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import "./styles/styles.css";

import First from "./components/HomePage"
import Detail from "./components/Details";
import QRfull from "./components/QRFull";
import Open from "./components/Open";



export default function App() {
  return (
    <Router >
      <Open />
      <Switch>
      <Route path="/home" component={First} />
      <Route path="/details" component={Detail} />
      <Route path="/QR" component={QRfull} />
    </Switch>
    </Router>
  );
}
