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
  const cookies = getAllCookies(options)

  // Set default language
  cookies.lang = cookies.lang || 'en'

  // Load auth state from cookies
  const auth = {
    email: cookies.email,
    token: cookies.token,
  }

  // Init state
  state.cookie = cookies
  state.auth = auth

  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
