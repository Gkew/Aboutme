import React from "react";
import "./Pictures.css";
import Navbar from "./Navbar";
import Header from "./Header";
import useLocalStorage from "use-local-storage";
import { useState } from 'react'
import Sidenav from "./Sidenav";

function Pictures() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [cursor, setCursor] = useState('crosshair');
  const changeCursor = () => {
    setCursor(prevState => {
      if(prevState === 'auto'){
        return 'grab';
      }
      return 'auto';
    });
  }


  return (

    <div className="pictures" data-theme={theme}  style={{ cursor: cursor }}>
    <Sidenav />
      <button style={{border: '2px solid #352F44'}} onClick={switchTheme}>
        Try the {theme === "light" ? "dark" : "light"} mode?
      </button>
      <Header />
      <button type="button" value="Change cursor" onClick={changeCursor} style={{ cursor: cursor, border: '2px solid #352F44' }}>Cursor?</button>
      
      <div className="pics">
  <div className="one"></div>
  <div className="two"></div>
  <div className="three"></div>
</div>
      </div>

  );
}

export default Pictures;
