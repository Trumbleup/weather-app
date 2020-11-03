import { useState, useEffect } from "react";

const useDayTheme = (icon) => {
	const [dayTheme, setDayTheme] = useState(null);
	const dayCode = icon.replace(/\d/g, "");
	useEffect(() => {
		if (dayCode === "d") {
			setDayTheme("day");
		} else if (dayCode === "n") {
			setDayTheme("night");
		}
	})
	return dayTheme;
};

export default useDayTheme;