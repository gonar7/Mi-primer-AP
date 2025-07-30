import React from 'react'
import { Text, View } from 'react-native'

export const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                textAlign: 'center'
            }}>Hola mundo</Text>
        </View>
    )
}
