import auth from '@react-native-firebase/auth'

export const firebaseSignIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.error(error.message)
  }
}

export const firebaseSignUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    console.error(error.message)
  }
}

export const firebaseSignOut = async () => {
  try {
    await auth().signOut()
  } catch (error) {
    console.log(error.message)
  }
}