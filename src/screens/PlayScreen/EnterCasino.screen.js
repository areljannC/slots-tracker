import React from 'react'
import { connect } from 'react-redux'
import { setCasino } from '../../redux/actions'
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
  Icon
} from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'
import Geolocation from '@react-native-community/geolocation'
import { isEmpty } from '../../utils'

const mapDispatchToProps = dispatch => ({
  setCasino: casino => dispatch(setCasino(casino))
})

const EnterCasinoScreen = ({ navigation, setCasino }) => {
  const { register, setValue, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {
    setCasino(data.casino)
    navigation.navigate('ScopeLogging')
  }

  const getCurrentLocation = () => {
    // Geolocation.getCurrentPosition(location => {
    //   console.log(JSON.stringify(location))
    // })
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
                  placeholder='Enter casino...'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'casino' }, { required: true })}
                  onChangeText={text => setValue('casino', text, true)}
                  keyboardType='default'
                />
              </Item>
              <Item>
                {errors.casino && <Label>Please enter a casino.</Label>}
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
                disabled
                outline
                style={{ width: 150, justifyContent: 'center' }}
                onPress={getCurrentLocation}
              >
                <Icon name='location-on' type='MaterialIcons' />
              </Button>
              <Button
                success
                disabled={isEmpty(watch('casino'))}
                style={{ width: 150, justifyContent: 'center', marginTop: 10 }}
                onPress={handleSubmit(onSubmit)}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}

export default connect(null, mapDispatchToProps)(EnterCasinoScreen)
