import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./Hobbys.css";
import Sidenav from "./Sidenav";
import Footer from "./Footer";

function Hobbys() {
  const [color, setColor] = useState("black");

  return (
    <div className="hobbys">
      <Sidenav />

      <Header />

      <button className="colorBtn" onClick={() => setColor("white")}>
        Still to bright?
      </button>

      <div className="hobbyTxt">
        <h2 style={{ color }}> Hobbys </h2>
        <p style={{ color }}>Spel: Barer: Filmer:</p>
      </div>

      <Footer />
    </div>
  );
}

export default Hobbys;
