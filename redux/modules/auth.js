import * as api from '../../api'
import { setCookie, removeCookie } from './cookie'

// types
const LOGIN_REQ = 'LOGIN_REQ'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

// actions
export const loginReq = () => ({
  type: LOGIN_REQ,
})
export const loginSuccess = ({ token, email }) => ({
  type: LOGIN_SUCCESS,
  payload: { token, email },
})
export const loginFail = ({ code, message }) => ({
  type: LOGIN_FAIL,
  payload: { code, message },
})
export const fbLogin = providerData => async dispatch => {
  dispatch(loginReq())
  try {
    const { data, status } = await api.post(
      `${api.SERVER}/fb-login`,
      providerData
    )
    if (data.token == 'undefined' || data.token == undefined) {
      dispatch({
        type: LOGOUT,
      })
    } else {
      dispatch(setCookie('email', data.email))
      dispatch(setCookie('token', data.token))
      dispatch(loginSuccess(data))
    }
  } catch (error) {
    dispatch(
      loginFail({
        code: status.code,
        message: status.message,
      })
    )
  }
}
export const logout = () => async dispatch => {
  dispatch(removeCookie('email'))
  dispatch(removeCookie('token'))
  dispatch({
    type: LOGOUT,
  })
}

const initialState = {
  loaded: false,
  error: {},
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        loaded: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loaded: false,
        email: action.payload.email,
        token: action.payload.token,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loaded: false,
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
export default authReducer
