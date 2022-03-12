import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Pictures from "./Pictures";
import Hobbys from "./Hobbys";
import Weather from './Weather'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/pictures" element={<Pictures />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
