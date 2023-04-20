/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/currentWeather";
import UpcommingWeather from "../screens/upcommingWeather";
import City from "../screens/city";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "grey",
				tabBarStyle: {
					backgroundColor: "lightblue"
				},
				headerStyle: {
					backgroundColor: "lightblue"
				},
				headerTitleStyle: {
					fontWeight: "bold",
					fontSize: 25,
					color: "tomato"
				}
			}}
		>
			<Tab.Screen
				name={"Current"}
				component={CurrentWeather}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"droplet"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			/>
			<Tab.Screen
				name={"Upcomming"}
				component={UpcommingWeather}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"clock"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			/>
			<Tab.Screen
				name={"City"}
				component={City}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"home"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
