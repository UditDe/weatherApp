import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/currentWeather";
import UpcommingWeather from "./src/screens/upcommingWeather";
import City from "./src/screens/city";

const App = () => {
	return (
		<View style={styles.container}>
			<CurrentWeather />
			{/* <UpcommingWeather /> */}
			{/* <City /> */}
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
