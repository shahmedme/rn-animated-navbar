import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "routes";
import Screen1 from "./screen1";
import HomeScreen1 from "./screen1";
import HomeScreen2 from "./screen2";

const HomeStack = createNativeStackNavigator();

export default function HomeIndexScreen() {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: "white" },
			}}
		>
			<HomeStack.Screen
				name={Routes.Start.Home.Screen1}
				component={HomeScreen1}
			/>
			<HomeStack.Screen
				name={Routes.Start.Home.Screen2}
				component={HomeScreen2}
			/>
		</HomeStack.Navigator>
	);
}
