import React from "react";
import "./CityInputField.css";

const CityInputField = ({ cityInput, handleCityInput }) => {
	return (
		<div className="input-container">
			<input value={cityInput} onChange={handleCityInput} />
		</div>
	);
};

export default CityInputField;
