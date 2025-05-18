import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const Cards = ({ item,onPress }) => {
	return (
		<TouchableOpacity
			style={{
				width: "90%",
				height: 320,
				flexDirection: "column",
				alignSelf: "center",
				borderRadius: 32,
			}}
            activeOpacity={0.5}
            onPress={onPress}
		>
			<FastImage
				style={{
					width: "100%",
					height: "75%",
					borderTopLeftRadius: 32,
					borderTopRightRadius: 32,
					alignSelf: "flex-start",
				}}
				source={{
					uri: item?.image,
					priority: FastImage.priority.high,
				}}
				resizeMode={"cover"}
			/>
			<View
				style={{
					...StyleSheet.absoluteFillObject,
					backgroundColor: "rgba(0,0,0,0.4)",
					width: "100%",
					height: "75%",
					borderTopLeftRadius: 32,
					borderTopRightRadius: 32,
				}}
			/>

			<View style={styles.wrapper}>
				<View style={styles.glassCard}>
					<View
						style={{
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "flex-start",
							width: "75%",
						}}
					>
						<Text style={styles.title} numberOfLines={1}>
							{item?.name}
						</Text>
						<Text style={styles.subtitle} numberOfLines={1}>
							{`${item?.location} - ${item?.formattedTime}`}
						</Text>
					</View>
					<View>
						<Text style={styles.note}>{item?.ticketPrice}</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					position: "absolute",
					top: 16,
					right: 16,
					width: 64,
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: colors.black,
						backgroundColor: colors.white,
						padding: 16,
						borderRadius: 120,
						flexWrap: "wrap",
						fontWeight: "700",
						textAlign: "center",
					}}
				>
					{item?.formattedDate}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Cards;
