import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";
import Colors from "utils/constants/colors";
import SizedBox from "./SizedBox";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppContext from "contexts/AppContext";

type ScreenWrapperProps = {
	title: string;
	children: React.ReactElement;
};

export default function ScreenWrapper({ title, children }: ScreenWrapperProps) {
	const drawerProgress = useDrawerProgress();
	const drawerStatus = useDrawerStatus();
	const navigation = useNavigation();
	const { setDrawerOpen } = useContext(AppContext);

	useEffect(() => {
		setDrawerOpen(drawerStatus === "open");
	}, [drawerStatus]);

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [
			{ translateX: interpolate(drawerProgress.value, [0, 1], [0, 45]) },
			{ translateY: interpolate(drawerProgress.value, [0, 1], [0, 60]) },
			{ rotateZ: interpolate(drawerProgress.value, [0, 1], [0, -6]) + "deg" },
		],
		borderRadius: interpolate(drawerProgress.value, [0, 1], [0, 30]),
	}));

	const handleDrawerOpen = () => {
		if (drawerStatus === "closed") {
			navigation.dispatch(DrawerActions.openDrawer());
		} else {
			navigation.dispatch(DrawerActions.closeDrawer());
		}
	};

	return (
		<Animated.View
			style={[animatedStyles]}
			className="flex-1 overflow-hidden bg-white pt-20"
		>
			<View className="flex flex-row items-center px-6">
				<TouchableOpacity onPress={handleDrawerOpen}>
					<Ionicons name="menu-sharp" size={42} color={Colors.gray} />
				</TouchableOpacity>
				<SizedBox width={25} />
				<Text className="uppercase text-gray-400 text-2xl tracking-[7px]">
					{title}
				</Text>
			</View>
			{children}
		</Animated.View>
	);
}
