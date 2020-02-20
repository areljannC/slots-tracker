import React from 'react'
import { connect } from 'react-redux'
import { userSignOut } from '../redux/actions'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

const mapStateToProps = state => ({
  user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(userSignOut())
})

const HomeScreen = ({ user, userSignOut }) => {
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={userSignOut} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
