import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Barcode from "react-native-barcode-builder";
import Svg, { Circle } from "react-native-svg";

interface TicketBarcodeProps {
	userId: string;
	ticketId: string;
}

const TicketBarcode: React.FC<TicketBarcodeProps> = ({ userId, ticketId }) => {
	const barcodeValue = `${userId}-${ticketId}-${Date.now()}`;

	return (
		<View style={styles.container}>
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 40,
	},
	label: {
		fontSize: 18,
		marginBottom: 10,
	},
	codeText: {
		marginTop: 10,
		fontSize: 12,
		// color: 'gray',
	},
});

export default TicketBarcode;
