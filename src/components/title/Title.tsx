import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Title = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 24,
			}}
		>
			<View>
				<Text style={{ color: colors.white, fontWeight: "800", fontSize: 28 }}>
					Oliver Tree
				</Text>
				<Text style={{ color: "#866E6B", fontWeight: "600", fontSize: 18 }}>
					Concert: Jakarta, Indonesia
				</Text>
			</View>
			<View
				style={{
					backgroundColor: colors.white,
					borderRadius: 28,
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontWeight: "600",
						fontSize: 20,
						paddingHorizontal: 20,
					}}
				>
					$45.99
				</Text>
			</View>
		</View>
	);
};

export default Title;
