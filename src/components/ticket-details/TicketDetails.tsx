import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const TicketDetails = () => {
	return (
		<View
			style={{
				width: "84%",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View>
					<Text style={{ color: "#909090", fontWeight: "500", fontSize: 16 }}>
						Date
					</Text>
					<Text
						style={{
							color: colors.black,
							fontWeight: "500",
							fontSize: 16,
							marginTop: 8,
						}}
					>
						20 Dec 2025
					</Text>
				</View>
				<View>
					<Text style={{ color: "#909090", fontWeight: "500", fontSize: 16 }}>
						Date
					</Text>
					<Text
						style={{
							color: colors.black,
							fontWeight: "500",
							fontSize: 16,
							marginTop: 8,
						}}
					>
						20 Dec 2025
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 20,
				}}
			>
				<View>
					<Text style={{ color: "#909090", fontWeight: "500", fontSize: 16 }}>
						Date
					</Text>
					<Text
						style={{
							color: colors.black,
							fontWeight: "500",
							fontSize: 16,
							marginTop: 8,
						}}
					>
						20 Dec 2025
					</Text>
				</View>
				<View>
					<Text style={{ color: "#909090", fontWeight: "500", fontSize: 16 }}>
						Date
					</Text>
					<Text
						style={{
							color: colors.black,
							fontWeight: "500",
							fontSize: 16,
							marginTop: 8,
						}}
					>
						20 Dec 2025
					</Text>
				</View>
			</View>
		</View>
	);
};

export default TicketDetails;
