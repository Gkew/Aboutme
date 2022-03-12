import React from "react";
import "./Pictures.css";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Tekken from "./img/tekken.jpg";
import national from "./img/national.jpg";
import tammi from './img/tammi.jpg'

function Pictures() {


  return (
    <div className="pictures">
      <Sidenav />
      <Header />

      <div className="row">
      <div className="column">
        <img src={national} alt="The national" style={{width: '100%'}}></img>
      </div>
      <div className="column">
        <img src={Tekken} alt="Arkad" style={{width: '100%'}}></img>
      </div>
      <div className="column">
        <img src={tammi} alt="TammiT" style={{width: '100%'}}></img>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default Pictures;
