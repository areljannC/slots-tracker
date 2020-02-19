import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigator, MainNavigator } from './navigators'

const Stack = createStackNavigator()

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode={{ title: 'none' }}>
        <Stack.Screen name='Auth' component={AuthNavigator} />
        <Stack.Screen name='Main' component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
