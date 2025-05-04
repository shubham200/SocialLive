import { Dimensions } from "react-native";

export const screenHeight=Dimensions.get('window').height
export const screenWidth=Dimensions.get('window').width

export const isSmallScreen = screenWidth < 375;
export const isLargeScreen = screenWidth > 428;