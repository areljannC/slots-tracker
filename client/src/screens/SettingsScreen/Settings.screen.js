import React from 'react'
import { connect } from 'react-redux'
import { userSignOut } from '../../redux/actions'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
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

export default SettingsScreen
