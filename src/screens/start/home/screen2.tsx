import { View, Text } from "react-native";
import React from "react";
import NavButtons from "./components/NavButtons";

export default function HomeScreen2() {
	return (
		<View>
			<View className="h-96 flex items-center justify-center">
				<Text className="text-lg">This is Home Screen 2 page</Text>
				<NavButtons />
			</View>
		</View>
	);
}
