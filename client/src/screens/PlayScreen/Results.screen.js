import React from 'react'
import { connect } from 'react-redux'
import { submitLogs, clearData } from '../../redux/actions'
import {
  Container,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Spinner
} from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'

const mapStateToProps = state => ({
  isLoading: state.playState.isLoading,
  scopeLogs: state.playState.scopeLogs,
  playLogs: state.playState.playLogs
})

const mapDispatchToProps = dispatch => ({
  submitLogs: (scopeLogs, playLogs) =>
    dispatch(submitLogs(scopeLogs, playLogs)),
  clearData: () => dispatch(clearData())
})

const ResultsScreen = ({
  navigation,
  isLoading,
  scopeLogs,
  playLogs,
  submitLogs,
  clearData
}) => {
  const getTotalWinnings = logs => {
    let total = 0
    logs.forEach(log => {
      total += parseInt(log.payoutAmount)
    })
    return total
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Grid>
          <Row size={70}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>Total Scope Logs: {scopeLogs.length}</Text>
              <Text>Total Play Logs: {playLogs.length}</Text>
              <Text>Total Winnings: {getTotalWinnings(playLogs)}</Text>
            </View>
          </Row>
          <Row size={30}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <Button
                  success
                  style={{
                    width: 150,
                    justifyContent: 'center',
                    marginTop: 10
                  }}
                  onPress={async () => {
                    await submitLogs(scopeLogs, playLogs)
                    clearData()
                    navigation.navigate('StartSession')
                  }}
                >
                  <Text>Finish Session</Text>
                </Button>
              )}
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen)
