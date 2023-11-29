module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"nativewind/babel",
			[
				"react-native-reanimated/plugin",
				{
					relativeSourceLocation: true,
				},
			],
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [
						".ios.js",
						".android.js",
						".js",
						".ts",
						".tsx",
						".json",
						".svg",
						".png",
						".jpg",
					],
				},
			],
		],
	};
};
