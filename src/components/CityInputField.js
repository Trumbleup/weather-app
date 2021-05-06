import React from "react";
import "./CityInputField.css";

const CityInputField = ({ cityInput, handleCityInput }) => {
	return (
		<div className="input-container">
			<input value={cityInput} onChange={handleCityInput} placeholder="ex. Houston, Tx"/>
		</div>
	);
};

export default CityInputField;
