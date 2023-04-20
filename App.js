import React from "react";
import { AppRegistry } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/tabs";

const Tab = createBottomTabNavigator(); //initializing tab object so that we can use it
const App = () => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

AppRegistry.registerComponent("Weather", () => App);

export default App;
