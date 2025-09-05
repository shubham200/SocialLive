import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/micro";
import { colors } from "../../constants/colors";

const BackHeader = ({ navigation,title="Oliver Tree" }) => {
	const onBackPress = () => {
		navigation.goBack();
	};
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 24,
					alignItems: "center",
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor:colors.lightShade,
						padding: 8,
						borderRadius: 24,
					}}
					activeOpacity={0.5}
					onPress={onBackPress}
				>
					<ChevronLeftIcon size={24} color={colors.white} />
				</TouchableOpacity>
				<Text style={{ fontSize: 24, fontWeight: "900", color: colors.white }}>
					{title}
				</Text>
				<TouchableOpacity
					style={{
						backgroundColor: "#866E6B",
						padding: 8,
						borderRadius: 24,
					}}
					activeOpacity={0.5}
				>
					<ShareIcon size={24} color={colors.white} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BackHeader;
