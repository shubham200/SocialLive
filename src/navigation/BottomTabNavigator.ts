import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Screens
import HomeScreen from '../screens/home-screen/HomeScreen';
import FavouriteScreen from '../screens/favourite-screen/FavouriteScreen';
import ProfileScreen from '../screens/profile-screen/ProfileScreen';

// Tab parameter list
export type BottomTabParamList = {
  Home: undefined;
  Favourites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const icons: Record<string, ImageSourcePropType> = {
  home: require('../assets/png/home.png'),
  home_focused: require('../assets/png/home_focused.png'),
  profile: require('../assets/png/profile.png'),
  profile_focused: require('../assets/png/profile_focused.png'),
  heart: require('../assets/png/heart.png'),
  heart_focused: require('../assets/png/heart_focused.png'),
};

const BottomTabNavigator: React.FC = () => {
  const getTabBarIcon = (routeName: keyof BottomTabParamList, focused: boolean) => {
    const iconMap = {
      Home: focused ? 'home_focused' : 'home',
      Favourites: focused ? 'heart_focused' : 'heart',
      Profile: focused ? 'profile_focused' : 'profile',
    };

    return (
      <Image
        source={icons[iconMap[routeName]]}
        style={styles.icon}
        resizeMode="cover"
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={FavouriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    borderRadius: 12,
  },
});

export default BottomTabNavigator;