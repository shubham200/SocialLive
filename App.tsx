
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';
import { screenHeight, screenWidth } from './src/utils/utils';
import AppNavigator from './src/navigation/AppNavigator';



function App(): React.JSX.Element {

  const safePadding = '5%';

  return (
    <AppNavigator />

  );
}


export default App;
