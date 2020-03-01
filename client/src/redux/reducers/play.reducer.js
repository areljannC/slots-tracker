import { SET_CASINO, CLEAR_DATA, ADD_SCOPE_LOG, ADD_PLAY_LOG } from '../actions'

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
    default:
      return state
  }
}
