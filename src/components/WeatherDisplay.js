import React, { useState, useEffect } from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherInfo, temperatureUnit }) => {
	const [weather, setWeather] = useState(weatherInfo);
	const getFahrenheit = (temperature) => {
		const fahrenheit = temperature * (9 / 5) - 459.67;
		const roundedFahrenheit = Math.round(fahrenheit * 100) / 100;
		return roundedFahrenheit;
	};
	const getCelcius = (temperature) => {
		const celcius = temperature - 273.15;
		const roundedCelcius = Math.round(celcius * 100) / 100;
		return roundedCelcius;
	};
	useEffect(() => {
		if (weatherInfo) {
			setWeather(weatherInfo);
		}
	}, [weatherInfo]);
	const name = weather.name;
	const country = weather.sys.country;
	const { feels_like, temp, temp_max, temp_min } = weather.main;
	const { description, main, icon } = weather.weather[0];
	return (
		<div className="weather-display flex">
			<div className="image-container">
				<img
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="Cloudy"
					className="slideUp"
				/>
			</div>
			<div className="weather-details flex align-start">
				<div><strong>City:</strong> {name}</div>
				<div><strong>Country:</strong> {country}</div>
				<div><strong>Weather:</strong> {main}</div>
				<div><strong>Description:</strong> {description}</div>
				<div><strong>Feels Like:</strong> {(temperatureUnit === "F") ? getFahrenheit(feels_like) : getCelcius(feels_like)}&#176; {temperatureUnit}</div>
				<div><strong>Temperature:</strong> {(temperatureUnit === "F") ? getFahrenheit(temp) : getCelcius(feels_like)}&#176; {temperatureUnit}</div>
				<div><strong>Max Temperature:</strong> {(temperatureUnit === "F") ? getFahrenheit(temp_max) : getCelcius(feels_like)}&#176; {temperatureUnit}</div>
				<div><strong>Min Temperature:</strong> {(temperatureUnit === "F") ? getFahrenheit(temp_min) : getCelcius(temp_min)}&#176; {temperatureUnit}</div>
			</div>
		</div>
	);
};

export default WeatherDisplay;
