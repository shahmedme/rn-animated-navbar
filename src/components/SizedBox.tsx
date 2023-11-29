import { View, Text } from "react-native";
import React from "react";

type SizedBoxProps = {
	width?: number;
	height?: number;
};

export default function SizedBox({ width, height }: SizedBoxProps) {
	return <View style={{ width, height }} />;
}
