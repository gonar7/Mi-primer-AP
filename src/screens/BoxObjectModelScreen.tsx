import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Objetc Model</Text>
        </View>
    )
}

// Gestio de estilos con stylesheet
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue'
    },
    title:{
        fontSize:25,
        //width:100,
        borderWidth:7
    }
})