import { View, Text } from "react-native";
import React from "react";
import SLinearGradient from "../../components/linearGradient/SLinearGradient";
import BackHeader from "../../components/backHeader/BackHeader";
import { screenHeight, screenWidth } from "../../utils/utils";
import { colors } from "../../constants/colors";
import FastImage from "react-native-fast-image";
import { imageUrl } from "../../utils/data";
import Ticket from "../../components/ticket.tsx/Ticket";

const TicketScreen = ({ navigation }) => {
	return (
		<SLinearGradient>
			<View
				style={{
					marginTop: 132,
					alignItems: "center",
					backgroundColor: colors.expresso,
					width: screenWidth * 0.9,
					alignSelf: "center",
					borderRadius: 32,
					height: screenHeight * 0.8,
					padding: 16,
				}}
			>
				<FastImage
					style={{
						width: "100%",
						height: "32%",
						borderTopLeftRadius: 32,
						borderTopRightRadius: 32,
						alignSelf: "flex-start",
					}}
					source={{
						uri: imageUrl,
						priority: FastImage.priority.high,
					}}
					resizeMode={"contain"}
				/>
				<Ticket	/>
				
			</View>
			<View style={{ position: "absolute", top: 60, width: screenWidth }}>
				<BackHeader navigation={navigation} title="Tickets" />
			</View>
		</SLinearGradient>
	);
};

export default TicketScreen;
