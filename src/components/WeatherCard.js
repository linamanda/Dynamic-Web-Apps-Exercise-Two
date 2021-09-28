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
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        CurrentTemp: <strong>{currentTemp}</strong>
      </p>
      <p>
        HighTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        LowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
