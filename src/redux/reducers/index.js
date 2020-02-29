import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { playReducer } from './play.reducer'

export const rootReducer = combineReducers({ 
  authState: authReducer, 
  playState: playReducer
})
