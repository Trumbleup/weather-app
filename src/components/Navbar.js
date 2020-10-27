import React from "react";
import "./Navbar.css";

const Navbar = ({ handleTemperatureUnit }) => {
	return (
		<div id="navbar">
			<div>WEATHER APP</div>
			<button onClick={handleTemperatureUnit} className="temperature-toggle">Toggle Temperature</button>
		</div>
	);
};

export default Navbar;
