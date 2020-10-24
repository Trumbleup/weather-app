import React from "react";

const CityInput = ({ cityInput, handleCityInput }) => {
	return (
		<div>
			<input value={cityInput} onChange={handleCityInput} />
		</div>
		)
}

export default CityInput