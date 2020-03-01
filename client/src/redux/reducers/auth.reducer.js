import {
  SET_AUTH_START,
  SET_AUTH_ERROR,
  SET_AUTH_SUCCESS
} from '../actions'

const initialState = {
  isLoading: false,
  error: null,
  user: null
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_AUTH_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        error: null
      }
    case SET_AUTH_ERROR:
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
