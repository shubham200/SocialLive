import React from "react";
import {
	View,
	FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Types";
import { styles } from "./styles";
import Header from "../../components/header/Header";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "../../components/searchBar/SearchBar";
import Categories from "../../components/categories/Categories";
import Cards from "../../components/cards/Cards";
import { categories, events } from "../../utils/data";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();
const onCardPress=({item})=>{
  navigation.navigate('EventDetails')
}
	return (
		<LinearGradient
			colors={["#46180F", "#230C08"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.mainPage}
		>
			<View style={{flex:1}}>
				<Header />
				<SearchBar />
				<Categories categories={categories} />
				<FlatList
					data={events}
          keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
							<Cards item={item} onPress={()=>onCardPress(item)} />
					)}
          contentContainerStyle={{ paddingBottom: 100 }}
          ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
				/>
			</View>
		</LinearGradient>
	);
};

export default HomeScreen;
