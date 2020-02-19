import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigator, MainNavigator } from './navigators'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={{ title: 'none' }}>
      <Stack.Screen name='Auth' component={AuthNavigator} />
      <Stack.Screen name='Main' component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
