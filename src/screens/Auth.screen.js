import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Grid>
        <Row size={70} />
        <Row size={30}>
          <View style={styles.authButtonsContainer}>
            <Button
              title='Sign In'
              buttonStyle={styles.button}
              onPress={() => {
                navigation.navigate('SignIn')
              }}
            />
            <Button
              title='Sign Up'
              buttonStyle={styles.button}
              onPress={() => {
                navigation.navigate('SignUp')
              }}
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
  authButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    marginBottom: 10,
  },
})

export default AuthScreen
