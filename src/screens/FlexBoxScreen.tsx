import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.box1}>Caja 1</Text>
        <Text style = {styles.box2}>Caja 2</Text>
        <Text style = {styles.box3}>Caja 3</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#415E72'
    },
    box1:{
        flex:1,
        borderWidth:1,
        borderColor: 'white',
        fontSize:30
    },
    box2:{
        flex:1,
        borderWidth:1,
        borderColor: 'white',
        fontSize:30
    },
    box3:{
        flex:1,
        borderWidth:1,
        borderColor: 'white',
        fontSize:30
    },
})