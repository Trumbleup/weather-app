import React from "react";
import "./Navbar.css";

const Navbar = ({ temperatureUnit, handleTemperatureUnit }) => {
	return (
		<div id="navbar">
			<div className="navbar-title">WEATHER APP</div>
			<button onClick={handleTemperatureUnit} className="temperature-toggle">{(temperatureUnit === "F") ? "Fahrenheit" : "Celcius"}</button>
		</div>
	);
};

export default Navbar;
