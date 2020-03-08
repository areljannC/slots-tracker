import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

const SettingsScreen = ({ signOut }) => {
  return (
    <View style={styles.container}>
      <Button onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(null, mapDispatchToProps)(SettingsScreen)
