import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userSignIn } from '../redux/actions'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'

const mapDispatchToProps = dispatch => ({
  userSignIn: () => dispatch(userSignIn())
})

const SignInScreen = ({ navigation, userSignIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={70}>
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
          </View>
        </Row>
        <Row size={30}>
          <View style={styles.authButtonContainer}>
            <Button
              title='Sign In'
              buttonStyle={styles.button}
              onPress={userSignIn}
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

export default connect(null, mapDispatchToProps)(SignInScreen)
