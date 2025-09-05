import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { screenWidth } from "../../utils/utils";
import { colors } from "../../constants/colors";

const Button = ({onPress}) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.secondary,
				padding: 16,
				width: screenWidth * 0.65,
				justifyContent: "space-between",
				alignItems: "center",
				borderRadius: 36,
			}}
			onPress={onPress}
		>
			<Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>
				Get a ticket
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
