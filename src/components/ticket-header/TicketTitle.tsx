import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const TicketTitle = ({ title, date }) => {
	return (
		<View
			style={{
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "600",
					color: colors.black,
					textAlign: "center",
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "600",
					color: colors.black,
					flexWrap: "wrap",
					textAlign: "center",
				}}
			>
				{date}
			</Text>
		</View>
	);
};

export default TicketTitle;
