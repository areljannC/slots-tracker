import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthScreen, SignInScreen, SignUpScreen } from '../screens'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Auth' component={AuthScreen} options={{title: 'Slots Tracker'}} />
    <Stack.Screen name='SignIn' component={SignInScreen} options={{title: 'Sign In'}} />
    <Stack.Screen name='SignUp' component={SignUpScreen} options={{title: 'Sign Up'}} />
  </Stack.Navigator>
)

export default AuthNavigator
