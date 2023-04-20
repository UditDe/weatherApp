import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	ImageBackground,
	StatusBar
} from "react-native";
import IconText from "../components/iconText";

const City = () => {
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
	return (
		<SafeAreaView style={container}>
			<ImageBackground
				source={require("../../assets/city-background.jpg")}
				style={styles.imageLayout}
			>
				<Text style={[cityName, cityText]}>London</Text>
				<Text style={[countyName, cityText]}>Uk</Text>
				<View style={[populationWrapper, rowLayout]}>
					<IconText
						iconName={"user"}
						iconColor={"red"}
						bodyText={8000}
						bodyTextStyles={populationText}
					/>
				</View>
				<View style={[riseSetWrapper, rowLayout]}>
					<IconText
						iconName={"sunrise"}
						iconColor={"white"}
						bodyText={"10:46:58am"}
						bodyTextStyles={riseSetTimeText}
					/>
					<IconText
						iconName={"sunset"}
						iconColor={"white"}
						bodyText={"17:28:15pm"}
						bodyTextStyles={riseSetTimeText}
					/>
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
