import React, { useState } from 'react'
import Header from './Header';
import Sidenav from './Sidenav';
import './Weather.css'
import Footer from './Footer';
const api = {
    key: 'de17d6f06f5a17f66acb13e4382db709',
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [info, setInfo] = useState(false);
    function handleClick () {
        setInfo(!info);
    }

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(weather);
            });
        }
    }
    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()]; //Ger en siffra mellan 0-6 för dagarna
        let date = d.getDate(); //Ger datumet mellan 1-31
        let month = months[d.getMonth()];  //Ger en siffra mellan 0-11, dvs månaderna
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    } 


  return (
      <>
      <Sidenav />
      <Header />
      <button className="tutorialBtn" onClick={handleClick}>Weather Tutorial</button>
      {info && (
          <div className='link-content'>
          <a href="https://www.youtube.com/watch?v=GuA0_Z1llYU">Build a Weather App in React JS</a>
          </div>
      )}
    <div className={
        (typeof weather.main != "undefined") 
        ? ((weather.main.temp > 16)
         ? 'weather warm' 
         : 'weather') 
         : 'weather'}>
         
    <main>
  <div className='search-box'>
  <input 
  type="text"
  className='search-bar'
  placeholder='Search..'
  onChange={e => setQuery(e.target.value)}
  value={query}
  onKeyPress={search}
  />
  </div>
  {(typeof weather.main != "undefined") ? (
      <div>
  <div className='location-box'>
  <div className='location'>{weather.name}, {weather.sys.country}</div>
  <div className='date'>{dateBuilder(new Date())}</div>
  </div>

  <div className='weather-box'>
  <div className='temp'>{Math.round(weather.main.temp)}°c</div> 
  <div className='weather-type'>{weather.weather[0].main}</div>
  </div>
  </div>
  ) : ('')}
    </main>
    </div>

    <Footer />
    </>
  )
}

export default Weather