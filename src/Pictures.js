import React from "react";
import "./Pictures.css";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Sidenav from "./Sidenav";
import Tekken from "./img/tekken.jpg";
import national from "./img/national.jpg";

function Pictures() {
  const [cursor, setCursor] = useState("crosshair");
  const changeCursor = () => {
    setCursor((prevState) => {
      if (prevState === "auto") {
        return "grab";
      }
      return "auto";
    });
  };

  return (
    <div className="pictures" style={{ cursor: cursor }}>
      <Sidenav />
      <Header />
      <button
        type="button"
        value="Change cursor"
        onClick={changeCursor}
        style={{ cursor: cursor }}
      >
        Cursor?
      </button>

      <div className="pics">
        <div className="one">
          <img style={{ width: "100%", height: "100%" }} src={Tekken} />
        </div>
        <div className="two">
          <img style={{ width: "100%", height: "100%" }} src={national} />
        </div>
        <div className="three">
          <img style={{ width: "100%", height: "100%" }} src={national} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pictures;
