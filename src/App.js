import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherDisplayContainer from "./components/WeatherDisplayContainer";
import cityList from "./city.list.json";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityID, setCityID] = useState(4699066);
  const [cityInput, setLocationInput] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("F");
  const fetchWeather = async (id) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=1d5a6501e4b6025eeba951c0e2c62334`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (err) {
      throw err;
    }
  };

  const getCityID = (input) => {
    const inputFormatted = input.toLowerCase();
    const cityStringSplit = inputFormatted.split(",");
    if (cityStringSplit.length === 2) {
      const cityName = cityStringSplit[0].trim();
      const cityTerritory = cityStringSplit[1].trim();
      const filteredCity = cityList.filter((cityObj) => {
        const jsonCityName = cityObj.name.toLowerCase();
        let jsonCityTerritory;
        if (cityObj.state !== "") {
          jsonCityTerritory = cityObj.state.toLowerCase();
        } else {
          jsonCityTerritory = cityObj.country.toLowerCase();
        }
        return cityName === jsonCityName && cityTerritory === jsonCityTerritory;
      });
      if (filteredCity.length > 0) {
        return filteredCity[0].id;
      }
    }
  };

  const handleCityID = (id) => {
    if (id) {
      setCityID(id);
    } else {
      return;
    }
  };

  const handleCityInput = (e) => {
    setLocationInput(e.target.value);
  };

  const handleTemperatureUnit = () => {
    if (temperatureUnit === "F") {
      setTemperatureUnit("C");
    } else {
      setTemperatureUnit("F");
    }
  };

  useEffect(() => {
    const newCityID = getCityID(cityInput);
    handleCityID(newCityID);
  }, [cityInput]);

  useEffect(() => {
    const handleWeather = (id) => {
      if (!id) {
        return;
      } else {
        fetchWeather(id).then((res) => setWeatherInfo(res));
      }
    };
    handleWeather(cityID);
  }, [cityID]);
  return (
    <div className="App">
      <Navbar
        temperatureUnit={temperatureUnit}
        handleTemperatureUnit={handleTemperatureUnit}
      />
      <WeatherDisplayContainer
        cityInput={cityInput}
        handleCityInput={handleCityInput}
        weatherInfo={weatherInfo}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
}

export default App;
