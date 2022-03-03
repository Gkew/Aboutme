import React from "react";
import "./Contact.css";
import Header from "./Header";
import Navbar from "./Navbar";
// import Background from './img/cool-background.png'
import useLocalStorage from "use-local-storage";
import Sidenav from "./Sidenav";
// import { useState } from 'react'
// import { send } from 'emailjs-com'

function Contact() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="contact" data-theme={theme}>
      <Sidenav />
      <button style={{ border: "2px solid #352F44" }} onClick={switchTheme}>
        Try the {theme === "light" ? "dark" : "light"} mode?
      </button>
      <Header />

      <h2>Contact</h2>

      <div className="contactIcons">
        <a href="https://github.com/Gkew" target="_blank">
          <i className="fa-brands fa-github fa-2xl fa-bounce"></i>
        </a>
        <br></br>
        <br></br>

        <a href="https://www.linkedin.com/in/emelie-olsson-73088a224/" target="_blank">
          <i class="fa-brands fa-linkedin fa-2xl fa-bounce"></i>
        </a>
        <br></br>
        <br></br>

        <a href="mailto:emelieannaolsson@gmail.com?body=My custom mail body" target="_blank">
          <i class="fa-solid fa-envelope fa-2xl fa-bounce"></i>
        </a>
        <br></br>
        <br></br>

        <a href="tel:+46707519274">
          <i class="fa-solid fa-phone fa-2xl fa-bounce" target="_blank"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
