import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home view</Text>
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

export default HomeScreen
