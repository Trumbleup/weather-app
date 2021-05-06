import React from "react";
import "./Navbar.css";

const Navbar = ({ temperatureUnit, handleTemperatureUnit }) => {
	return (
		<div id="navbar">
			<div className="navbar-title">WEATHER APP</div>
			<button onClick={handleTemperatureUnit} className="temperature-toggle">Toggle {(temperatureUnit === "F") ? "Celcius" :"Fahrenheit" }</button>
		</div>
	);
};

export default Navbar;
