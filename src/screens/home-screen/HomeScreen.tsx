import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { screenHeight, screenWidth } from '../../utils/utils';
import { RootStackParamList } from '../../navigation/Types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Details', { itemId: 123 })}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '5%',
  },
  title: {
    color: 'yellow',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default HomeScreen;