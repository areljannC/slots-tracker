import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = () => {
    Alert.alert(
      'Sign In',
      `${email} ${password}`,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputFieldsContainer}>
        <Input
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Button
          title='Sign In'
          buttonStyle={styles.button}
          onPress={onSignIn}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputFieldsContainer: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    marginTop: 100,
    marginBottom: 50,
  },
})

export default SignInScreen
