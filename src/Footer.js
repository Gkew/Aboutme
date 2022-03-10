import React from "react";
import "./Footer.css";
import { useState } from 'react'

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  const admin = 'Emelie Olsson';
  const [extraInfo, setExtarInfo] = useState(false);
  
    function handleClick() {
      setExtarInfo(!extraInfo);
    }
  
    return (
      <footer className="footer">
        <div className="section1">
          <small>Copyright: {year}  by <i>{admin}</i> </small>
        </div>
        <br />

        {extraInfo && (
          <div className="secret">
          <div className="section2">
          <small>    <a href="tel:+46707519274">
          <i class="fa-solid fa-phone fa-2xl" style={{color: 'black'}}></i>
        </a></small></div>
          
          <div className="section3">
          <small>   <a href="mailto:emelieannaolsson@gmail.com?body=My custom mail body" target="_blank">
          <i class="fa-solid fa-envelope fa-2xl" style={{color: 'black'}}></i>
        </a></small></div>
          </div>
        )}
        <button onClick={handleClick}>More info</button>
      </footer>
    );
  };
  
  export default Footer;