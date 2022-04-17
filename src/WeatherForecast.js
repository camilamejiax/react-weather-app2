import React, { useState }   from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast ] = useState(null);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
           <WeatherForecastDay />
          </div>
        </div>
      </div>
    );    
    } else {
        let apiKey = "7474fc14b19a5b425bb49dcabc42f77b";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
