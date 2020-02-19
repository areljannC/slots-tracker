import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={70}>
          <View style={styles.inputFieldsContainer}>
            <Input
              placeholder='First Name'
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            <Input
              placeholder='Last Name'
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
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
          </View>
        </Row>
        <Row size={30}>
          <View style={styles.authButtonContainer}>
            <Button
              title='Sign Up'
              buttonStyle={styles.button}
              onPress={() => {}}
            />
          </View>
        </Row>
      </Grid>
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

export default SignUpScreen
