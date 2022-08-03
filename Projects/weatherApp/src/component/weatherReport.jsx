import React, { useState } from "react";
import axios from "axios";
import "./weatherReport.css";

const WeatherReport = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `${import.meta.env.VITE_APP_URL}${location}&appid=${
    import.meta.env.VITE_APP_API
  }`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  let emoji = null;
  if (typeof data.main != "undefined") {
    if (data.weather[0].main == "Clouds") {
      emoji = "fa-cloud";
    } else if (data.weather[0].main == "Thunderstrom") {
      emoji = "fa-cloud-bolt";
    } else if (data.weather[0].main == "Drizzle") {
      emoji = "fa-cloud-rain";
    } else if (data.weather[0].main == "Rain") {
      emoji = "fa-cloud-showers-heavy";
    } else if (data.weather[0].main == "Snow") {
      emoji = "fa-snowflake";
    } else {
      emoji = "fa-smog";
    }
  }

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name && (
              <p>
                {`${data.name} `}
                <i className={`fa-solid ${emoji} fa-4x`}></i>
              </p>
            )}
          </div>
          <div className="temp">
            {data.main ? <h1>{(data.main.temp - 273.15).toFixed(2)}</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
                      <div className="feels">
                          {data.main ? <p className="bold">{(data.main.feels_like - 273.15).toFixed(2)}&deg;c </p> : null}
              <p>Feels Like</p>
            </div>
                      <div className="humidity">
                      {data.main ? <p className="bold">{data.main.humidity.toFixed(2)}%</p> : null}
              <p>Humidity</p>
            </div>
                      <div className="wind">
                      {data.wind ? <p className="bold">{data.wind.speed.toFixed(2)}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WeatherReport;
