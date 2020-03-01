import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartSessionScreen from './StartSession.screen'
import EnterCasinoScreen from './EnterCasino.screen'
import ScopeLoggingScreen from './ScopeLogging.screen'
import PlayLoggingScreen from './PlayLogging.screen'
import ResultsScreen from './Results.screen'

const Stack = createStackNavigator()

const PlayScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='StartSession'
      component={StartSessionScreen}
      options={{ title: 'Session' }}
    />
    <Stack.Screen
      name='EnterCasino'
      component={EnterCasinoScreen}
      options={{ title: 'Enter Casino' }}
    />
    <Stack.Screen
      name='ScopeLogging'
      component={ScopeLoggingScreen}
      options={{ title: 'Scope Logging' }}
    />
    <Stack.Screen
      name='PlayLogging'
      component={PlayLoggingScreen}
      options={{ title: 'Play Logging' }}
    />
    <Stack.Screen
      name='Results'
      component={ResultsScreen}
      options={{ title: 'Results' }}
    />
  </Stack.Navigator>
)

export default PlayScreen
