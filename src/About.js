import React from "react";
import "./About.css";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Footer from "./Footer";


function About() {

  return (
    <div className="about">
    <Sidenav />
      <Header />

      <div className="aboutTxt" style={{textAlign: 'inherit'}}>
        <h2>Om mig</h2>
        <p>
        {" "}
        Vad kan vi säga om mig?
        <br />
        Jag heter Emelie, är 29 år och bor i Huddinge.
        <br />
        Jag studerar just nu Frontendutveckling med inriktning på webbsäkerhet via JENSEN-Yh och trivs som fisken i vattnet. 
        Jag har sedan barnsben haft ett stort intresse för teknik och det mesta som tillhör datorer och har nu i flera år tänkt söka mig 
        till just programmering. 
        Tanken var egentligen att jag skulle studera vidare inom kemi och läkemedel, men beslutade mig veckan innan kurserna skulle starta 
        att jag antagligen kommer ångra mig resten av mitt liv om jag inte hoppar på att koda. 
        Och simsallabim så är jag nu din student i den här kursen.  
          
          {" "}
        </p>
      </div>

<Footer />
    </div>
  );
}

export default About;
