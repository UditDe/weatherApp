import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const ListItem = (props) => {
	const { dt_txt, min, max } = props;
	const { item, date, temp } = styles;
	return (
		<View style={item}>
			<Feather name={"sun"} size={50} color={"white"} />
			<Text style={date}>{dt_txt}</Text>
			<Text style={temp}>{min}</Text>
			<Text style={temp}>{max}</Text>
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
		backgroundColor: "pink"
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