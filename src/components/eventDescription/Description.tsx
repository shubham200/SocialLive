import { View, Text } from "react-native";
import React from "react";
import { CheckIcon, StarIcon } from "react-native-heroicons/micro";
import { colors } from "../../constants/colors";

const Description = () => {
	const SvgWithText = ({ detailPointer }) => {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 16,
					marginBottom: 16,
				}}
			>
				<View
					style={{
						backgroundColor: colors.expresso,
						padding: 8,
						borderRadius: 24,
						alignItems: "center",
						justifyContent: "center",
						marginRight: 16,
					}}
				>
					<CheckIcon size={16} color={colors.white} />
				</View>
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontSize: 16,
							color: colors.textExpresso,
							fontWeight: "500",
							flexWrap: "wrap",
							justifyContent: "flex-start",
							lineHeight: 20,
						}}
					>
						{detailPointer}
					</Text>
				</View>
			</View>
		);
	};
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 16,
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 20, color: colors.white, fontWeight: "600" }}>
					Description
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<StarIcon size={24} color="#FFD700" />
					<Text
						style={{
							fontSize: 16,
							fontWeight: "600",
							color: colors.white,
							marginLeft: 8,
						}}
					>
						4.5
					</Text>
				</View>
			</View>
			<SvgWithText
				detailPointer={
					"Oliver Tree is Singing Concert. Right place to attent a function"
				}
			/>
			<SvgWithText detailPointer={"Oliver Tree is Singing Concert."} />
			<SvgWithText
				detailPointer={
					"Oliver Tree is Singing Concert. Right place to attent a function"
				}
			/>
			<SvgWithText detailPointer={"Oliver Tree is Singing Concert."} />

			<SvgWithText
				detailPointer={
					"Oliver Tree is Singing Concert. Right place to attent a function"
				}
			/>
			<SvgWithText detailPointer={"Oliver Tree is Singing Concert."} />
		</View>
	);
};

export default Description;
