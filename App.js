import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './src/pages/HomeScreen'
import Questoes from './src/pages/Questoes'
import Final from './src/pages/Final'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: { backgroundColor: "#8e4dff" },
            headerTintColor: '#fff',
            headerBackTitleVisible: false
        }}>
          <Stack.Screen options={{ title: "Trivia" }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ title: "Questão" }} name="Questao" component={Questoes} />
          <Stack.Screen options={{ title: "Parabains" }} name="Final" component={Final} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}