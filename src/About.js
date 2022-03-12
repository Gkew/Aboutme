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

      <div className="aboutTxt">
        <h2>Om mig</h2>
        <p>
          {" "}
          Jag heter Emelie, 29 år är bosatt i Huddinge. Jag är studierepresentant för FWK21 och
          studerar just nu min andra termin inom Frontendutveckling med
          inrikting säkerhet och trivs verkligen jättebra.
          <br />
          Jag har alltid haft ett sort intresse för teknik och It och har under
          flera år tänk mig börja med just programmering. Innan jag började i
          FWK21 så hade jag pluggat upp en del betyg inom kemi och
          naturkunskapsämnen för att byta bana till just medicin och kemi, men
          bestämde mig veckan innan kurstart att det här var det jag alltid
          velat göra och jag antagligen skulle ångra mig om jag inte hoppade på
          det nu.
          <br />
          <br />
          När jag inte försöker mig på att programmera så är mina intressen spel, gym, gå på spelningar och hänga med mina vänner.
          <br />
          Det blir allt från uno till psVR och är smått stammis på akraden på HEYsthlm.
         
          <br />

          <br />
          <br />
          <strong>Random facts</strong>
          <div className="content">
            
            <div className="box2">
              <small>
                Arbetat med allt ifrån restaurangansvarig till resurspedagog,
                Proddass för Stockholmskulturfestival och inspelningsassistent
                på SvT.
                <br />
                Även en hel del inom event, från Blixten&Co till
                evenemangssäkerhet.
              </small>
            </div>
            <div className="box3">
              <small>
                Varit på en del roliga ställen så som Morfar Ginko & Papa
                rayray,
                <br />
                Ramblas Hornstull, och har även varit med att starta upp en
                diy-bar i hornstull som hette Cosmpolite där jag och en kompis
                körde en retro spelklubb med en hel drös gamla konsoller på
                obligatorisk tjocktv.
              </small>
            </div>
          </div>{" "}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;
