import React from "react";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Sidenav";

function Contact() {
  return (
    <div className="contact">
      <Sidenav />
      <Header />

      <h2>Contact</h2>

      <div className="contactIcons">
        <a href="https://github.com/Gkew" target="_blank">
          <i
            className="fa-brands fa-github fa-2xl fa-bounce"
            style={{ color: "black" }}
          ></i>
        </a>

        <a
          href="https://www.linkedin.com/in/emelie-olsson-73088a224/"
          target="_blank"
        >
          <i
            class="fa-brands fa-linkedin fa-2xl fa-bounce"
            style={{ color: "black" }}
          ></i>
        </a>

        <a
          href="mailto:emelieannaolsson@gmail.com?body=My custom mail body"
          target="_blank"
        >
          <i
            class="fa-solid fa-envelope fa-2xl fa-bounce"
            style={{ color: "black" }}
          ></i>
        </a>

        <a href="tel:+46707519274">
          <i
            class="fa-solid fa-phone fa-2xl fa-bounce"
            target="_blank"
            style={{ color: "black" }}
          ></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
