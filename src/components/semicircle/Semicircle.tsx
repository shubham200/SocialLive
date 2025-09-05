import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const SemiCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.semicircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  semicircle: {
    width: 40,
    height: 25,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: colors.expresso,
    overflow: 'hidden',
  },
});

export default SemiCircle;
