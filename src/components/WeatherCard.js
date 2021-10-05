import React from "react";
import WeatherImage from "./WeatherImage.js";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  tempUnit,
  weatherType = "Unknown",
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <div className="WeatherTempWrapper">
        <p className="WeatherTempSectionTitle">Current Temperature</p>
        <p className="CurrentTemp">
          <strong>
            {currentTemp}
            {tempUnit}
          </strong>
        </p>
        <p className="HighTemp">
          <strong>High: {highTemp}</strong>
        </p>
        <p className="LowTemp">
          <strong>Low: {lowTemp}</strong>
        </p>
      </div>
      <div className="WeatherTypeWrapper">
        <div className="WeatherImageWrapper">
          <WeatherImage weatherType={weatherType} />
        </div>
        <p>
          WeatherType: <strong>{weatherType}</strong>
        </p>
      </div>
      <div className="WeatherAtmosWrapper">
        <p className="Humidity">
          Humidity: <strong>{humidity}%</strong>
        </p>
        <p className="WindSpeed">
          WindSpeed: <strong>{windSpeed}</strong>
        </p>
        <p className="Cloudiness">
          Cloudiness: <strong>{cloudiness}%</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
