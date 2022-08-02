import React, { useState, useEffect } from "react";
import axios from "axios";
const SearchWeather = () => {
  const [search, setSearch] = useState("Patna");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let componentMouned = true;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL}${search}&appid=${import.meta.env.VITE_APP_API}`
        );
        if (componentMouned) {
          setData(await res.data);
        }
        return () => {
          componentMouned = false;
        };
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [search]);
  //Emoji
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
  } else {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  //date
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let weekday = d.toLocaleString("default", { weekday: "long" });

  //time
  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    sec: "2-digit",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  const imgStyle = {
    minWidth: "300px",
    height: "600px",
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-dark text-center border-0">
            <img
              src={`https://source.unsplash.com/random/?weather`}
              style={imgStyle}
              className="card-img"
              alt="weaterReport"
            />
            <div className="card-img-overlay">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3 w-75 mx-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search City"
                    aria-label="Search City"
                    aria-describedby="basic-addon2"
                    name="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                  </button>
                </div>
              </form>
              <div className="text-white">
                <h2 className="card-title">{data.name}</h2>
                <p className="card-text lead">
                  {weekday}, {month} {date}, {year}
                </p>
                <br />
                {time}
                <hr />
                <i className={`fa-solid ${emoji} fa-4x`}></i>
                <h1 className="fw-bolder mb-5">
                  {(data.main.temp - 273.15).toFixed(2)}
                </h1>
                <p className="fw-bolder lead mb-0">{data.weather[0].main}</p>
                <p className="lead">
                  {(data.main.temp_min - 273.15).toFixed(2)}&deg;c |
                  {(data.main.temp_max - 273.15).toFixed(2)} &deg;c
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
