import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "components/ScreenWrapper";

export default function CartScreen() {
	return (
		<ScreenWrapper title="Your Cart">
			<View className="h-96 flex items-center justify-center">
				<Text className="text-lg">This is cart page</Text>
			</View>
		</ScreenWrapper>
	);
}
