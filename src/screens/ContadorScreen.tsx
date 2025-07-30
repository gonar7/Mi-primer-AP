import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {
    //hook useState, para manejar el estado del contador

    const [contador, setContador] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {contador}</Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
                style={[styles.button, styles.locationBL]}>
                <Text style={styles.textButton}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                style={[styles.button, styles.locationBR]}>
                <Text style={styles.textButton}>-1</Text>
            </TouchableOpacity>
        </View>
    )
}
// Gestion de estilos mediante stylesheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        top: -60
    },
    button: {
        backgroundColor: 'blue',
        width:50,
        height:50,
        borderRadius: 50
    },
    textButton:{
        fontSize:23,
        color: 'white',
        fontWeight:'bold',
        textAlign:'center',

    },
    locationBL:{
        position:'absolute',
        bottom:10, 
        left:10

    },
    locationBR:{
        position:'absolute',
        bottom:10, 
        right:10

    }
})