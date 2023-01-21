import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [city, setCity] = useState(null);

  function showForecast(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setCity("Lviv");
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showForecast);

  return (
    <div class="weatherApp">
      <div class="container text-left">
        <div class="row">
          <div class="col">
            <h1 id="city">{city}</h1>
            <p class="dateMonth" id="datetime">
              Tuesday 10:00
            </p>
            <div class="temperature">
              <span id="description">
                <img src={icon} alt="" width="100" /> {description}
              </span>
            </div>
            <form class="inputGroup" id="search-form">
              <div class="row">
                <div class="col-10">
                  <input
                    type="text"
                    id="city-search"
                    placeholder="Search city"
                    autofocus="on"
                    class="form-control"
                  />
                </div>
                <div class="col-2">
                  <input
                    type="submit"
                    value="  Search  "
                    class="btn btn-light"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="col">
            <p>
              <strong class="cityTemperature" id="city-temp">
                {Math.round(temperature)}
              </strong>
              <span class="units">
                <a class="linkColor" href="/" id="celsius-link">
                  °C
                </a>
                |
                <a class="linkColor" href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </p>
            <ul>
              <li>
                Humidity: <span id="humidity">{humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{wind}</span>
                m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="dividerClass" />
      <div class="row">
        <div class="row justify-content-center">
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Sun</h5>
                  <i class="fa-solid fa-sun"></i>
                  <p class="card-text">12°C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Mon</h5>
                  <i class="fa-solid fa-cloud-sun-rain"></i>
                  <p class="card-text">8°C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Tue</h5>
                  <i class="fa-solid fa-cloud"></i>
                  <br />
                  <p class="card-text">13°C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Wed</h5>
                  <i class="fa-solid fa-sun"></i>
                  <p class="card-text">10°C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Thu</h5>
                  <i class="fa-solid fa-cloud-showers-heavy"></i>
                  <p class="card-text">9°C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="shadow-lg p-1 mb-8 bg-body rounded">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Fri</h5>
                  <i class="fa-solid fa-cloud-showers-heavy"></i>
                  <p class="card-text">9°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
