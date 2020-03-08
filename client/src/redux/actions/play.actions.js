import ky from 'ky'
import { API_PATH, SPREADSHEET_ID } from '../../utils'

export const SET_CASINO = 'SET_CASINO'
export const CLEAR_DATA = 'CLEAR_DATA'
export const ADD_SCOPE_LOG = 'ADD_SCOPE_LOG'
export const ADD_PLAY_LOG = 'ADD_PLAY_LOG'
export const SUBMIT_LOGS_START = 'SUBMIT_LOGS_START'
export const SUBMIT_LOGS_ERROR = 'SUBMIT_LOGS_ERROR'
export const SUBMIT_LOGS_SUCCESS = 'SUBMIT_LOGS_SUCCESS'

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

export const submitLogsStart = () => ({
  type: SUBMIT_LOGS_START
})

export const submitLogsError = error => ({
  type: SUBMIT_LOGS_ERROR,
  payload: { error }
})

export const submitLogsSuccess = () => ({
  type: SUBMIT_LOGS_SUCCESS
})

export const submitLogs = (scopeLogs, playLogs) => async dispatch => {
  dispatch(submitLogsStart())
  await ky.post(`${API_PATH}/logs`, { json: { 
    spreadsheetId: SPREADSHEET_ID,
    scopeLogs, playLogs 
  }})
    .then(response => dispatch(submitLogsSuccess()))
    .catch(error => dispatch(submitLogsError(error)))
}
