import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigator } from './navigators'

const Stack = createStackNavigator()

const App = () => {
  const [user, setUser] = useState({ name: 'AJ', email: 'aj@email.ca' })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Auth' component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
