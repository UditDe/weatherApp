import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Feather name="sun" size={100} color="black" />
				<Text style={styles.temp}>6</Text>
				<Text style={styles.feels}>Feels like 5</Text>
				<View style={styles.hiLoWrapper}>
					<Text style={styles.hiLo}>High: 8</Text>
					<Text style={styles.hiLo}>Low: 6</Text>
				</View>
			</View>
			<View style={styles.bodyWrapper}>
				<Text style={styles.description}>Its Sunny</Text>
				<Text style={styles.msg}>Its perfect t-shirt Weather</Text>
			</View>
		</SafeAreaView>
	);
};

export default CurrentWeather;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		backgroundColor: "pink"
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	temp: {
		color: "black",
		fontSize: 48
	},
	feels: {
		fontSize: 30,
		color: "black"
	},
	hiLoWrapper: {
		flexDirection: "row"
	},
	hiLo: {
		color: "black",
		fontSize: 20
	},
	bodyWrapper: {
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingLeft: 25,
		marginBottom: 40
	},
	description: {
		fontSize: 48
	},
	msg: {
		fontSize: 30
	}
});
