import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setAuth } from '../redux/actions'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigator, HomeNavigator, Mainavigator } from './'
import auth from '@react-native-firebase/auth'

const Stack = createStackNavigator()

const mapStateToProps = state => ({
  user: state.authState.user,
})

const mapDispatchToProps = dispatch => ({
  setAuth: user => dispatch(setAuth(user)),
})

const MainNavigator = ({ user, setAuth }) => {
  const onAuthStateChange = user => {
    setAuth(user)
  }

  useEffect(() => {
    const authStateListener = auth().onAuthStateChanged(onAuthStateChange)
    return authStateListener
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={{ title: 'none' }}>
        {user === null ? (
          <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
        ) : (
          <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator)
