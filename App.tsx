import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./src/constants/colors";

function App(): React.JSX.Element {
	return <AppNavigator />;
}

export default App;
