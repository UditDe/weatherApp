import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	StatusBar,
	FlatList,
	ImageBackground
} from "react-native";
import ListItem from "../components/listItem";

const DATA = [
	{
		dt: 1661875200,
		main: {
			temp: 296.34,
			feels_like: 296.02,
			temp_min: 296.34,
			temp_max: 298.24,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 933,
			humidity: 50,
			temp_kf: -1.9
		},
		weather: [
			{
				id: 500,
				main: "Rain",
				description: "light rain",
				icon: "10d"
			}
		],
		dt_txt: "2022-08-30 16:00:00"
	},
	{
		dt: 1661878800,
		main: {
			temp: 296.31,
			feels_like: 296.07,
			temp_min: 296.2,
			temp_max: 296.31,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 932,
			humidity: 53,
			temp_kf: 0.11
		},
		weather: [
			{
				id: 500,
				main: "Rain",
				description: "light rain",
				icon: "10d"
			}
		],
		dt_txt: "2022-08-30 17:00:00"
	},
	{
		dt: 1661882400,
		main: {
			temp: 294.94,
			feels_like: 294.74,
			temp_min: 292.84,
			temp_max: 294.94,
			pressure: 1015,
			sea_level: 1015,
			grnd_level: 931,
			humidity: 60,
			temp_kf: 2.1
		},
		weather: [
			{
				id: 500,
				main: "Rain",
				description: "light rain",
				icon: "10n"
			}
		],
		dt_txt: "2022-08-30 18:00:00"
	}
];

const UpcommingWeather = () => {
	const renderItem = ({ item }) => (
		<ListItem
			dt_txt={item.dt_txt}
			min={item.main.temp_min}
			max={item.main.temp_max}
			condition={item.weather[0].main}
		/>
	);

	const { container, imgae } = styles;

	return (
		<SafeAreaView style={container}>
			<ImageBackground
				source={require("../../assets/upcomming-background.jpg")}
				style={imgae}
			>
				<Text>Upcomming Weather</Text>
				<FlatList
					data={DATA}
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
		marginTop: StatusBar.currentHeight || 0,
		backgroundColor: "red",
		flex: 1
	},
	imgae: {
		flex: 1
	}
});
