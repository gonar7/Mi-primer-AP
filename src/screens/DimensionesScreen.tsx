import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionesScreen = () => {
    // hook useWindowDimension permite obtener las dimesiones de la pantalla
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.boxBlue, width:width*0.30}}></View>
                <View style={styles.boxOrange}></View>
            </View>
            <Text style = {styles.textDimensions}>Width: {width} - Heigth:{height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        backgroundColor: 'red'
    },
    boxBlue: {
        backgroundColor: 'blue',
        // width:80,  // unidades
        //width: '50%',
        // height:80
        height: '50%'
    },
    boxOrange: {
        backgroundColor: 'orange'
    },
    textDimensions:{
        fontSize:25,
        fontWeight:'bold'
    }
})