import React, { useState, useEffect } from "react";
import useWeatherTheme from "../hooks/useWeatherTheme";
import useDayTheme from "../hooks/useDayTheme";
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
	const weatherTheme = useWeatherTheme(icon);
	const dayTheme = useDayTheme(icon);
	console.log(dayTheme);
	return (
		<div className="weather-display">
			<div className="image-container">
				<img
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="Cloudy"
				/>
			</div>
			<div className="weather-details">
				<div>City: {name}</div>
				<div>Country: {country}</div>
				<div>Weather: {main}</div>
				<div>Description: {description}</div>
				{temperatureUnit === "F" ? (
					<div>
						<div>
							Feels Like: {getFahrenheit(feels_like)}&#176; F
						</div>
						<div>Temperature: {getFahrenheit(temp)}&#176; F</div>
						<div>
							Max Temperature: {getFahrenheit(temp_max)}&#176; F
						</div>
						<div>
							Min Temperature: {getFahrenheit(temp_min)}&#176; F
						</div>
					</div>
				) : (
					<div>
						<div>Feels Like: {getCelcius(feels_like)}&#176; C</div>
						<div>Temperature: {getCelcius(temp)}&#176; C</div>
						<div>
							Max Temperature: {getCelcius(temp_max)}&#176; C
						</div>
						<div>
							Min Temperature: {getCelcius(temp_min)}&#176; C
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default WeatherDisplay;
