import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav">


      <Link to="/about">About</Link>
      <Link to="/pictures">Pictures</Link>
      <Link to="/about"><div className="logo">EMMI</div></Link>
      <Link to="/contact">Contact</Link>
      <Link to="/weather">App</Link>
    </div>
  );
}

export default Sidenav;
