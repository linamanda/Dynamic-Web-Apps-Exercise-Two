import React from "react";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType = "Unknown",
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <div className="WeatherTemp">
        <p className="CurrentTemp">
          <strong>{currentTemp}</strong>
        </p>
        <p className="HighTemp">
          <strong>{highTemp}</strong>
        </p>
        <p className="LowTemp">
          <strong>{lowTemp}</strong>
        </p>
      </div>
      <div className="WeatherType">
        <p>
          WeatherType: <strong>{weatherType}</strong>
        </p>
      </div>
      <div className="WeatherAtmos">
        <p className="Humidity">
          Humidity: <strong>{humidity}</strong>
        </p>
        <p className="WindSpeed">
          WindSpeed: <strong>{windSpeed}</strong>
        </p>
        <p className="Cloudiness">
          Cloudiness: <strong>{cloudiness}</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
