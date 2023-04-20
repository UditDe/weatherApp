import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	ImageBackground,
	StatusBar
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require("../../assets/city-background.jpg")}
				style={styles.imageLayout}
			>
				<Text style={[styles.cityName, styles.cityText]}>London</Text>
				<Text style={[styles.countyName, styles.cityText]}>Uk</Text>
				<View style={styles.populationWrapper}>
					<Feather name={"user"} size={50} color={"red"} />
					<Text style={styles.populationText}>8000</Text>
				</View>
				<View style={styles.riseSetWrapper}>
					<Feather name={"sunrise"} size={50} color={"white"} />
					<Text style={styles.riseSetTimeText}>10:46:58am</Text>
					<Feather name={"sunset"} size={50} color={"white"} />
					<Text style={styles.riseSetTimeText}>17:28:15pm</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
		flex: 1
	},
	imageLayout: {
		flex: 1
	},
	cityName: {
		fontSize: 40
	},
	countyName: {
		fontSize: 30
	},
	cityText: {
		justifyContent: "center",
		alignSelf: "center",
		fontWeight: "bold",
		color: "white"
	},
	populationWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30
	},
	populationText: {
		fontSize: 25,
		marginLeft: 7.5,
		color: "red",
		fontWeight: "bold"
	},
	riseSetWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginTop: 30
	},
	riseSetTimeText: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold"
	}
});

export default City;
