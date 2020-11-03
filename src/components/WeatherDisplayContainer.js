import React, { useState, useEffect } from "react";
import CityInputField from "./CityInputField";
import WeatherDisplay from "./WeatherDisplay";
import useWeatherTheme from "../hooks/useWeatherTheme";
import useDayTheme from "../hooks/useDayTheme";
import "./WeatherDisplayContainer.css";

const WeatherDisplayContainer = ({ cityInput, handleCityInput, weatherInfo, temperatureUnit }) => {
	const { description, main, icon } = weatherInfo.weather[0];
	const weatherTheme = useWeatherTheme(icon);
	const dayTheme = useDayTheme(icon);
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