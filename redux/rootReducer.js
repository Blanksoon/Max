import { combineReducers } from 'redux'
import cookieReducer from './modules/cookie'
import modalReducer from './modules/modal'
import vodReducer from './modules/vod'

const rootReducer = combineReducers({
  cookie: cookieReducer,
  modal: modalReducer,
  vod: vodReducer,
})

export default rootReducer
