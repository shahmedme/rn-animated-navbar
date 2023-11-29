import { DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

export default function Navbar(props: any) {
	const drawerProgress = useDrawerProgress();

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [
			{ translateY: interpolate(drawerProgress.value, [0, 1], [0, 30]) },
		],
	}));

	return (
		<Animated.View
			style={[animatedStyles]}
			className="pt-[150px] w-[190px] px-4"
		>
			<Text className="text-3xl font-bold text-white text-center mb-[60px]">
				Beka
			</Text>
			<DrawerItemList {...props} />
			<View className="ml-8">
				<View className="h-[1px] bg-white my-10" />
				<TouchableOpacity>
					<Text className="text-white text-xl font-normal">Sign Out</Text>
				</TouchableOpacity>
			</View>
		</Animated.View>
	);
}
