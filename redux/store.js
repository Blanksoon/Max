import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Cookies from 'universal-cookie'
import rootReducer from './rootReducer'

const initialState = {
  cookie: {},
  modal: {},
  vod: {},
}

const getAllCookies = ({ req, isServer }) => {
  let cookies
  if (isServer) {
    cookies = new Cookies(req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  return cookies.getAll()
}
export const initStore = (state = initialState, options) => {
  let cookies = getAllCookies(options)
  state.cookie = cookies
  state.cookie.lang = state.cookie.lang || 'en'
  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
