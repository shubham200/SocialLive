import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackHeader from "../../components/backHeader/BackHeader";
import { colors } from "../../constants/colors";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";
import { screenHeight, screenWidth } from "../../utils/utils";
import Title from "../../components/title/Title";
import DateTime from "../../components/datetime/DateTime";
import Button from "../../components/buttons/Button";
import { HeartIcon } from "react-native-heroicons/micro";
import AboutEvent from "../../components/aboutEvent/AboutEvent";
import Description from "../../components/eventDescription/Description";

const EventDetails = ({ navigation }) => {
	const onButtonPress=()=>{
		navigation.navigate("TicketScreen")
	}
	return (
		<LinearGradient
			colors={["#46180F", "#230C08"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={{ flex: 1 }}
		>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ paddingBottom: 200 }}
			>
				{/* IMAGE + GRADIENT */}
				<View style={{ position: "relative" }}>
					<FastImage
						source={{
							uri: "https://images.unsplash.com/photo-1550560888-1009463ef168?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlcnN8ZW58MHx8MHx8fDA%3D",
							priority: FastImage.priority.high,
						}}
						style={{
							width: screenWidth,
							height: screenHeight * 0.55,
						}}
					/>

					<LinearGradient
						colors={[
							"transparent",
							"rgba(19, 10, 7, 0.1)",
							"rgba(19, 10, 7, 0.25)",
							"rgba(19, 10, 7, 0.5)",
							"rgba(19, 10, 7, 0.75)",
							"rgba(19, 10, 7, 0.5)",
							"rgba(19, 10, 7, 0.25)",
						]}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0.5, y: 1 }}
						style={{
							position: "absolute",
							bottom: -25,
							left: 0,
							right: 0,
							height: 100,
						}}
					/>
				</View>
				<View style={{ marginTop: -50 }}>
					<Title />
					<DateTime />
					<AboutEvent />
					<Description/>
				</View>
			</ScrollView>

			{/* BOTTOM BAR */}
			<View
				style={{
					position: "absolute",
					bottom: 4,
					width: screenWidth,
					alignItems: "center",
				}}
			>
				<LinearGradient
					colors={[
						"rgba(19, 10, 7, 0.1)",
						"rgba(19, 10, 7, 0.25)",
						"rgba(19, 10, 7, 0.5)",
						"rgba(19, 10, 7, 0.75)",
						"rgba(19, 10, 7, 0.85)",
						"#130A07",
					]}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={{
						position: "absolute",
						bottom: -4,
						left: 0,
						right: 0,
						height: 120,
						paddingHorizontal: 24,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: colors.expresso,
							padding: 12,
							borderRadius: 36,
						}}
					>
						<HeartIcon size={44} color={colors.white} />
					</TouchableOpacity>
					<Button onPress={onButtonPress} />
				</LinearGradient>
			</View>

			{/* BACK BUTTON */}
			<View style={{ position: "absolute", top: 60, width: screenWidth }}>
				<BackHeader navigation={navigation} />
			</View>
		</LinearGradient>
	);
};

export default EventDetails;
