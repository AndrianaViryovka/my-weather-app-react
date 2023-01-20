import React, { useState } from "react";
import Forecast from "./Forecast";

export default function SearchCity() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setWeather(<Forecast city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{weather}</h2>
    </div>
  );
}
