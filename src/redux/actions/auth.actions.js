export const USER_SIGN_IN_START = 'USER_SIGN_IN_START'
export const USER_SIGN_IN_ERROR = 'USER_SIGN_IN_ERROR'
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_FINISH'
export const USER_SIGN_UP_START = 'USER_SIGN_UP_START'
export const USER_SIGN_UP_ERROR = 'USER_SIGN_UP_ERROR'
export const USER_SIGN_UP_SUCCESS = 'USER_SIGN_UP_FINISH'
export const USER_SIGN_OUT_START = 'USER_SIGN_OUT_START'
export const USER_SIGN_OUT_ERROR = 'USER_SIGN_OUT_ERROR'
export const USER_SIGN_OUT_SUCCESS = 'USER_SIGN_OUT_FINISH'

export const userSignInStart = () => ({ type: USER_SIGN_IN_START })
export const userSignUpStart = () => ({ type: USER_SIGN_UP_START })
export const userSignOutStart = () => ({ type: USER_SIGN_OUT_START })

export const userSignInError = error => ({
  type: USER_SIGN_IN_ERROR,
  payload: { error },
})

export const userSignUpError = error => ({
  type: USER_SIGN_UP_ERROR,
  payload: { error },
})

export const userSignOutError = error => ({
  type: USER_SIGN_OUT_ERROR,
  payload: { error },
})

export const userSignInSuccess = user => ({
  type: USER_SIGN_IN_SUCCESS,
  payload: { user },
})

export const userSignUpSuccess = user => ({
  type: USER_SIGN_UP_SUCCESS,
  payload: { user },
})

export const userSignOutSuccess = () => ({
  type: USER_SIGN_OUT_SUCCESS,
})

export const userSignIn = (email, password) => async dispatch => {
  dispatch(userSignInStart())
  console.log(email, password)
  dispatch(userSignInSuccess())
}

export const userSignUp = (firstName, lastName, email, password) => async dispatch => {
  dispatch(userSignUpStart())
  console.log(firstName, lastName, email, password)
  dispatch(userSignUpSuccess())
}

export const userSignOut = () => async dispatch => {
  dispatch(userSignOutStart())
  dispatch(userSignOutSuccess())
}
