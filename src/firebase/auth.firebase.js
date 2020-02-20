import auth from '@react-native-firebase/auth'

export const signIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password)
    console.log('Signed in!')
  } catch (error) {
    console.error(error.message)
  }
}

export const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password)
    console.log('Signed up!')
  } catch (error) {
    console.error(error.message)
  }
}

export const signOut = async () => {
  try {
    await auth().signOut()
    console.log('Signed out!')
  } catch (error) {
    console.log(error.message)
  }
}