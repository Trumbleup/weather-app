import React, { useState, useEffect } from "react";

const WeatherDisplay = ({ weatherInfo }) => {
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		if (weatherInfo) {
			setWeather(weatherInfo);
		}
	}, [weatherInfo]);
	if (weather) {
		const name = weather.name;
		const country = weather.sys.country;
		const { feels_like, temp, temp_max, temp_min } = weather.main;
		const { description, main } = weather.weather[0];
		console.log(weather);
		return (
			<div className="weather-display">
				<div>{name}</div>
				<div>{country}</div>
				<div>{main}</div>
				<div>{description}</div>
				<div>{feels_like}</div>
				<div>{temp}</div>
				<div>{temp_max}</div>
				<div>{temp_min}</div>
			</div>
		);
	} else {
		return null;
	}
};

export default WeatherDisplay;
