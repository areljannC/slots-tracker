import React from 'react'
import { Container, View, Text, Button } from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'

const AuthScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Grid>
          <Row size={70} />
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
                onPress={() => {
                  navigation.navigate('SignIn')
                }}
              >
                <Text>Sign In</Text>
              </Button>
              <Button
                transparent
                style={{ width: 150, justifyContent: 'center', marginTop: 10 }}
                onPress={() => {
                  navigation.navigate('SignUp')
                }}
              >
                <Text style={{ color: 'black' }}>Sign Up</Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </View>
    </Container>
  )
}
export default AuthScreen
