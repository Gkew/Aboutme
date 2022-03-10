import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="dropdown">
        <div className="dropbtn">
          <p>
            {" "}
            The Code <i class="arrow down"></i>
          </p>{" "}
        </div>
        <div className="dropdown-content">
          <a href="https://github.com/Gkew/Aboutme" target="_blank">
            Repository
          </a>

        </div>
      </div>

      <Link to="/about">About</Link>

      <Link to="/hobbys">Hobbys</Link>
      <Link to="/about"><div className="logo">EMMI</div></Link>
      <Link to="/pictures">Pictures</Link>

      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Sidenav;
