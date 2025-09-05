import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const AboutEvent = () => {
	return (
		<View style={{ padding: 24 }}>
			<Text
				style={{
					color: colors.textExpresso,
					fontSize: 16,
					lineHeight: 24,
					fontWeight: "500",
				}}
			>
				<Text style={{ color: colors.white, fontWeight: "600", fontSize: 16 }}>
					About this event:{" "}
				</Text>
				Vilen the soulful singer-songwriter from Delhi, is all set to take the
				stage with his much-awaited India Tour, curated by Dark Music Company,
				Experience Entertinment, and Empower.
			</Text>
		</View>
	);
};

export default AboutEvent;
