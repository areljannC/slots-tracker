import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

const mapStateToProps = state => ({
  user: state.authState.user,
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})

const OverviewScreen = ({ user, signOut }) => {
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
    alignItems: 'center',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OverviewScreen)
