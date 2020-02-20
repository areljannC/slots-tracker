import React from 'react'
import { connect } from 'react-redux'
import { userSignIn } from '../redux/actions'
import { useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'

const mapDispatchToProps = dispatch => ({
  userSignIn: (email, password) => dispatch(userSignIn(email, password)),
})

const SignInScreen = ({ navigation, userSignIn }) => {
  const { register, setValue, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    const { email, password } = data
    userSignIn(email, password)
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={70}>
          <View style={styles.inputFieldsContainer}>
            <Input
              ref={register({ name: 'email' }, { required: true })}
              onChangeText={text => setValue('email', text, true)}
              placeholder='Email'
              keyboardType='email-address'
            />
            {errors.email && <Text>Email is required.</Text>}
            <Input
              ref={register({ name: 'password' }, { required: true })}
              onChangeText={text => setValue('password', text, true)}
              placeholder='Password'
              keyboardType='default'
              secureTextEntry={true}
            />
            {errors.password && <Text>Password is required.</Text>}
          </View>
        </Row>
        <Row size={30}>
          <View style={styles.authButtonContainer}>
            <Button
              title='Sign In'
              buttonStyle={styles.button}
              onPress={handleSubmit(onSubmit)}
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
