import {
  SET_CASINO,
  CLEAR_DATA,
  ADD_SCOPE_LOG,
  ADD_PLAY_LOG,
  SUBMIT_LOGS_START,
  SUBMIT_LOGS_ERROR,
  SUBMIT_LOGS_SUCCESS
} from '../actions'

const initialState = {
  isLoading: false,
  casino: '',
  scopeLogs: [],
  playLogs: []
}

export const playReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CASINO:
      return {
        ...state,
        casino: payload.casino
      }
    case CLEAR_DATA:
      return {
        ...state,
        casino: '',
        scopeLogs: [],
        playLogs: []
      }
    case ADD_SCOPE_LOG:
      return {
        ...state,
        scopeLogs: [...state.scopeLogs, payload.scopeLog]
      }
    case ADD_PLAY_LOG:
      return {
        ...state,
        playLogs: [...state.playLogs, payload.playLog]
      }
    case SUBMIT_LOGS_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case SUBMIT_LOGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      }
    case SUBMIT_LOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      }
    default:
      return state
  }
}
