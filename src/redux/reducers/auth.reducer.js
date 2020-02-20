import {
  USER_SET_AUTH_START,
  USER_SET_AUTH_ERROR,
  USER_SET_AUTH_SUCCESS
} from '../actions'

const initialState = {
  isLoading: false,
  error: null,
  user: null
}


export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_SET_AUTH_START:
      return {
        ...state,
        isLoading: true,
        erroe: null
      }
    case USER_SET_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        error: null
      }
    case USER_SET_AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload.error
      }
    default:
      return state
  }
}
