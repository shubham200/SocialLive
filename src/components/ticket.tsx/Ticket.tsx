import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import SemiCircle from "../semicircle/Semicircle";
import TicketTitle from "../ticket-header/TicketTitle";
import TicketBarcode from "../barcode/TicketBarcode";
import TicketDetails from "../ticket-details/TicketDetails";

const Ticket = () => {
	return (
		<>
			<View
				style={{
					backgroundColor: colors.white,
					width: "92%",
					height: "55%",
					marginTop: 16,
					paddingHorizontal: 8,
					paddingVertical: 16,
					alignItems: "center",
					borderBottomLeftRadius: 32,
					borderBottomRightRadius: 32,
				}}
			>
				<TicketTitle
					title={"Oliver Tree Concert:Indonesia"}
					date={"29 December 2025"}
				/>
				<View
					style={{
						width: "84%",
						borderColor: "#909090",
						borderWidth: 1,
						borderStyle: "dashed",
						marginVertical: 20,
					}}
				/>
                <TicketDetails/>
				<View
					style={{
						width: "84%",
						borderColor: "#909090",
						borderWidth: 1,
						borderStyle: "dashed",
						marginVertical: 24,
					}}
				/>
                				<TicketBarcode userId={"1"} ticketId={"1"} />

			</View>
			<View
				style={{
					position: "absolute",
					left: 22,
					bottom: 224,
					transform: [{ rotate: "90deg" }],
				}}
			>
				<SemiCircle />
			</View>
			<View
				style={{
					position: "absolute",
					right: 22,
					bottom: 224,
					transform: [{ rotate: "270deg" }],
				}}
			>
				<SemiCircle />
			</View>
		</>
	);
};

export default Ticket;
