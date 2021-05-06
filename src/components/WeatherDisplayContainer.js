import React from "react";
import CityInputField from "./CityInputField";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherDisplayContainer.css";

const WeatherDisplayContainer = ({ cityInput, handleCityInput, weatherInfo, temperatureUnit }) => {
	return (
		<div className="main-container">
	        <CityInputField
	          cityInput={cityInput}
	          handleCityInput={handleCityInput}
	        />
	        {(weatherInfo) ?
	          <WeatherDisplay
	          weatherInfo={weatherInfo}
	          temperatureUnit={temperatureUnit}
	        />
	        :
	        null
	        }    
      </div>
	);
};

export default WeatherDisplayContainer;