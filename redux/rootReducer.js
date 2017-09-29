import { combineReducers } from 'redux'
import modalReducer from './modules/modal'
import vodReducer from './modules/vod'
import loginReducer from './modules/login'
const rootReducer = combineReducers({
  modal: modalReducer,
  vod: vodReducer,
  login: loginReducer,
})

export default rootReducer
