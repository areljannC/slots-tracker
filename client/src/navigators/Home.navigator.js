import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { OverviewScreen, PlayScreen, SettingsScreen } from '../screens'
import { Icon } from 'native-base'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = ''

        switch (route.name) {
          case 'Overview':
            iconName = 'insert-chart'
            break
          case 'Play':
            iconName = 'casino'
            break
          case 'Settings':
            iconName = 'settings'
            break
          default:
            break
        }
        return <Icon name={iconName} type='MaterialIcons' style={{color}} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}
    initialRouteName='Play'
  >
    <Tab.Screen name='Overview' component={OverviewScreen} />
    <Tab.Screen name='Play' component={PlayScreen} />
    <Tab.Screen name='Settings' component={SettingsScreen} />
  </Tab.Navigator>
)

export default HomeNavigator
