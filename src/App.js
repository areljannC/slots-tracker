import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Auth, SignIn, SignUp, Home } from './screens'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Auth' component={Auth} options={{title: 'Slots Tracker'}} />
        <Stack.Screen name='Home' component={Home} options={{title: 'Slots Tracker'}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{title: 'Sign In'}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{title: 'Sign Up'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
