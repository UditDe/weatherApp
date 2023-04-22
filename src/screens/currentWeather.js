import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/rowText";
import { weatherType } from "../utils/weatherType";

const CurrentWeather = ({ weatherData }) => {
	const {
		wrapper,
		container,
		tempStyle,
		hiLoWrapper,
		hiLo,
		bodyWrapper,
		description,
		msg,
		feels
	} = styles;

	const {
		main: { temp, feels_like, temp_max, temp_min },
		weather
	} = weatherData;

	const weatherCondition = weather[0].main;
	return (
		<SafeAreaView
			style={[
				wrapper,
				{
					backgroundColor:
						weatherType[weatherCondition].backgroundColor
				}
			]}
		>
			<View style={container}>
				<Feather
					name={weatherType[weatherCondition].icon}
					size={100}
					color="white"
				/>
				<Text style={tempStyle}>{temp}</Text>
				<Text style={feels}>{`Feels like ${feels_like}`}</Text>
				<RowText
					messageOne={`High: ${temp_max}`}
					messageTwo={`Low: ${temp_min}`}
					containerStyles={hiLoWrapper}
					messageOneStyles={hiLo}
					messageTwoStyles={hiLo}
				/>
			</View>
			<RowText
				messageOne={weather[0].description}
				messageTwo={weatherType[weatherCondition].message}
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
		backgroundColor: "pink"
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	tempStyle: {
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
