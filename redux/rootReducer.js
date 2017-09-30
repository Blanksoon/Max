import { combineReducers } from 'redux'
import authReducer from './modules/auth'
import cookieReducer from './modules/cookie'
import modalReducer from './modules/modal'
import vodReducer from './modules/vod'

const rootReducer = combineReducers({
  auth: authReducer,
  cookie: cookieReducer,
  modal: modalReducer,
  vod: vodReducer,
})

export default rootReducer
