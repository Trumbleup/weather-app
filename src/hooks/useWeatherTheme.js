import { useState, useEffect } from "react";

const useWeatherTheme = (icon) => {
	const [weatherTheme, setWeatherTheme] = useState(null);
	const weatherCode = icon.replace(/d|n/g, "");
	useEffect(() => {
		if (weatherCode === "01") {
			setWeatherTheme("clear");
		} else if (weatherCode === "02" || weatherCode === "03" || weatherCode === "04") {
			setWeatherTheme("cloudy");
		} else if (weatherCode === "09" || weatherCode === "10") {
			setWeatherTheme("rain");
		} else if (weatherCode === "11") {
			setWeatherTheme("thunderstorm");
		} else if (weatherCode === "13") {
			setWeatherTheme("snow");
		} else if (weatherCode === "50") {
			setWeatherTheme("mist");
		}
	})
	return weatherTheme;
};

export default useWeatherTheme;
