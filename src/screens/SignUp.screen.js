import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SignUpScreen
