import React from 'react'
import { connect } from 'react-redux'
import { Container, View, Text, Button } from 'native-base'

const OverviewScreen = () => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          success
          onPress={() => {
            navigation.navigate('EnterCasino')
          }}
        >
          <Text>Start Session</Text>
        </Button>
      </View>
    </Container>
  )
}

export default connect(null, null)(OverviewScreen)
