import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	ImageBackground
} from "react-native";
import IconText from "../components/iconText";
import moment from "moment";

const City = ({ weatherData }) => {
	const {
		container,
		cityName,
		cityText,
		countyName,
		populationWrapper,
		populationText,
		riseSetWrapper,
		riseSetTimeText,
		rowLayout
	} = styles;

	const { name, country, population, sunrise, sunset } = weatherData;

	return (
		<SafeAreaView style={container}>
			<ImageBackground
				source={require("../../assets/city-background.jpg")}
				style={styles.imageLayout}
			>
				<Text style={[cityName, cityText]}>{name}</Text>
				<Text style={[countyName, cityText]}>{country}</Text>
				<View style={[populationWrapper, rowLayout]}>
					<IconText
						iconName={"user"}
						iconColor={"red"}
						bodyText={`${population}`}
						bodyTextStyles={populationText}
					/>
				</View>
				<View style={[riseSetWrapper, rowLayout]}>
					<IconText
						iconName={"sunrise"}
						iconColor={"white"}
						bodyText={moment(sunrise).format("h:mm:ss a")}
						bodyTextStyles={riseSetTimeText}
					/>
					<IconText
						iconName={"sunset"}
						iconColor={"white"}
						bodyText={moment(sunset).format("h:mm:ss a")}
						bodyTextStyles={riseSetTimeText}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
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
		justifyContent: "center",
		marginTop: 30
	},
	populationText: {
		fontSize: 25,
		marginLeft: 7.5,
		color: "red"
	},
	riseSetWrapper: {
		justifyContent: "space-around",
		marginTop: 30
	},
	riseSetTimeText: {
		fontSize: 20,
		color: "white"
	},
	rowLayout: {
		flexDirection: "row",
		alignItems: "center"
	}
});

export default City;
