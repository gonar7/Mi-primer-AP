import React from 'react'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style = {{flex:1}} >
    {/* <HomeScreen/>  */}
    {/* <ContadorScreen/> */}
    <BoxObjectModelScreen/>
    </SafeAreaView>
    
    
  )
}
export default App;
