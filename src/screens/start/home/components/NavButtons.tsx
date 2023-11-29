import { View, Text, Button } from "react-native";
import React from "react";
import Routes from "routes";
import { useNavigation } from "@react-navigation/native";
import SizedBox from "components/SizedBox";

export default function NavButtons() {
	const navigation: any = useNavigation();

	const handleNavigation = (key: string) => {
		navigation.navigate(key);
	};

	return (
		<View className="flex flex-row items-center mt-10">
			<Button
				title="Screen 1"
				onPress={() => handleNavigation(Routes.Start.Home.Screen1)}
			/>
			<SizedBox width={12} />
			<Button
				title="Screen 2"
				onPress={() => handleNavigation(Routes.Start.Home.Screen2)}
			/>
		</View>
	);
}
