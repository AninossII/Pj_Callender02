import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './App/screens/LoginScreen';
import HomeScreen from './App/screens/HomeScreen';

export default function App (){
    
  return ( 
    <HomeScreen/>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
  },
})
