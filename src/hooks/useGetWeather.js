import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useGetWeather = () => {
	const [loading, setLoading] = useState(true);
	// const [location, setLoaction] = useState(null);
	const [err, setErr] = useState(null);
	const [weather, setWeather] = useState([]);
	const [lat, setLat] = useState([]);
	const [lon, setLon] = useState([]);
	const fetchWeatherData = async () => {
		try {
			const res = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
			);
			const data = await res.json();
			setWeather(data);
		} catch (error) {
			setErr("Could not fetch error");
			console.log(err, error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErr("Permission to access location is denide");
				return;
			}
			let newlocation = await Location.getCurrentPositionAsync({});
			// setLoaction(newlocation);
			setLat(newlocation.coords.latitude);
			setLon(newlocation.coords.longitude);
			await fetchWeatherData();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lat, lon]);

	return [loading, err, weather];
};
