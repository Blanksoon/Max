import { combineReducers } from 'redux'
import counterReducer from './counter'
import modalReducer from './modal'
import vodReducer from './vods'

const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
  vod: vodReducer,
})

export default rootReducer
