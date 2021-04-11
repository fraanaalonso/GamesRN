import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Navigator';
import { StackNav } from './src/navigation/StackScreens';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


export default App;
