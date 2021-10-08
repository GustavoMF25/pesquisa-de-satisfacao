import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/home'
import Perguntas from './src/pages/perguntas'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Home} />
        <Stack.Screen name="Perguntas" component={Perguntas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}