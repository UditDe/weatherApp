import React, { useEffect, useState } from "react";
import { AppRegistry, View, StyleSheet, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs";
import * as Location from "expo-location";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
	const [loading, err, weather] = useGetWeather();
	console.info(loading, err);
	console.log(weather);

	if (weather && weather.list) {
		return (
			<NavigationContainer>
				<Tabs weather={weather} />
			</NavigationContainer>
		);
	} else {
		return (
			<View style={styles.container}>
				<ActivityIndicator size={"large"} color={"blue"} />
			</View>
		);
	}
};

AppRegistry.registerComponent("Weather", () => App);

export default App;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1
	}
});
