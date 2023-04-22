import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { weatherType } from "../utils/weatherType";
import moment from "moment";

const ListItem = (props) => {
	const { dt_txt, min, max, condition } = props;
	const { item, date, temp, dateTextWrapper } = styles;
	return (
		<View style={item}>
			<Feather
				name={weatherType[condition]?.icon}
				size={50}
				color={"white"}
			/>
			<View style={dateTextWrapper}>
				<Text style={date}>{moment(dt_txt).format("dddd")}</Text>
				<Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
			</View>
			<Text style={temp}>
				{`Low: ${Math.round(min)}° Max: ${Math.round(max)}°`}
			</Text>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		borderWidth: 5,
		backgroundColor: "indianred"
	},
	dateTextWrapper: {
		flexDirection: "column"
	},
	date: {
		color: "white",
		fontSize: 15
	},
	temp: {
		color: "white",
		fontSize: 20
	}
});
