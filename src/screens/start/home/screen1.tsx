import { View, Text } from "react-native";
import React from "react";
import NavButtons from "./components/NavButtons";

export default function HomeScreen1() {
	return (
		<View>
			<View className="h-96 flex items-center justify-center">
				<Text className="text-lg">This is Home Screen 1 page</Text>
				<NavButtons />
			</View>
		</View>
	);
}
