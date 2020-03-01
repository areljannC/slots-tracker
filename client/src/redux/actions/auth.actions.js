import { firebaseSignIn, firebaseSignUp, firebaseSignOut } from '../../firebase'

export const SET_AUTH_START = 'SET_AUTH_START'
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS'

export const setAuthStart = () => ({ type: SET_AUTH_START })

export const setAuthError = error => ({
  type: SET_AUTH_ERROR,
  payload: { error }
})
export const setAuthSuccess = user => ({
  type: SET_AUTH_SUCCESS,
  payload: { user }
})

export const userSignIn = (email, password) => async dispatch => {
  await firebaseSignIn(email, password)
}

export const userSignUp = (
  firstName,
  lastName,
  email,
  password
) => async dispatch => {
  await firebaseSignUp(email, password)
}

export const signOut = () => async dispatch => {
  await firebaseSignOut()
}

export const setAuth = user => async dispatch => {
  dispatch(setAuthStart())
  dispatch(setAuthSuccess(user))
}
