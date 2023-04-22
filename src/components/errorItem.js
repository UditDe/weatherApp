import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItems = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.errorMsg}>Oops!! Something went worng</Text>
			<Feather name={"frown"} size={100} color={"white"} />
		</View>
	);
};

export default ErrorItems;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center"
	},
	errorMsg: {
		fontSize: 30,
		color: "white",
		marginHorizontal: 10,
		textAlign: "center"
	}
});
