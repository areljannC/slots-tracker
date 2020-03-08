import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { userSignIn } from '../../redux/actions'
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
  userSignIn: (email, password) => dispatch(userSignIn(email, password))
})

const SignInScreen = ({ navigation, isLoading, userSignIn }) => {
  const { register, setValue, handleSubmit, errors } = useForm()

  let passwordInputRef = useRef()

  const onSubmit = data => {
    userSignIn(data.email, data.password)
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
                  placeholder='Email'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'email' }, { required: true })}
                  onChangeText={text => setValue('email', text, true)}
                  keyboardType='email-address'
                  onSubmitEditing={() => {
                    passwordInputRef._root.focus()
                  }}
                  returnKeyType='next'
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
                  ref={input => {
                    passwordInputRef = input
                  }}
                />
              </Item>
              <Item>
                {errors.password && <Label>Password is required.</Label>}
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
              <Button
                success
                style={{ width: 150, justifyContent: 'center' }}
                onPress={handleSubmit(onSubmit)}
              >
                <Text>Sign In</Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
