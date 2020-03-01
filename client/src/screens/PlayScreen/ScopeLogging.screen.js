import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Picker
} from 'native-base'
import { useForm } from 'react-hook-form'
import { Grid, Row } from 'react-native-easy-grid'
import { addScopeLog } from '../../redux/actions'

const mapStateToProps = state => ({
  scopeLogs: state.playState.scopeLogs
})

const mapDispatchToProps = dispatch => ({
  addScopeLog: scopeLog => dispatch(addScopeLog(scopeLog))
})

const ScopeLoggingScreen = ({ navigation, scopeLogs, addScopeLog }) => {
  const {
    register,
    unregister,
    setValue,
    handleSubmit,
    watch,
    errors,
    reset
  } = useForm()

  const onAdd = data => {
    const {
      slotMachine,
      betAmount,
      logType,
      freeSpinsAmount,
      randomFeatureTrigger,
      payoutAmount
    } = data
    addScopeLog({
      slotMachine: slotMachine || '',
      betAmount: betAmount || '',
      logType: logType || '',
      freeSpinsAmount: freeSpinsAmount || '',
      randomFeatureTrigger: randomFeatureTrigger || '',
      payoutAmount: payoutAmount || '',
      timeStamp: Date.now()
    })
    reset({
      slotMachine: '',
      betAmount: '',
      logType: 'Free Spins',
      freeSpinsAmount: '',
      randomFeatureTrigger: '',
      payoutAmount: ''
    })
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
                  placeholder='Enter slot machine...'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'slotMachine' }, { required: true })}
                  value={watch('slotMachine')}
                  onChangeText={text => setValue('slotMachine', text, true)}
                  keyboardType='default'
                />
              </Item>
              <Item>
                {errors.slotMachine && (
                  <Label>Please enter the slot machine.</Label>
                )}
              </Item>
              <Item rounded>
                <Input
                  placeholder='Enter bet amount...'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'betAmount' }, { required: true })}
                  value={watch('betAmount')}
                  onChangeText={text => setValue('betAmount', text, true)}
                  keyboardType='number-pad'
                />
              </Item>
              <Item>
                {errors.betAmount && (
                  <Label>Please enter the bet amount.</Label>
                )}
              </Item>
              <Item rounded>
                <Picker
                  selectedValue={watch('logType')}
                  onValueChange={value => {
                    setValue('logType', value, true)
                    switch (value) {
                      case 'Free Spins':
                        unregister('randomFeatureTrigger')
                        break
                      case 'Random Feature Trigger':
                        unregister('freeSpinsAmount')
                        break
                      case 'Jackpot':
                        unregister('freeSpinsAmount')
                        unregister('randomFeatureTrigger')
                        break
                      default:
                        break
                    }
                  }}
                  ref={register({ name: 'logType' }, { required: true })}
                >
                  <Picker.Item label='Free Spins' value='Free Spins' />
                  <Picker.Item label='Jackpot' value='Jackpot' />
                  <Picker.Item
                    label='Random Feature Trigger'
                    value='Random Feature Trigger'
                  />
                </Picker>
              </Item>
              <Item>
                {errors.logType && <Label>Please set the log type.</Label>}
              </Item>
              {watch('logType') === 'Free Spins' && (
                <>
                  <Item rounded>
                    <Input
                      placeholder='Enter # of free spins...'
                      style={{ textAlign: 'center' }}
                      ref={register(
                        { name: 'freeSpinsAmount' },
                        { required: true }
                      )}
                      value={watch('freeSpinsAmount')}
                      onChangeText={text =>
                        setValue('freeSpinsAmount', text, true)
                      }
                      keyboardType='number-pad'
                    />
                  </Item>
                  <Item>
                    {errors.freeSpinsAmount && (
                      <Label>Please enter the # of free spins.</Label>
                    )}
                  </Item>
                </>
              )}
              {watch('logType') === 'Random Feature Trigger' && (
                <>
                  <Item rounded>
                    <Input
                      placeholder='Enter random feature trigger...'
                      style={{ textAlign: 'center' }}
                      ref={register(
                        { name: 'randomFeatureTrigger' },
                        { required: true }
                      )}
                      value={watch('randomFeatureTrigger')}
                      onChangeText={text =>
                        setValue('randomFeatureTrigger', text, true)
                      }
                      keyboardType='default'
                    />
                  </Item>
                  <Item>
                    {errors.randomFeatureTrigger && (
                      <Label>Please enter the random feature trigger.</Label>
                    )}
                  </Item>
                </>
              )}
              <Item rounded>
                <Input
                  placeholder='Enter payout amount...'
                  style={{ textAlign: 'center' }}
                  ref={register({ name: 'payoutAmount' }, { required: true })}
                  value={watch('payoutAmount')}
                  onChangeText={text => setValue('payoutAmount', text, true)}
                  keyboardType='number-pad'
                />
              </Item>
              <Item>
                {errors.payoutAmount && (
                  <Label>Please enter the payout amount.</Label>
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
              <Button
                success
                style={{ width: 150, justifyContent: 'center' }}
                onPress={handleSubmit(onAdd)}
              >
                <Text>Add</Text>
              </Button>
              <Button
                success
                style={{ width: 150, justifyContent: 'center', marginTop: 10 }}
                onPress={() => navigation.navigate('PlayLogging')}
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

export default connect(mapStateToProps, mapDispatchToProps)(ScopeLoggingScreen)
