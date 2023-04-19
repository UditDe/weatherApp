import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const App = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text>Current Weather</Text>
				<Text style={styles.temp}>6</Text>
				<Text style={styles.feels}>Feels like 5</Text>
				<Text style={styles.hiLo}>High: 8 Low: 6</Text>
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginTop: StatusBar.currentHeight
	},
	container: {
		backgroundColor: "pink",
		flex: 1,
		alignItems: "center"
	},
	temp: {
		color: "black",
		fontSize: 48
	},
	feels: {
		fontSize: 30,
		color: "black"
	},
	hiLo: {
		color: "black",
		fontSize: 20
	}
});
