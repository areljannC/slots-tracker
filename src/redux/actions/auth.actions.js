import { signIn, signUp, signOut } from '../../firebase'

export const USER_SET_AUTH_START = 'USER_SET_AUTH_START'
export const USER_SET_AUTH_ERROR = 'USER_SET_AUTH_ERROR'
export const USER_SET_AUTH_SUCCESS = 'USER_SET_AUTH_SUCCESS'

export const userSetAuthStart = () => ({ type: USER_SET_AUTH_START })

export const userSetAuthError = error => ({
  type: USER_SET_AUTH_ERROR,
  payload: { error },
})
export const userSetAuthSuccess = user => ({
  type: USER_SET_AUTH_SUCCESS,
  payload: { user },
})

export const userSignIn = (email, password) => async dispatch => {
  await signIn(email, password)
}

export const userSignUp = (
  firstName,
  lastName,
  email,
  password
) => async dispatch => { 
  await signUp(email, password) 
}

export const userSignOut = () => async dispatch => { 
  await signOut() 
}

export const userSetAuth = user => async dispatch => {
  dispatch(userSetAuthStart())
  dispatch(userSetAuthSuccess(user))
}
