import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens'

const Stack = createStackNavigator()

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Slots Tracker'}} />
  </Stack.Navigator>
)

export default HomeNavigator

