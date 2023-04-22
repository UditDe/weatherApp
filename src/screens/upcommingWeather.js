import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	ImageBackground
} from "react-native";
import ListItem from "../components/listItem";

const UpcommingWeather = ({ weatherData }) => {
	const renderItem = ({ item }) => (
		<ListItem
			dt_txt={item.dt_txt}
			min={item.main.temp_min}
			max={item.main.temp_max}
			condition={item.weather[0]?.main}
		/>
	);

	const { container, imgae } = styles;

	return (
		<SafeAreaView style={container}>
			<ImageBackground
				source={require("../../assets/upcomming-background.jpg")}
				style={imgae}
			>
				<FlatList
					data={weatherData}
					renderItem={renderItem}
					keyExtractor={(item) => item.dt_txt}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default UpcommingWeather;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1
	},
	imgae: {
		flex: 1
	}
});
