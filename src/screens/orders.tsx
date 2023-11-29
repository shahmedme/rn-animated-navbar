import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "components/ScreenWrapper";

export default function OrderScreen() {
	return (
		<ScreenWrapper title="Your Orders">
			<View className="h-96 flex items-center justify-center">
				<Text className="text-lg">This is orders page</Text>
			</View>
		</ScreenWrapper>
	);
}
