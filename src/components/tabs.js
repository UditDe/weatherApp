/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/currentWeather";
import UpcommingWeather from "../screens/upcommingWeather";
import City from "../screens/city";

const Tab = createBottomTabNavigator(); //initializing tab object so that we can use it

const Tabs = ({ weather }) => {
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
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"droplet"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			>
				{() => <CurrentWeather weatherData={weather.list[0]} />}
			</Tab.Screen>
			<Tab.Screen
				name={"Upcomming"}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"clock"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			>
				{() => <UpcommingWeather weatherData={weather.list} />}
			</Tab.Screen>
			<Tab.Screen
				name={"City"}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name={"home"}
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					)
				}}
			>
				{() => <City weatherData={weather.city} />}
			</Tab.Screen>
		</Tab.Navigator>
	);
};

export default Tabs;
