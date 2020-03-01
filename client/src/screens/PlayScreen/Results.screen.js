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
import { Grid, Row } from 'react-native-easy-grid'

const mapStateToProps = state => ({
  scopeLogs: state.playState.scopeLogs,
  playLogs: state.playState.playLogs
})

const ResultsScreen = ({ navigation, scopeLogs, playLogs}) => {
  const getTotalWinnings = logs => {
    let total = 0
    logs.forEach(log => {
      total += parseInt(log.payoutAmount)
    })
    return total
  }
  
  console.log(JSON.stringify(scopeLogs))

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
              <Button
                success
                style={{ width: 150, justifyContent: 'center', marginTop: 10 }}
                onPress={() => navigation.navigate('StartSession')}
              >
                <Text>Finish Session</Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}

export default connect(mapStateToProps)(ResultsScreen)
