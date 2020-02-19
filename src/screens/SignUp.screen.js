import React from 'react'
import { connect } from 'react-redux'
import { userSignUp } from '../redux/actions'
import { useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'

const mapDispatchToProps = dispatch => ({
  userSignUp: (firstName, lastName, email, password) =>
    dispatch(userSignUp(firstName, lastName, email, password)),
})

const SignUpScreen = ({ navigation, userSignUp }) => {
  const { register, setValue, handleSubmit, errors, watch } = useForm()

  const onSubmit = data => {
    const { firstName, lastName, email, password } = data
    userSignUp(firstName, lastName, email, password)
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={70}>
          <View style={styles.inputFieldsContainer}>
            <Input
              ref={register({ name: 'firstName' }, { required: true })}
              onChangeText={text => setValue('firstName', text, true)}
              placeholder='First Name'
              keyboardType='default'
            />
            {errors.firstName && <Text>First name is required.</Text>}
            <Input
              ref={register({ name: 'lastName' }, { required: true })}
              onChangeText={text => setValue('lastName', text, true)}
              placeholder='Last Name'
              keyboardType='default'
            />
            {errors.lastName && <Text>Last name is required.</Text>}
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
            <Input
              ref={register(
                { name: 'confirmPassword' },
                {
                  required: true,
                  validate: value => {
                    return value === watch('password')
                  },
                }
              )}
              onChangeText={text => setValue('confirmPassword', text, true)}
              placeholder='Confirm Password'
              keyboardType='default'
              secureTextEntry={true}
            />
            {errors.confirmPassword && (
              <Text>Please confirm your password.</Text>
            )}
          </View>
        </Row>
        <Row size={30}>
          <View style={styles.authButtonContainer}>
            <Button
              title='Sign Up'
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

export default connect(null, mapDispatchToProps)(SignUpScreen)
