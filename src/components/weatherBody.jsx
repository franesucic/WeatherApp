import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import sunce from '../assets/sunce.png'
import oblak from '../assets/oblak.png'
import kisa from '../assets/kisa.png'
import munja from '../assets/munja.png'
import magla from '../assets/magla.png'
import snijeg from '../assets/snijeg.png'

function WeatherBody() {

    const [todayDate, setTodayDate] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [weatherDataZg, setWeatherDataZg] = useState([{}]);
    const [weatherDataSt, setWeatherDataSt] = useState([{}]);
    const [weatherDataOs, setWeatherDataOs] = useState([{}]);
    const [weatherDataRi, setWeatherDataRi] = useState([{}]);
    const [showWeather, setShowWeather] = useState(false);
    const [weatherZg, setWeatherZg] = useState({
        city: "",
        temperature: null,
        status: ""
    })
    const [weatherSt, setWeatherSt] = useState({
        city: "",
        temperature: null,
        status: ""
    })
    const [weatherOs, setWeatherOs] = useState({
        city: "",
        temperature: null,
        status: ""
    })
    const [weatherRi, setWeatherRi] = useState({
        city: "",
        temperature: null,
        status: ""
    })

    useEffect(() => {
        getWeatherZg()
        getWeatherSt()
        getWeatherOs()
        getWeatherRi()        
        setInterval(() => {
            var date = new Date()
        setTodayDate(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
        setCurrentTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        },100);
    },[]);

    const getWeather = () => {
        setWeatherZg({
            city: weatherDataZg.name,
            temperature: weatherDataZg.main.temp,
            status: weatherDataZg.weather[0].main
        })        
        setWeatherSt({
            city: weatherDataSt.name,
            temperature: weatherDataSt.main.temp,
            status: weatherDataSt.weather[0].main
        })
        setWeatherOs({
            city: weatherDataOs.name,
            temperature: weatherDataOs.main.temp,
            status: weatherDataOs.weather[0].main
        })
        setWeatherRi({
            city: weatherDataRi.name,
            temperature: weatherDataRi.main.temp,
            status: weatherDataRi.weather[0].main
        })
        setShowWeather(true);
    }

    const getWeatherZg = () => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=zagreb&appid=b3eae3cbbd4167ba13d5749a231f346a&units=metric`)
        .then(response => response.json())
        .then(data => setWeatherDataZg(data))
    }

    const getWeatherSt = () => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=split&appid=b3eae3cbbd4167ba13d5749a231f346a&units=metric`)
        .then(response => response.json())
        .then(data => setWeatherDataSt(data))
    }

    const getWeatherOs = () => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=osijek&appid=b3eae3cbbd4167ba13d5749a231f346a&units=metric`)
        .then(response => response.json())
        .then(data => setWeatherDataOs(data))
    }

    const getWeatherRi = () => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=rijeka&appid=b3eae3cbbd4167ba13d5749a231f346a&units=metric`)
        .then(response => response.json())
        .then(data => setWeatherDataRi(data))
    }

    return (
        <React.Fragment>
            <div className="city-label">
                <div className="city-div"><Link to="/zagreb" className="city-link">Zagreb</Link></div>
                <div className="city-div"><Link to="/split" className="city-link">Split</Link></div>
                <div className="city-div"><Link to="/osijek" className="city-link">Osijek</Link></div>
                <div className="city-div"><Link to="/rijeka" className="city-link">Rijeka</Link></div>
            </div>
            <div className="weather-container">
                <div className="current-time">
                    <span className="date-text">Current time in Croatia is:</span>
                    <span className="date-text">{todayDate}</span>
                    <span className="date-text">{currentTime}</span>
                </div>
                <button onClick={getWeather} id="get-button">Show current weather</button>
                
                    {showWeather ? <div className="current-weather">
                        <div>
                            {weatherZg.status === "Clear" ? <img src={sunce} id="image" alt="sun"></img> : null}
                            {weatherZg.status === "Clouds" ? <img src={oblak} id="image" alt="cloud"></img> : null}
                            {weatherZg.status === "Snow" ? <img src={snijeg} id="image" alt="snow"></img> : null}
                            {weatherZg.status === "Rain" || weatherZg.status === "Drizzle" ? <img src={kisa} id="image" alt="rain"></img> : null}
                            {weatherZg.status === "Thunderstorm" ? <img src={munja} id="image" alt="thunder"></img> : null}
                            {weatherZg.status === "Fog" || weatherZg.status === "Mist" ? <img src={magla} id="image" alt="fog"></img> : null}
                            <p>Zagreb</p>
                            <p>{Math.round(weatherZg.temperature)}ºC</p>
                            <p>{weatherZg.status}</p>  
                        </div>
                        <div>
                            {weatherSt.status === "Clear" ? <img src={sunce} id="image" alt="sun"></img> : null}
                            {weatherSt.status === "Clouds" ? <img src={oblak} id="image" alt="cloud"></img> : null}
                            {weatherSt.status === "Snow" ? <img src={snijeg} id="image" alt="snow"></img> : null}
                            {weatherSt.status === "Rain" || weatherSt.status === "Drizzle" ? <img src={kisa} id="image" alt="rain"></img> : null}
                            {weatherSt.status === "Thunderstorm" ? <img src={munja} id="image" alt="thunder"></img> : null}
                            {weatherSt.status === "Fog" || weatherSt.status === "Mist" ? <img src={magla} id="image" alt="fog"></img> : null}
                            <p>Split</p>
                            <p>{Math.round(weatherSt.temperature)}ºC</p>
                            <p>{weatherSt.status}</p> 
                        </div>          
                        <div>
                            {weatherOs.status === "Clear" ? <img src={sunce} id="image" alt="sun"></img> : null}
                            {weatherOs.status === "Clouds" ? <img src={oblak} id="image" alt="cloud"></img> : null}
                            {weatherOs.status === "Snow" ? <img src={snijeg} id="image" alt="snow"></img> : null}
                            {weatherOs.status === "Rain" || weatherOs.status === "Drizzle" ? <img src={kisa} id="image" alt="rain"></img> : null}
                            {weatherOs.status === "Thunderstorm" ? <img src={munja} id="image" alt="thunder"></img> : null}
                            {weatherOs.status === "Fog" || weatherOs.status === "Mist" ? <img src={magla} id="image" alt="fog"></img> : null}
                            <p>Osijek</p>
                            <p>{Math.round(weatherOs.temperature)}ºC</p>
                            <p>{weatherOs.status}</p> 
                        </div> 
                        <div>
                            {weatherRi.status === "Clear" ? <img src={sunce} id="image" alt="sun"></img> : null}
                            {weatherRi.status === "Clouds" ? <img src={oblak} id="image" alt="cloud"></img> : null}
                            {weatherRi.status === "Snow" ? <img src={snijeg} id="image" alt="snow"></img> : null}
                            {weatherRi.status === "Rain" || weatherRi.status === "Drizzle" ? <img src={kisa} id="image" alt="rain"></img> : null}
                            {weatherRi.status === "Thunderstorm" ? <img src={munja} id="image" alt="thunder"></img> : null}
                            {weatherRi.status === "Fog" || weatherRi.status === "Mist" ? <img src={magla} id="image" alt="fog"></img> : null}
                            <p>Rijeka</p>
                            <p>{Math.round(weatherRi.temperature)}ºC</p>
                            <p>{weatherRi.status}</p> 
                        </div>  
                        </div>         
                     : null}
                
            </div>
        </React.Fragment>
    );
}
export default WeatherBody;