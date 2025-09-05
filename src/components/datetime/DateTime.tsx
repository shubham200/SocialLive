import { View, Text } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/micro";
import { colors } from "../../constants/colors";

const DateTime = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				padding: 24,
				alignItems: "center",
			}}
		>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<View>
					<Text
						style={{ fontWeight: "600", fontSize: 24, color: colors.white }}
					>
						29
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: colors.textExpresso,
							fontWeight: "500",
						}}
					>
						December
					</Text>
				</View>
				<View style={{ marginLeft: 28 }}>
					<Text
						style={{ fontWeight: "600", fontSize: 24, color: colors.white }}
					>
						Tuesday
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: colors.textExpresso,
							fontWeight: "500",
						}}
					>
						10:00 PM - End
					</Text>
				</View>
			</View>
			<View
				style={{
					backgroundColor: colors.expresso,
					borderRadius: 28,
					padding: 12,
				}}
			>
				<CalendarDaysIcon size={28} color="white" />
			</View>
		</View>
	);
};

export default DateTime;
