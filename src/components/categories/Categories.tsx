import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../constants/colors';
import Category from '../category/Category';

const Categories = ({categories}) => {
  const [selectedItem,setSelectedItem]=useState(categories?.[0])

  const renderCategory = ({item}) => {
    console.log("item",item)
    return <Category  item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />;
  };

  return (
    <View style={{width: '100%', padding: 24, marginTop: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 24,
        }}>
        <Text style={{color: colors.white, fontSize: 16, fontFamily: '500'}}>
          Upcoming events
        </Text>
        <TouchableOpacity>
          <Text style={{color: colors.white, fontSize: 16, fontFamily: '500'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Categories;
