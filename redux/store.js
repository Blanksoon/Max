import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Cookies from 'universal-cookie'
import rootReducer from './rootReducer'

const state = {
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
export const initStore = (initialState = state, options) => {
  let cookies = getAllCookies(options)
  initialState.cookie = cookies
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
