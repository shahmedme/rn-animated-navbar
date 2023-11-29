import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenWrapper from "components/ScreenWrapper";
import React from "react";
import Routes from "routes";
import HomeIndexScreen from "./home";
import ContactScreen from "./contact";
import { StyleSheet } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function StartScreen() {
	return (
		<ScreenWrapper title="Start">
			<BottomTab.Navigator
				sceneContainerStyle={{ backgroundColor: "transparent" }}
				screenOptions={{
					headerShown: false,
					tabBarIconStyle: { display: "none" },
					tabBarItemStyle: {
						height: 50,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					},
				}}
			>
				<BottomTab.Screen
					name={Routes.Start.Home.Index}
					component={HomeIndexScreen}
					options={{
						tabBarLabel: "Home",
						tabBarLabelStyle: styles.tabItemLabel,
					}}
				/>
				<BottomTab.Screen
					name={Routes.Start.Contact}
					component={ContactScreen}
					options={{
						tabBarLabel: "Contact",
						tabBarLabelStyle: styles.tabItemLabel,
					}}
				/>
			</BottomTab.Navigator>
		</ScreenWrapper>
	);
}

const styles = StyleSheet.create({
	tabItemLabel: {
		fontSize: 16,
		fontWeight: "400",
	},
});
