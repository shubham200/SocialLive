import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bars3BottomLeftIcon, MapPinIcon, ShareIcon} from 'react-native-heroicons/micro';
import { colors } from '../../constants/colors';
const Header = () => {
  return (
    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:16,marginBottom:16}}>
      <TouchableOpacity style={{backgroundColor:colors.expresso,padding:8,borderRadius:24}}>
        <Bars3BottomLeftIcon size={24} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <MapPinIcon size={24} color={colors.secondary} />
        <Text style={{marginLeft:8,fontSize:16,fontWeight:'600',color:colors.white}}>Malviya Nagar, Jaipur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:colors.expresso,padding:8,borderRadius:24}} >
        <Image source={require('../../assets/images/profile.png')} style={{width: 28, height: 28,borderRadius: 12,resizeMode:'cover'}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
