import {
  USER_SIGN_IN_START,
  USER_SIGN_UP_START,
  USER_SIGN_OUT_START,
  USER_SIGN_IN_ERROR,
  USER_SIGN_UP_ERROR,
  USER_SIGN_OUT_ERROR,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_OUT_SUCCESS,
} from '../actions'

const initialState = {
  isLoading: false,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_SIGN_IN_START:
    case USER_SIGN_UP_START:
    case USER_SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state
  }
}
