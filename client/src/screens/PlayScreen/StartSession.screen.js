import React from 'react'
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

const StartSessionScreen = ({ navigation }) => (
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

export default StartSessionScreen
