import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "components/ScreenWrapper";

export default function FavouriteScreen() {
	return (
		<ScreenWrapper title="Favourites">
			<View className="h-96 flex items-center justify-center">
				<Text className="text-lg">This is favourite page</Text>
			</View>
		</ScreenWrapper>
	);
}
