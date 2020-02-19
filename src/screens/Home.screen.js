import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

const HomeScreen = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(res => {
        setPosts([...posts, res.title])
      })
  }

  return (
    <View style={styles.container}>
      <Button title='Fetch Data' onPress={fetchPosts} />
      {
        posts.map(post => <Text>{post}</Text>)
      }
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
