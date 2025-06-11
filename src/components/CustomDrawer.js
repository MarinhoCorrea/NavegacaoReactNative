import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
const CustomDrawer = (props) => {
  return (
    <View style={{flex:1,backgroundColor: '#BDBDBD'}}>
      <DrawerContentScrollView
        {...props}>
        <ImageBackground
          source={require('../../assets/User.png')}
          style={{height:80,width:80,borderRadius:40,marginBottom:10}}
        />
        <Text style={{color:'#fff',fontSize:18,fontFamily:'Roboto-Medium',marginBottom:20}}>
          {AsyncStorage.getItem('Nome')}
        </Text>
        <View style={{flex:1,backgroundColor:'#fff',padding:10}}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>
    </View>
  );
}
export default CustomDrawer;