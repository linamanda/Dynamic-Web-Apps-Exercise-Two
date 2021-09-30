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
      <p className="WeatherType">
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <div className="WeatherTemp">
        <p>
          CurrentTemp: <strong>{currentTemp}</strong>
        </p>
        <p>
          HighTemp: <strong>{highTemp}</strong>
        </p>
        <p>
          LowTemp: <strong>{lowTemp}</strong>
        </p>
      </div>
      <div className="WeatherAtmos">
        <p>
          Humidity: <strong>{humidity}</strong>
        </p>
        <p>
          WindSpeed: <strong>{windSpeed}</strong>
        </p>
        <p>
          Cloudiness: <strong>{cloudiness}</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
