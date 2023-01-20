import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showForecast(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showForecast);

  if (temperature) {
    return (
      <ul>
        <li>
          <strong>{props.city}</strong>
        </li>
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}km/h</li>
        <li>Wind: {Math.round(wind)}%</li>
        <li>
          <img src={icon} alt="" width="70" />
        </li>
      </ul>
    );
  } else {
    return <p>Loading temperature for {props.city}..</p>;
  }
}
