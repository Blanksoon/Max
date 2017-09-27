import { combineReducers } from 'redux'
import modalReducer from './modules/modal'
import vodReducer from './modules/vod'

const rootReducer = combineReducers({
  modal: modalReducer,
  vod: vodReducer,
})

export default rootReducer
