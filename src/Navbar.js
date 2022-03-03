import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="button1">
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          About
        </Link>
      </div>
      <div className="button2">
        <Link to="/hobbys" style={{ textDecoration: "none", color: "black" }}>
          Hobbys
        </Link>
      </div>
      <div className="button3">
        <Link to="/pictures" style={{ textDecoration: "none", color: "black" }}>
          Pictures
        </Link>
      </div>
      <div className="button4">
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
