import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.authButtonsContainer}>
        <Button
          title='Sign In'
          buttonStyle={styles.button}
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        />
        <Button
          title='Sign Up'
          buttonStyle={styles.button}
          onPress={() => {
            navigation.navigate('SignUp')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    marginBottom: 10,
  },
})

export default AuthScreen
