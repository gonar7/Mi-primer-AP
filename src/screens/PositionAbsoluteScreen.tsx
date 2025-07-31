import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionAbsoluteScreen = () => {
  return (
  <View style ={styles.container}>
    <View style={styles.boxBlue}></View>
    <View style={styles.boxYellow}></View>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      //width:400,
      //height:400,
      backgroundColor:'black', 
      //justifyContent: 'center',
      //alignItems:'center'
    },
    boxBlue:{
        width:80,
        height:80,
        backgroundColor: 'blue',
        borderWidth:7,
        borderColor:'white',
        position:'absolute',
        top:0,
        //bottom:30,
        //left:20
        right:0
    },
    boxYellow:{
        width:80,
        height:80,
        backgroundColor: 'yellow',
        borderWidth:7,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right:0
    }
})