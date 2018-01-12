import Cookies from 'universal-cookie'

// types
const SET_COOKIE = 'SET_COOKIE'
const REMOVE_COOKIE = 'REMOVE_COOKIE'
const LOAD_ALL_COOKIES = 'LOAD_ALL_COOKIES'

// actions
export const setCookie = (key, value) => dispatch => {
  const cookies = new Cookies()
  cookies.set(key, value)
  dispatch({
    type: SET_COOKIE,
    payload: {
      key,
      value,
    },
  })
}
export const removeCookie = key => dispatch => {
  const cookies = new Cookies()
  cookies.remove(key)
  dispatch({
    type: REMOVE_COOKIE,
    payload: key,
  })
}

// cookies must be an object contain key/value of all cookies
export const loadAllCookies = cookies => {
  return {
    type: LOAD_ALL_COOKIES,
    payload: cookies,
  }
}

// reducer
const initialState = {}
const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE:
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value,
      }
    case REMOVE_COOKIE:
      const newState = Object.assign({}, state)
      delete newState[action.payload]
      return newState
    case LOAD_ALL_COOKIES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default cookieReducer
