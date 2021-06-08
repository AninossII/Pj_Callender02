import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './App/screens/LoginScreen';

export default function App (){
    
  return ( 
    <LoginScreen/>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
  },
})
