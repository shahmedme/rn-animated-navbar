import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import classNames from "classnames";
import Navbar from "components/Navbar";
import AppContext from "contexts/AppContext";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "routes";
import CartScreen from "screens/cart";
import FavouriteScreen from "screens/favourites";
import OrderScreen from "screens/orders";
import StartScreen from "screens/start";
import { twMerge } from "tailwind-merge";
import Colors from "utils/constants/colors";

const Drawer = createDrawerNavigator();

export default function AppWrapper() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<SafeAreaProvider>
			<AppContext.Provider value={{ drawerOpen, setDrawerOpen }}>
				<App />
			</AppContext.Provider>
		</SafeAreaProvider>
	);
}

function App() {
	const { drawerOpen } = useContext(AppContext);

	const drawerScreenOptions: any = {
		headerShown: false,
		drawerType: "back",
		overlayColor: "transparent",
		sceneContainerStyle: styles.scene,
		drawerStyle: styles.drawer,
		drawerActiveTintColor: "#d7423d",
		drawerInactiveTintColor: "white",
	};

	return (
		<View
			className={twMerge(
				classNames(
					"flex-1",
					drawerOpen && "translate-y-[50px] overflow-hidden rounded-tl-[30px]"
				)
			)}
			style={{ backgroundColor: Colors.dark }}
		>
			<NavigationContainer>
				<Drawer.Navigator
					drawerContent={(props) => <Navbar {...props} />}
					screenOptions={drawerScreenOptions}
				>
					<Drawer.Screen
						name={Routes.Start.Index}
						options={{
							drawerLabel: "Start",
							drawerLabelStyle: styles.drawerLabel,
							drawerItemStyle: styles.drawerItem,
						}}
						component={StartScreen}
					/>
					<Drawer.Screen
						name={Routes.Cart}
						options={{
							drawerLabel: "Your Cart",
							drawerLabelStyle: styles.drawerLabel,
							drawerItemStyle: styles.drawerItem,
						}}
						component={CartScreen}
					/>
					<Drawer.Screen
						name={Routes.Favourites}
						options={{
							drawerLabel: "Favourites",
							drawerLabelStyle: styles.drawerLabel,
							drawerItemStyle: styles.drawerItem,
						}}
						component={FavouriteScreen}
					/>
					<Drawer.Screen
						name={Routes.Orders}
						options={{
							drawerLabel: "Your Orders",
							drawerLabelStyle: styles.drawerLabel,
							drawerItemStyle: styles.drawerItem,
						}}
						component={OrderScreen}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
			<StatusBar backgroundColor={Colors.white} />
		</View>
	);
}

const styles = StyleSheet.create({
	scene: {
		backgroundColor: "transparent",
	},
	drawer: {
		backgroundColor: Colors.dark,
	},
	drawerLabel: {
		fontSize: 20,
		fontWeight: "400",
	},
	drawerItem: {
		width: 190,
		borderRadius: 14,
		paddingHorizontal: 16,
	},
});
