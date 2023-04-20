import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/rowText";

const CurrentWeather = () => {
	const {
		wrapper,
		container,
		temp,
		hiLoWrapper,
		hiLo,
		bodyWrapper,
		description,
		msg,
		feels
	} = styles;
	return (
		<SafeAreaView style={wrapper}>
			<View style={container}>
				<Feather name="sun" size={100} color="black" />
				<Text style={temp}>6</Text>
				<Text style={feels}>Feels like 5</Text>
				<RowText
					messageOne={"High: 8"}
					messageTwo={"Low: 6"}
					containerStyles={hiLoWrapper}
					messageOneStyles={hiLo}
					messageTwoStyles={hiLo}
				/>
			</View>
			<RowText
				messageOne={"Sunny"}
				messageTwo={"Perfect t-shirt weather"}
				containerStyles={bodyWrapper}
				messageOneStyles={description}
				messageTwoStyles={msg}
			/>
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
