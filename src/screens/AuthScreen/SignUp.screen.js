import React from 'react'
import { connect } from 'react-redux'
import { userSignUp } from '../../redux/actions'
import { useForm } from 'react-hook-form'
import {
  Container,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Spinner
} from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'

const mapStateToProps = state => ({
  isLoading: state.authState.isLoading
})

const mapDispatchToProps = dispatch => ({
  userSignUp: (firstName, lastName, email, password) =>
    dispatch(userSignUp(firstName, lastName, email, password))
})

const SignUpScreen = ({ navigation, isLoading, userSignUp }) => {
  const { register, setValue, handleSubmit, errors, watch } = useForm()

  const onSubmit = data => {
    const { firstName, lastName, email, password } = data
    userSignUp(firstName, lastName, email, password)
  }

  if (isLoading) {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Spinner />
        </View>
      </Container>
    )
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Grid>
          <Row size={70}>
            <Form
              style={{
                width: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Item rounded>
                <Input
                  placeholder='First Name'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'firstName' }, { required: true })}
                  onChangeText={text => setValue('firstName', text, true)}
                  keyboardType='default'
                />
              </Item>
              <Item>
                {errors.firstName && <Label>First name is required.</Label>}
              </Item>
              <Item rounded>
                <Input
                  placeholder='Last Name'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'lastname' }, { required: true })}
                  onChangeText={text => setValue('lastname', text, true)}
                  keyboardType='default'
                />
              </Item>
              <Item>
                {errors.lastname && <Label>Last name is required.</Label>}
              </Item>
              <Item rounded>
                <Input
                  placeholder='Email'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'email' }, { required: true })}
                  onChangeText={text => setValue('email', text, true)}
                  keyboardType='email-address'
                />
              </Item>
              <Item>{errors.email && <Label>Email is required.</Label>}</Item>
              <Item rounded>
                <Input
                  placeholder='Password'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'password' }, { required: true })}
                  onChangeText={text => setValue('password', text, true)}
                  keyboardType='default'
                  secureTextEntry={true}
                />
              </Item>
              <Item>
                {errors.password && <Label>Password is required.</Label>}
              </Item>
              <Item rounded>
                <Input
                  placeholder='Confirm Password'
                  style={{ textAlign: 'center' }}
                  ref={register(
                    { name: 'confirmPassword' },
                    {
                      required: true,
                      validate: value => {
                        return value === watch('password')
                      }
                    }
                  )}
                  onChangeText={text => setValue('confirmPassword', text, true)}
                  keyboardType='default'
                  secureTextEntry={true}
                />
              </Item>
              <Item>
                {errors.confirmPassword && (
                  <Text>Please confirm your password.</Text>
                )}
              </Item>
            </Form>
          </Row>
          <Row size={30}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button onPress={handleSubmit(onSubmit)}>
                <Text>Sign Up</Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
