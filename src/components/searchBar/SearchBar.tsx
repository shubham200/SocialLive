import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/micro';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MagnifyingGlassIcon size={24} color={colors.white} />

        {isFocused ? (
          <TextInput
            style={styles.input}
            placeholder="Search all events..."
            placeholderTextColor={colors.textExpresso}
            value={searchText}
            onChangeText={setSearchText}
            onBlur={() => setIsFocused(false)}
            autoFocus
          />
        ) : (
          <TouchableOpacity
            onPress={() => setIsFocused(true)}
            activeOpacity={0.8}
            style={{ marginLeft: 16 }}
          >
            <Text style={{ color: colors.textExpresso, fontSize: 16 }}>
              Search all events...
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <AdjustmentsHorizontalIcon size={24} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '90%',
    backgroundColor: colors.expresso,
    alignSelf: 'center',
    borderRadius: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
});

export default SearchBar;
