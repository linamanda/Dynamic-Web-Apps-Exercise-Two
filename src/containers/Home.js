import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // For making HTTP requests
import WeatherCard from "../components/WeatherCard";

const API_KEY = `73a346ccffc92d26fdc0be25725b3827`;

// URL search params ---- localhost:3000/?city=paris
// Abstract away URL Search params to make it easier to use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState(undefined);
  let tempUnit = `imperial`;
  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${tempUnit}`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    // Get weather data from Weather API
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          // successful request --- set as weather data
          setWeatherData(response.data);
        })
        .catch(function (error) {
          // handle error
        });
    }
  }, [URL, city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherDescription,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: weatherData.main.temp,
      highTemp: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherDescription: weatherData.weather[0].description,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header className="Links">
        <p>
          <a href="/?city=paris">Paris</a>
        </p>
        <p>
          <a href="/?city=tokyo">Tokyo</a>
        </p>
        <p>
          <a href="/?city=seoul">Seoul</a>
        </p>
        <p>
          <a href="/?city=seattle">Seattle</a>
        </p>
      </header>

      <h1 className="City"> {city} </h1>

      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherDescription={weatherDescription}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
