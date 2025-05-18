import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BoltIcon } from "react-native-heroicons/micro";
import { colors } from "../../constants/colors";
import { categories } from "../../utils/data";

const Category = ({ item, selectedItem, setSelectedItem }) => {
	// console.log("isActive",isActive)
	const handleCategorySelection = () => {
		if (selectedItem?.categorySlug !== item?.categorySlug) {
			setSelectedItem(item);
		}
	};
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor:
					selectedItem?.categorySlug === item?.categorySlug
						? colors.secondary
						: colors.expresso,
				padding: 16,
				borderRadius: 32,
				alignSelf: "flex-start",
				marginRight: 16,
			}}
			onPress={handleCategorySelection}
		>
			<View
				style={{ backgroundColor: colors.white, padding: 8, borderRadius: 24 }}
			>
				<BoltIcon size={24} color={selectedItem?.categorySlug === item?.categorySlug
						? colors.secondary
						: colors.black} />
			</View>
			<Text
				style={{
					color: colors.white,
					fontSize: 16,
					fontWeight: "600",
					marginLeft: 12,
				}}
			>
				{item.categoryName}
			</Text>
		</TouchableOpacity>
	);
};

export default Category;
