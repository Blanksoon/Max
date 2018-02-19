import { combineReducers } from 'redux'
import authReducer from './modules/auth'
import cookieReducer from './modules/cookie'
import liveReducer from './modules/live'
import modalReducer from './modules/modal'
import vodReducer from './modules/vod'
import loginReducer from './modules/login'
import livesReducer from './modules/live'
import programReducer from './modules/program'
import productsReducer from './modules/product'
import newsReducer from './modules/maxnews'
const rootReducer = combineReducers({
  auth: authReducer,
  cookie: cookieReducer,
  live: liveReducer,
  modal: modalReducer,
  vod: vodReducer,
  login: loginReducer,
  program: programReducer,
  product: productsReducer,
  news: newsReducer,
})

export default rootReducer
