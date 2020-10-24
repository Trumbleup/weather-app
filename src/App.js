import React, { useState, useEffect } from "react";
import CityInputField from "./components/CityInputField";
import cityList from "./city.list.json";

function App() {
  const [weather, setWeather] = useState({});
  const [cityID, setCityID] = useState(4699066);
  const [cityInput, setLocationInput] = useState("");
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

  const getWeather = (id) => {
    if (!id) {
      return;
    } else {
      fetchWeather(id).then((res) => console.log(res));
    }
  };

  const getCityID = (input) => {
    const inputFormatted = input.toLowerCase().replace(/\s+/g, "");
    const cityStringSplit = inputFormatted.split(",");
    const cityName = cityStringSplit[0];
    const cityTerritory = cityStringSplit[1];
    const filteredCity = cityList.filter((cityObj) => {
      const jsonCityName = cityObj.name.toLowerCase();
      let jsonCityTerritory;
      if (cityObj.state != "") {
        jsonCityTerritory = cityObj.state.toLowerCase();
      } else {
        jsonCityTerritory = cityObj.country.toLowerCase();
      }
      return cityName == jsonCityName && cityTerritory == jsonCityTerritory;
    });
    if (filteredCity.length > 0) {
      return filteredCity[0].id;
    }
  };

  const handleCityInput = (e) => {
    setLocationInput(e.target.value);
  };

  const handleCityID = (id) => {
    if (id) {
      setCityID(id);
    } else {
      return;
    }
  };

  useEffect(() => {
    handleCityID(getCityID(cityInput));
    getWeather(cityID);
  }, [cityInput, cityID]);
  return (
    <div className="App">
      <CityInputField cityInput={cityInput} handleCityInput={handleCityInput} />
    </div>
  );
}

export default App;
