export const SET_CASINO = 'SET_CASINO'
export const CLEAR_DATA = 'CLEAR_DATA'
export const ADD_SCOPE_LOG = 'ADD_SCOPE_LOG'
export const ADD_PLAY_LOG = 'ADD_PLAY_LOG'

export const setCasino = casino => ({
  type: SET_CASINO,
  payload: { casino }
})

export const clearData = () => ({
  type: CLEAR_DATA
})

export const addScopeLog = scopeLog => ({
  type: ADD_SCOPE_LOG,
  payload: { scopeLog }
})

export const addPlayLog = playLog => ({
  type: ADD_PLAY_LOG,
  payload: { playLog }
})