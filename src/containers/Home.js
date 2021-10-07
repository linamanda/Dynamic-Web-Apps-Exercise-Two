import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // For making HTTP requests
import WeatherCard from "../components/WeatherCard";
import { API_KEY } from "../components/API_KEY";

// URL search params ---> localhost:3000/?city=paris
// Abstract away URL Search params to make it easier to use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState(undefined);
  let query = useQuery();
  let tempUnit = `imperial`;
  let tempUnitStr = `\u00B0F`;

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
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round(weatherData.main.temp),
      highTemp: Math.round(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round(weatherData.main.temp_min),
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed + ` mph`,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header className="NavigationWrapper">
        <nav className="Navigation">
          <a href="/" className="logo">
            WeatherNow
          </a>
          <a href="/?city=paris" className={city === "paris" && "Active"}>
            Paris
          </a>
          <a href="/?city=tokyo" className={city === "tokyo" && "Active"}>
            Tokyo
          </a>
          <a href="/?city=seoul" className={city === "seoul" && "Active"}>
            Seoul
          </a>
          <a href="/?city=seattle" className={city === "seattle" && "Active"}>
            Seattle
          </a>
        </nav>
      </header>

      <h1 className="City"> {city} </h1>

      {(city && (
        <WeatherCard
          cloudiness={cloudiness}
          currentTemp={currentTemp}
          highTemp={highTemp}
          humidity={humidity}
          lowTemp={lowTemp}
          tempUnit={tempUnitStr}
          weatherType={weatherType}
          windSpeed={windSpeed}
        />
      )) || (
        <section className="MainContentWrapper">
          <p>Select a city to view the current weather.</p>
        </section>
      )}
    </main>
  );
}

export default Home;
