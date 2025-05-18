import { View, Text } from "react-native";
import React from "react";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/micro";

const BackHeader = () => {
	return (
		<View>
			<View>
				<ChevronLeftIcon size={24} color={"#000"} />
				<ShareIcon size={24} color={"#000"} />
			</View>
		</View>
	);
};

export default BackHeader;
