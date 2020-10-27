import React from "react";

const CityInputField = ({ cityInput, handleCityInput }) => {
	return (
		<div>
			<input value={cityInput} onChange={handleCityInput} />
		</div>
	);
};

export default CityInputField;
